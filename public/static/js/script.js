document.addEventListener("DOMContentLoaded", () => {
    // Lưu ý: Đổi đường dẫn thành 'data.json' để chạy local
    fetch('/static/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            initCV(data);
        })
        .catch(err => {
            console.error("Lỗi load JSON:", err);
            // Đảm bảo phần tử 'name' tồn tại trước khi gán text
            const nameEl = document.getElementById('name');
            if (nameEl) nameEl.textContent = "Error loading data";
        });
});

function initCV(data) {
    renderProfile(data.profile);
    renderAbout(data.about);
    
    // Kiểm tra an toàn cho resume
    const resume = data.resume || {};
    renderExperience(resume.experience || []);
    renderEducation(resume.education || []); // Hàm mới thêm
    
    renderSkills(data.skills || [], data.expertise || []); 
    renderPortfolio(data.portfolio || []);
    renderCertificates(data.certificates || []);
}

// 1. Render Profile (Sidebar)
function renderProfile(profile) {
    if(!profile) return;
    
    // Cập nhật thông tin cơ bản
    setText('name', profile.name);
    setText('role', profile.job);
    setSrc('avatar', profile.avatar);
    setHref('cv-link', profile.cvLink);

    // Render Contact
    const contactContainer = document.getElementById('contact-list');
    const validContacts = ['Email', 'Phone', 'Address', 'Birthday'];
    
    if (contactContainer && profile.details) {
        contactContainer.innerHTML = ''; // Xóa nội dung cũ (loading)
        profile.details.forEach(item => {
            if (validContacts.includes(item.label)) {
                let icon = 'fa-solid fa-circle-info';
                if (item.label === 'Email') icon = 'fa-solid fa-envelope';
                if (item.label === 'Phone') icon = 'fa-solid fa-phone';
                if (item.label === 'Birthday') icon = 'fa-solid fa-cake-candles';
                
                contactContainer.innerHTML += `
                    <div class="contact-item">
                        <i class="${icon}"></i> <span>${item.value}</span>
                    </div>`;
            }
        });
    }

    // Render Social
    const socialContainer = document.getElementById('social-list');
    if (socialContainer && profile.social) {
        socialContainer.innerHTML = '';
        Object.entries(profile.social).forEach(([key, url]) => {
            let iconClass = `fa-brands fa-${key}`;
            if (key === 'steam') iconClass = 'fa-brands fa-steam';
            
            socialContainer.innerHTML += `
                <a href="${url}" target="_blank" class="social-icon">
                    <i class="${iconClass}"></i>
                </a>`;
        });
    }
}

// 2. Render About
function renderAbout(about) {
    const container = document.getElementById('about-content');
    if (!container) return;

    if (about && about.length > 0) {
        container.innerHTML = about.map(line => `<p>${line}</p>`).join('');
    } else {
        container.innerHTML = "<p>No information available.</p>";
    }
}

// 3. Render Experience
function renderExperience(exp) {
    const container = document.getElementById('experience-list');
    if (!container) return;

    if (!exp || exp.length === 0) {
        container.innerHTML = "<p>No experience listed.</p>";
        return;
    }

    container.innerHTML = exp.map(job => `
        <div class="timeline-item">
            <div class="job-title">${job.title}</div>
            <div class="job-company">${job.company}</div>
            <span class="job-period">${job.period}</span>
            <div class="job-desc">${job.desc}</div>
        </div>
    `).join('');
}

// 4. Render Education (MỚI THÊM)
function renderEducation(edu) {
    const container = document.getElementById('education-list');
    if (!container) return; // Nếu HTML chưa có thẻ này thì bỏ qua

    if (!edu || edu.length === 0) {
        container.innerHTML = "<p>No education listed.</p>";
        return;
    }

    container.innerHTML = edu.map(school => `
        <div class="timeline-item">
            <div class="job-title">${school.school}</div>
            <div class="job-company" style="color: var(--text-muted);">${school.major}</div>
            <span class="job-period">${school.period}</span>
        </div>
    `).join('');
}

// 5. Render Skills (Gộp Expertise và Skills)
function renderSkills(skills, expertise) {
    const container = document.getElementById('skills-grid');
    if (!container) return;
    
    let content = "";
    
    // Expertise
    expertise.forEach(exp => {
        content += `
            <div class="skill-card" style="border: 1px solid #e5e7eb;">
                <div class="skill-icon"><i class="${exp.icon}"></i></div>
                <div class="skill-title">${exp.title}</div>
                <div class="skill-desc">${exp.desc}</div>
            </div>
        `;
    });

    // Skills
    skills.forEach(skill => {
        content += `
            <div class="skill-card">
                <div class="skill-icon" style="font-size: 1.2rem; color: #6b7280"><i class="${skill.icon}"></i></div>
                <div class="skill-title">${skill.title}</div>
                <div class="skill-desc">${skill.desc}</div>
            </div>
        `;
    });

    container.innerHTML = content;
}

// 6. Render Portfolio
function renderPortfolio(projects) {
    const container = document.getElementById('portfolio-grid');
    if (!container) return;

    if (!projects || projects.length === 0) {
        container.innerHTML = "<p>Updating...</p>";
        return;
    }

    container.innerHTML = projects.map(p => `
        <div class="project-card">
            <img src="${p.image}" class="project-img" alt="${p.title}" onerror="this.src='https://via.placeholder.com/400x200?text=No+Image'">
            <div class="project-content">
                <div class="project-cat">${p.category}</div>
                <div class="project-name">${p.title}</div>
                <div class="project-info">${p.info}</div>
            </div>
        </div>
    `).join('');
}

// 7. Render Certificates
function renderCertificates(certs) {
    const container = document.getElementById('cert-list');
    if (!container) return;

    if (!certs || certs.length === 0) return;
    
    container.innerHTML = `<ul style="list-style: none; padding-left: 0;">` + 
        certs.map(c => `
            <li style="margin-bottom: 10px; display: flex; justify-content: space-between; border-bottom: 1px dashed #eee; padding-bottom: 5px;">
                <span><strong>${c.name}</strong> (${c.org})</span>
                <span style="font-family: var(--font-code); color: #6b7280;">${c.year}</span>
            </li>
        `).join('') + `</ul>`;
}

// Helper function để gán text an toàn
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}
function setSrc(id, src) {
    const el = document.getElementById(id);
    if (el) el.src = src;
}
function setHref(id, href) {
    const el = document.getElementById(id);
    if (el) el.href = href;
}

// Back to Top Button Logic
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});