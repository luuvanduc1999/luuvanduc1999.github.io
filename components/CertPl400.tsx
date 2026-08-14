import React, { useEffect } from 'react';
import './CertPl.css';

export const CertPl400: React.FC = () => {
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

    // Strips HTML tags to get plain text (e.g. "<p>D</p>" → "D")
    (window as any).extractAnswer = (html: string): string => {
        if (!html) return '';
        return html.replace(/<[^>]+>/g, '').trim();
    };

    // Parses embedded <li class="multi-choice-item"> options from examQue HTML
    (window as any).parseOptions = (examQueHtml: string): {letter: string, html: string, isCorrect: boolean}[] => {
        const tmp = document.createElement('div');
        tmp.innerHTML = (window as any).cleanHTML(examQueHtml);
        const items = tmp.querySelectorAll('li.multi-choice-item');
        return Array.from(items).map((li: Element) => {
            const letterEl = li.querySelector('.multi-choice-letter');
            const letter = letterEl?.getAttribute('data-choice-letter') || '';
            const isCorrect = li.classList.contains('correct-hidden');
            if (letterEl) letterEl.remove();
            return { letter, html: (li as HTMLElement).innerHTML.trim(), isCorrect };
        });
    };

    // Returns examQue HTML with the options <ul> removed (for practice mode question display)
    (window as any).questionTextOnly = (examQueHtml: string): string => {
        const tmp = document.createElement('div');
        tmp.innerHTML = (window as any).cleanHTML(examQueHtml);
        tmp.querySelectorAll('ul, .voted-answers-tally').forEach((el: Element) => el.remove());
        return tmp.innerHTML;
    };

    (window as any).toggleExp = (btn: HTMLElement, id: number) => {
        const div = document.getElementById(`exp-${id}`);
        if (!div) return;
        const isHidden = div.style.display !== 'block';
        div.style.display = isHidden ? 'block' : 'none';
        btn.innerText = isHidden ? '\u25be Đóng giải thích' : '\u25b8 Xem giải thích';
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
            const answerText = (window as any).extractAnswer(q.examAns);
            const hasExp = q.examAnsDesc && (window as any).extractAnswer(q.examAnsDesc).length > 0;

            // AI verification badges
            const gptAns = q.chatgptVerification?.answer;
            const gemAns = q.geminiVerification?.answer;
            const aiBadges = [
                gptAns ? `<span class="badge-ai gpt">GPT: ${gptAns}</span>` : '',
                gemAns ? `<span class="badge-ai gem">Gem: ${gemAns}</span>` : ''
            ].filter(Boolean).join(' ');

            const card = document.createElement('div');
            card.className = 'card question-card';
            card.innerHTML = `
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <div class="d-flex align-items-center gap-2">
                            <span class="q-number">#${index + 1}</span>
                            ${q.isVerified ? '<span class="badge-verified">✓</span>' : ''}
                            ${aiBadges}
                        </div>
                        <span class="ans-badge">✓ ${answerText}</span>
                    </div>
                    <div class="content-area exam-question">${(window as any).cleanHTML(q.examQue)}</div>
                </div>
                ${hasExp ? `
                <div class="explanation-section" id="exp-${index}">
                    <div class="content-area">${(window as any).cleanHTML(q.examAnsDesc)}</div>
                </div>
                <button class="btn-toggle-exp" onclick="window.toggleExp(this, ${index})">▸ Xem giải thích</button>
                ` : ''}
            `;
            questionsContainer.appendChild(card);
        });
    }

    function applyFilters() {
        if (!searchInput || !filterNewToggle) return;
        const kw = searchInput.value.toLowerCase().trim();
        const isFilterNew = filterNewToggle.checked;

        if (clearBtn) clearBtn.style.display = kw.length > 0 ? 'block' : 'none';

        const filtered = allQuestions.filter((q: any) => {
            if (isFilterNew && q.isVerified !== true) return false;
            if (kw === '') return true;
            return q.examQue.toLowerCase().includes(kw) ||
                   ((window as any).extractAnswer(q.examAnsDesc || '')).toLowerCase().includes(kw);
        });

        renderQuestions(filtered);
        updateStatus(filtered.length, isFilterNew ? "Đã xác minh" : "Tìm thấy");
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
    fetch('/static/cert/pl400/output.json')
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
        answered: false,
        currentOptions: [] as {letter: string, html: string, isCorrect: boolean}[]
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
                <div class="d-flex justify-content-between align-items-center">
                    <button class="btn btn-sm btn-outline-danger" onclick="window.exitPractice()" style="font-size: 11px; border-radius: 8px;">✕ Thoát</button>
                    <div class="text-center">
                        <div id="p-step" class="fw-bold" style="font-size:14px; color:#1e293b;">...</div>
                        <div id="p-score" style="font-size:11px; color:#22c55e; font-weight:600;">Đúng: 0</div>
                    </div>
                    <button id="btn-next" class="btn btn-sm btn-primary" onclick="window.nextPracticeQuestion()" disabled style="font-size: 11px; min-width: 76px; border-radius: 8px;">Tiếp ›</button>
                </div>
                <div class="practice-progress mt-2">
                    <div class="practice-progress-bar" id="p-progress" style="width:0%"></div>
                </div>
            `;
        }
    }

    function renderPracticeIntro() {
        if(!questionsContainer) return;
        questionsContainer.innerHTML = `
            <div class="text-center mt-5 px-3">
                <div style="font-size:40px; margin-bottom:12px;">🎯</div>
                <h4 class="fw-bold mb-1" style="color:#1e293b;">Chế độ Luyện tập</h4>
                <p class="text-muted mb-4" style="font-size:13px;">Chọn số lượng câu hỏi ngẫu nhiên</p>
                
                <div class="mb-4 d-flex flex-wrap justify-content-center">
                   <button class="btn-practice-choice" onclick="window.startPractice(10)">10 câu</button>
                   <button class="btn-practice-choice" onclick="window.startPractice(20)">20 câu</button>
                   <button class="btn-practice-choice" onclick="window.startPractice(${allQuestions.length})">Tất cả</button>
                </div>
                
                <div class="d-flex justify-content-center align-items-center gap-2 mb-4">
                    <span class="text-muted" style="font-size:13px">Hoặc nhập số lượng:</span>
                    <input type="number" id="customCount" class="form-control form-control-sm text-center" style="width: 72px; border-radius:8px;" value="20" min="1" />
                    <button class="btn btn-sm btn-primary" style="border-radius:8px;" onclick="window.startCustomPractice()">Bắt đầu</button>
                </div>
                
                <button class="btn btn-link text-secondary text-decoration-none" style="font-size:12px;" onclick="window.location.href=window.location.pathname">← Quay về danh sách</button>
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
        btn.innerText = isHidden ? '\u25be Đóng giải thích' : '\u25b8 Xem giải thích';
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
        const progressBar = document.getElementById('p-progress');
        
        if (stepEl) stepEl.innerText = `Câu ${current} / ${total}`;
        if (scoreEl) scoreEl.innerText = `Đúng: ${practiceSession.score}`;
        if (progressBar) progressBar.style.width = `${Math.round(((current - 1) / total) * 100)}%`;
        
        if (nextBtn) {
            nextBtn.disabled = true;
            nextBtn.innerText = (current === total) ? 'Kết quả' : 'Tiếp ›';
            nextBtn.classList.remove('btn-success');
            nextBtn.classList.add('btn-primary');
        }

        // Parse options from embedded HTML
        practiceSession.currentOptions = (window as any).parseOptions(q.examQue);
        const answerText = (window as any).extractAnswer(q.examAns);

        const optionsHtml = practiceSession.currentOptions.map((opt: any, i: number) => `
            <div class="option-item practice-option" id="opt-${i}" onclick="window.checkPracticeAnswer(${i})">
                <span class="option-prefix">${opt.letter}.</span>
                <div class="content-area">${opt.html}</div>
            </div>
        `).join('');

        questionsContainer.innerHTML = `
             <div class="card question-card" style="margin-top: 10px;">
                <div class="card-body">
                    <div class="d-flex align-items-center gap-1 mb-2">
                        <span class="q-number">#${practiceSession.currentIndex + 1}</span>
                        ${q.isVerified ? '<span class="badge-verified">✓</span>' : ''}
                    </div>
                    <div class="content-area exam-question mb-3 fw-semibold" style="font-size: 14px; color:#1e293b;">${(window as any).questionTextOnly(q.examQue)}</div>
                    <div class="options-list">${optionsHtml}</div>
                </div>
                
                <div class="explanation-section" id="practice-exp" style="display:none;">
                    <div class="mb-1"><strong style="color:#22c55e;">✓ Đáp án đúng: ${answerText}</strong></div>
                    <hr class="my-2" style="border-color:#fde68a;"/>
                    <div class="content-area">${(window as any).cleanHTML(q.examAnsDesc)}</div>
                </div>
                <button id="btn-practice-exp-toggle" class="btn-toggle-exp" style="display:none;" onclick="window.togglePracticeExp()">▸ Xem giải thích</button>
            </div>
            <div style="height: 60px;"></div>
        `;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    (window as any).checkPracticeAnswer = (selectedIndex: number) => {
         // Prevent re-selection
         if(practiceSession.answered) return;
         practiceSession.answered = true;

         const q = practiceSession.questions[practiceSession.currentIndex];
         const opts: {letter: string, html: string, isCorrect: boolean}[] = practiceSession.currentOptions;
         const selectedOpt = opts[selectedIndex];
         const isCorrect = selectedOpt?.isCorrect === true;

         const selectedEl = document.getElementById(`opt-${selectedIndex}`);

         // Highlight
         if (isCorrect) {
             selectedEl?.classList.add('user-correct');
             practiceSession.score++;
         } else {
             selectedEl?.classList.add('user-wrong');
             // Highlight all correct options
             opts.forEach((opt, i) => {
                 if (opt.isCorrect) document.getElementById(`opt-${i}`)?.classList.add('real-correct');
             });
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
         
         const progressBar = document.getElementById('p-progress');
         if (progressBar) progressBar.style.width = '100%';

         questionsContainer.innerHTML = `
            <div class="result-card">
                <div style="font-size:14px; opacity:0.85; margin-bottom:8px;">Kết quả luyện tập</div>
                <div class="result-percent">${percent}%</div>
                <div style="font-size:18px; margin: 8px 0 20px; opacity:0.9;">${score} / ${total} câu đúng</div>
                <div style="font-size:13px; opacity:0.75; margin-bottom:28px;">
                    ${percent >= 80 ? '🎉 Xuất sắc! Bạn đã sẵn sàng cho kỳ thi.' : percent >= 60 ? '👍 Khá tốt! Hãy ôn thêm một chút.' : '📚 Cần ôn luyện thêm nhé.'}
                </div>
                <div class="d-flex justify-content-center gap-3">
                    <button class="btn btn-light fw-semibold" style="border-radius:10px;" onclick="window.location.href=window.location.pathname">← Về danh sách</button>
                    <button class="btn fw-semibold" style="background:#fff3; color:#fff; border:2px solid #fff5; border-radius:10px;" onclick="window.startPractice(${total})">↺ Làm lại</button>
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
        delete (window as any).extractAnswer;
        delete (window as any).parseOptions;
        delete (window as any).questionTextOnly;
        
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
                    <input type="text" id="searchInput" className="form-control form-control-sm" placeholder="🔍  Tìm kiếm câu hỏi..." />
                    <button id="clearSearch" type="button" onClick={() => (window as any).clearInput()}>✕ Xóa</button>
                </div>
                
                <div className="header-meta">
                    <div className="d-flex align-items-center gap-2">
                        <div id="status" style={{fontSize: '11px', color: '#64748b', fontWeight: 600}}>Đang tải...</div>
                        <div className="form-check form-switch mb-0 d-flex align-items-center" style={{minHeight: 'auto', paddingLeft: '2em'}}>
                            <input className="form-check-input shadow-none" type="checkbox" role="switch" id="filterNewToggle" />
                            <label className="form-check-label ms-1 filter-label text-primary" htmlFor="filterNewToggle">Verified</label>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <button
                            className="btn btn-sm btn-primary"
                            style={{fontSize: '11px', borderRadius: '8px', padding: '3px 10px'}}
                            onClick={() => window.location.search = '?mode=practice'}
                        >
                            ▶ Luyện tập
                        </button>
                        <span style={{fontSize: '10px', color: '#94a3b8', fontWeight: 600}}>PL-400</span>
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
