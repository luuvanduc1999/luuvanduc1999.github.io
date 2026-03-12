import React, { useEffect } from 'react';
import './CertAdp.css';

export const CertAdp: React.FC = () => {
  useEffect(() => {
    document.title = "UiRPA Dumps - UiPath Certification";

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
            
            // Check Mode
            const urlParams = new URLSearchParams(window.location.search);
            const mode = urlParams.get('mode');
            
            if (mode === 'practice') {
                 // Initialize Practice Mode
                 initPracticeMode();
            } else {
                 // Normal Search Mode
                 updateStatus(allQuestions.length, "Tổng");
                 renderQuestions(allQuestions);
            }
        })
        .catch(err => {
            console.error(err);
            if (statusEl) statusEl.innerHTML = `<span class="text-danger">Lỗi tải dữ liệu!</span>`;
        });

    // --- PRACTICE MODE LOGIC ---
    let practiceSession: any = {
        questions: [],
        currentIndex: 0,
        score: 0,
        answered: false
    };

    function initPracticeMode() {
        // 1. Hide Search Header
        const header = document.querySelector('.header-fixed') as HTMLElement;
        if(header) header.style.display = 'none';
        
        // 2. Render Intro Screen
        renderPracticeIntro();
    }

    function setupPracticeHeader() {
        const header = document.querySelector('.header-fixed') as HTMLElement;
        if(header) header.style.display = 'block';

        const headerContainer = document.querySelector('.header-fixed .container') as HTMLElement;
        if(headerContainer) {
            headerContainer.innerHTML = `
                <div class="d-flex justify-content-between align-items-center" style="height: 40px;">
                    <button class="btn btn-sm btn-outline-danger" onclick="window.exitPractice()" style="font-size: 12px;">Thoát</button>
                    <div class="text-center" style="line-height:1.2;">
                         <div id="p-step" class="fw-bold" style="font-size:14px;">...</div>
                         <div id="p-score" class="text-success" style="font-size:11px;">Đúng: 0</div>
                    </div>
                    <button id="btn-next" class="btn btn-sm btn-primary" onclick="window.nextPracticeQuestion()" disabled style="font-size: 12px; min-width: 80px;">Tiếp &rsaquo;</button>
                </div>
            `;
        }
    }

    function renderPracticeIntro() {
        if(!questionsContainer) return;
        questionsContainer.innerHTML = `
            <div class="text-center mt-5">
                <h3 class="text-primary mb-4">Chế độ Luyện tập</h3>
                <p class="mb-4">Chọn số lượng câu hỏi ngẫu nhiên:</p>
                
                <div class="mb-4">
                   <button class="btn-practice-choice" onclick="window.startPractice(5)">5 câu</button>
                   <button class="btn-practice-choice" onclick="window.startPractice(10)">10 câu</button>
                   <button class="btn-practice-choice" onclick="window.startPractice(${allQuestions.length})">All in one</button>
                </div>
                
                <div class="d-flex justify-content-center align-items-center mb-4">
                    <span class="me-2 text-muted" style="font-size:14px">Hoặc nhập số lượng:</span>
                    <input type="number" id="customCount" class="form-control form-control-sm text-center" style="width: 80px;" value="20" min="1">
                    <button class="btn btn-sm btn-primary ms-2" onclick="window.startCustomPractice()">Bắt đầu</button>
                </div>
                
                <div class="mt-5">
                    <button class="btn btn-link text-secondary text-decoration-none" style="font-size: 12px;" onclick="window.location.href=window.location.pathname">← Quay về danh sách</button>
                </div>
            </div>
        `;
    }

    (window as any).exitPractice = () => {
         initPracticeMode();
    };

    (window as any).startPractice = (count: number) => {
        // Shuffle and pick
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        practiceSession.questions = shuffled.slice(0, count);
        practiceSession.currentIndex = 0;
        practiceSession.score = 0;
        practiceSession.answered = false;
        
        setupPracticeHeader();
        renderPracticeQuestion();
    };

    (window as any).startCustomPractice = () => {
        const input = document.getElementById('customCount') as HTMLInputElement;
        if (!input) return;
        let val = parseInt(input.value);
        if(!val || val < 1) val = 10; 
        if(val > allQuestions.length) val = allQuestions.length;
        (window as any).startPractice(val);
    };

    (window as any).togglePracticeExp = () => {
        const div = document.getElementById('practice-exp');
        const btn = document.getElementById('btn-practice-exp-toggle');
        if (!div || !btn) return;
        
        const isHidden = div.style.display === 'none';
        div.style.display = isHidden ? 'block' : 'none';
        btn.innerText = isHidden ? 'ĐÓNG GIẢI THÍCH' : 'XEM GIẢI THÍCH';
        btn.classList.toggle('active', isHidden);
    };

    function renderPracticeQuestion() {
        if(!questionsContainer) return;
        const q = practiceSession.questions[practiceSession.currentIndex];
        const total = practiceSession.questions.length;
        const current = practiceSession.currentIndex + 1;
        
        // Update Header
        const stepEl = document.getElementById('p-step');
        const scoreEl = document.getElementById('p-score');
        const nextBtn = document.getElementById('btn-next') as HTMLButtonElement;
        
        if (stepEl) stepEl.innerText = `Câu ${current} / ${total}`;
        if (scoreEl) scoreEl.innerText = `Đúng: ${practiceSession.score}`;
        
        if (nextBtn) {
            nextBtn.disabled = true;
            nextBtn.innerText = (current === total) ? 'Kết quả' : 'Tiếp ›';
            nextBtn.classList.remove('btn-success');
            nextBtn.classList.add('btn-primary');
        }

        const newTagHtml = (q.isNew === true) ? `<span class="badge-new">NEW</span>` : ``;

        let optionsHtml = q.options.map((opt: string, i: number) => {
            const letter = String.fromCharCode(65 + i);
            return `
                <div class="option-item practice-option" id="opt-${i}" onclick="window.checkPracticeAnswer(${i})">
                    <span class="option-prefix">${letter}</span>
                    <div class="content-area">${(window as any).cleanHTML(opt)}</div>
                </div>
            `;
        }).join('');

        // Remove top stats since they are in header now
        questionsContainer.innerHTML = `
             <div class="card question-card" style="margin-top: 10px;">
                <div class="card-body pb-2">
                    <div class="mb-2">
                         <span class="badge bg-light text-dark border me-1">#${practiceSession.currentIndex + 1}</span>
                         ${newTagHtml} 
                    </div>
                    <div class="content-area mb-3 fw-bold text-dark" style="font-size: 14px;">${(window as any).cleanHTML(q.examQue)}</div>
                    <div class="options-list">${optionsHtml}</div>
                </div>
                
                <div class="explanation-section" id="practice-exp" style="display:none;">
                    <strong class="text-success">Đáp án: ${q.examAns}</strong>
                    <hr class="my-2"/>
                    <div class="content-area">${(window as any).cleanHTML(q.examAnsDesc)}</div>
                </div>
                <button id="btn-practice-exp-toggle" class="btn-toggle-exp" style="display:none;" onclick="window.togglePracticeExp()">XEM GIẢI THÍCH</button>
            </div>
            <div style="height: 60px;"></div> <!-- Spacer -->
        `;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    (window as any).checkPracticeAnswer = (selectedIndex: number) => {
         // Prevent re-selection
         if(practiceSession.answered) return;
         practiceSession.answered = true;

         const q = practiceSession.questions[practiceSession.currentIndex];
         const correctIndex = q.examAns.trim().toUpperCase().charCodeAt(0) - 65;
         
         const selectedEl = document.getElementById(`opt-${selectedIndex}`);
         const correctEl = document.getElementById(`opt-${correctIndex}`);
         
         // Highlight
         if(selectedIndex === correctIndex) {
             selectedEl?.classList.add('user-correct');
             practiceSession.score++;
         } else {
             selectedEl?.classList.add('user-wrong');
             correctEl?.classList.add('real-correct');
         }
         
         // Update Header Score immediately
         const scoreEl = document.getElementById('p-score');
         if (scoreEl) scoreEl.innerText = `Đúng: ${practiceSession.score}`;

         // Disable all options
         const allOpts = document.querySelectorAll('.practice-option');
         allOpts.forEach(el => el.classList.add('disabled'));

         // Enable Next Button
         const nextBtn = document.getElementById('btn-next') as HTMLButtonElement;
         if (nextBtn) {
             nextBtn.disabled = false;
             nextBtn.classList.remove('btn-primary');
             nextBtn.classList.add('btn-success');
         }

         // Show Explanation Toggle
         const btnExp = document.getElementById('btn-practice-exp-toggle');
         if(btnExp) btnExp.style.display = 'block';
    };

    (window as any).nextPracticeQuestion = () => {
         if (practiceSession.currentIndex < practiceSession.questions.length - 1) {
             practiceSession.currentIndex++;
             practiceSession.answered = false;
             renderPracticeQuestion();
         } else {
             renderPracticeResult();
         }
    };

    function renderPracticeResult() {
         if(!questionsContainer) return;
         const total = practiceSession.questions.length;
         const score = practiceSession.score;
         const percent = Math.round((score / total) * 100);
         
         questionsContainer.innerHTML = `
            <div class="card question-card text-center py-5">
                <h3 class="mb-3">Kết quả: ${score} / ${total}</h3>
                <h1 class="text-primary mb-3">${percent}%</h1>
                <p>Bạn đã hoàn thành bài luyện tập!</p>
                
                <div class="mt-4">
                    <button class="btn btn-secondary me-2" onclick="window.location.href=window.location.pathname">Về trang chủ</button>
                    <button class="btn btn-primary" onclick="window.startPractice(${total})">Làm lại (${total} câu)</button>
                </div>
            </div>
         `;
    }

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
        
        delete (window as any).startPractice;
        delete (window as any).startCustomPractice;
        delete (window as any).checkPracticeAnswer;
        delete (window as any).nextPracticeQuestion;
        delete (window as any).togglePracticeExp;
        delete (window as any).exitPractice;
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
                    
                    <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-outline-primary py-0 me-2" style={{fontSize: '10px', height: '20px', lineHeight: '1'}} onClick={() => window.location.search = '?mode=practice'}>Luyện tập</button>
                        <div className="fw-bold text-secondary" style={{fontSize: '10px'}}>UiADPv1</div>
                    </div>
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
