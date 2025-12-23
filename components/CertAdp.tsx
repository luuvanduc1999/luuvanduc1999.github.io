import React, { useEffect } from 'react';
import './CertAdp.css';

export const CertAdp: React.FC = () => {
  useEffect(() => {
    // 1. Add Bootstrap
    const link = document.createElement('link');
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // 2. Security Scripts
    const handleContextMenu = (e: Event) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.keyCode === 123) return false;
        if (e.ctrlKey && e.shiftKey && (e.keyCode === 'I'.charCodeAt(0) || e.keyCode === 'J'.charCodeAt(0))) return false;
        if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) return false;
    };
    const handleCopy = (e: Event) => e.preventDefault();
    
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown as any);
    document.addEventListener('copy', handleCopy);
    
    // Debugger loop
    const debugInterval = setInterval(function() {
        // debugger; 
    }, 100);

    // 3. Logic
    let allQuestions: any[] = [];
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const clearBtn = document.getElementById('clearSearch') as HTMLElement;
    const filterNewToggle = document.getElementById('filterNewToggle') as HTMLInputElement;
    const questionsContainer = document.getElementById('questionsContainer');
    const statusEl = document.getElementById('status');
    const btt = document.getElementById('backToTop');

    // Helper functions attached to window for inline onclicks
    (window as any).cleanHTML = (htmlString: string) => {
         if (!htmlString) return "";
         return htmlString.replace(/<\/?(html|body|head|title)[^>]*>/gi, "");
    };

    (window as any).toggleExp = (btn: HTMLElement, id: number) => {
        const div = document.getElementById(`exp-${id}`);
        if (!div) return;
        const isHidden = div.style.display !== 'block';
        div.style.display = isHidden ? 'block' : 'none';
        btn.innerText = isHidden ? 'ĐÓNG GIẢI THÍCH' : 'XEM GIẢI THÍCH';
        btn.classList.toggle('active', isHidden);
    };

    (window as any).clearInput = () => {
        if (searchInput) {
            searchInput.value = '';
            if (clearBtn) clearBtn.style.display = 'none';
            applyFilters();
            searchInput.focus();
        }
    };

    function updateStatus(count: number, label: string) {
        if (statusEl) statusEl.innerText = `${label}: ${count}`;
    }

    function renderQuestions(questions: any[]) {
        if (!questionsContainer) return;
        questionsContainer.innerHTML = questions.length ? '' : '<div class="text-center mt-5 text-muted">Không tìm thấy kết quả</div>';

        questions.forEach((q, index) => {
            const correctLetter = q.examAns.trim().toUpperCase();
            const newTagHtml = (q.isNew === true) ? `<span class="badge-new">NEW</span>` : ``;

            let optionsHtml = q.options.map((opt: string, i: number) => {
                const letter = String.fromCharCode(65 + i);
                return `
                    <div class="option-item ${letter === correctLetter ? 'is-correct' : ''}">
                        <span class="option-prefix">${letter}</span>
                        <div class="content-area">${(window as any).cleanHTML(opt)}</div>
                    </div>
                `;
            }).join('');

            const card = document.createElement('div');
            card.className = 'card question-card';
            card.innerHTML = `
                <div class="card-body pb-2">
                    <div class="d-flex justify-content-between mb-1">
                        <div>
                            <span class="badge bg-light text-dark border" style="font-size: 9px;">#${index + 1}</span>
                            ${newTagHtml} 
                        </div>
                        <span class="text-success fw-bold" style="font-size: 11px;">Đáp án: ${q.examAns}</span>
                    </div>
                    <div class="content-area mb-2 fw-bold text-dark" style="font-size: 13.5px;">${(window as any).cleanHTML(q.examQue)}</div>
                    <div class="options-list">${optionsHtml}</div>
                </div>
                <div class="explanation-section" id="exp-${index}">
                    <div class="content-area">${(window as any).cleanHTML(q.examAnsDesc)}</div>
                </div>
                <button class="btn-toggle-exp" onclick="window.toggleExp(this, ${index})">XEM GIẢI THÍCH</button>
            `;
            questionsContainer.appendChild(card);
        });
    }

    function applyFilters() {
        if (!searchInput || !filterNewToggle) return;
        const kw = searchInput.value.toLowerCase().trim();
        const isFilterNew = filterNewToggle.checked;

        if (clearBtn) clearBtn.style.display = kw.length > 0 ? 'block' : 'none';

        const filtered = allQuestions.filter(q => {
            if (isFilterNew && q.isNew !== true) return false;
            if (kw === '') return true;
            return q.examQue.toLowerCase().includes(kw) || 
                   q.options.some((o: string) => o.toLowerCase().includes(kw));
        });

        renderQuestions(filtered);
        updateStatus(filtered.length, isFilterNew ? "Câu mới tìm thấy" : "Tìm thấy");
    }

    // Event Listeners
    let timeout: any;
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            clearTimeout(timeout);
            timeout = setTimeout(applyFilters, 250);
        });
    }

    if (filterNewToggle) {
        filterNewToggle.addEventListener('change', () => {
            applyFilters();
        });
    }

    if (btt) {
        const handleScroll = () => {
            if (btt) btt.style.display = window.scrollY > 300 ? 'block' : 'none';
        };
        window.addEventListener('scroll', handleScroll);
        btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Cleanup scroll listener
        // (We'll do it in return)
    }

    // Load Data
    fetch('/static/cert/adp/output.json')
        .then(res => res.json())
        .then(data => {
            allQuestions = data.questions;
            const newCount = allQuestions.filter((q: any) => q.isNew === true).length;
            console.log(`Loaded ${allQuestions.length} questions. New: ${newCount}`);
            updateStatus(allQuestions.length, "Tổng");
            renderQuestions(allQuestions);
        })
        .catch(err => {
            console.error(err);
            if (statusEl) statusEl.innerHTML = `<span class="text-danger">Lỗi tải dữ liệu!</span>`;
        });

    return () => {
        document.head.removeChild(link);
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('keydown', handleKeyDown as any);
        document.removeEventListener('copy', handleCopy);
        clearInterval(debugInterval);
        
        // Cleanup window functions
        delete (window as any).toggleExp;
        delete (window as any).cleanHTML;
        delete (window as any).clearInput;
    };
  }, []);

  return (
    <div className="cert-adp-wrapper">
        <div className="header-fixed">
            <div className="container px-3">
                <div className="search-group">
                    <input type="text" id="searchInput" className="form-control form-control-sm" placeholder="Tìm kiếm nhanh..." />
                    <button id="clearSearch" type="button" onClick={() => (window as any).clearInput()}>Clear</button>
                </div>
                
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <div className="d-flex align-items-center">
                        <div id="status" className="text-muted me-3" style={{fontSize: '10px'}}>Đang tải...</div>
                        
                        <div className="form-check form-switch mb-0 d-flex align-items-center" style={{minHeight: 'auto', paddingLeft: '2em'}}>
                            <input className="form-check-input shadow-none" type="checkbox" role="switch" id="filterNewToggle" />
                            <label className="form-check-label ms-1 filter-label text-danger" htmlFor="filterNewToggle">Newest</label>
                        </div>
                    </div>
                    
                    <div className="fw-bold text-secondary" style={{fontSize: '10px'}}>UiADPv1</div>
                </div>
            </div>
        </div>

        <div className="container content-wrapper px-2">
            <div id="questionsContainer"></div>
        </div>

        <button id="backToTop">↑</button>
    </div>
  );
};
