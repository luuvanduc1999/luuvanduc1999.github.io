import React, { useEffect } from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

export function Portfolio() {
  useEffect(() => {
    // SEO & Title Management
    const originalTitle = document.title;
    document.title = "Duc Luu Van | Software Engineer Portfolio";

    const metaTags = [
      { name: "description", content: "Portfolio of Duc Luu Van - Backend & RPA Developer with 4+ years of experience in automation solutions, Spring Boot, and Python Django. Based in Hanoi, Vietnam." },
      { name: "keywords", content: "Lưu Văn Đức, Đức Lưu Văn, Luu Van Duc, Java Backend, RPA Developer, Spring Boot, Python, Automation, Software Engineer, Portfolio, Hanoi, Vietnam" },
      { name: "author", content: "Van Duc Luu" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ducluuvan.com/" },
      { property: "og:title", content: "Duc Luu Van | Software Engineer Portfolio" },
      { property: "og:description", content: "Explore the portfolio of Van Duc Luu, an experienced Java Backend and RPA Developer specializing in automation solutions and scalable backend systems." },
      { property: "og:image", content: "https://ducluuvan.com/images/preview.png" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: "https://ducluuvan.com/" },
      { property: "twitter:title", content: "Duc Luu Van | Software Engineer Portfolio" },
      { property: "twitter:description", content: "Explore the portfolio of Duc Luu Van, an experienced Java Backend and RPA Developer specializing in automation solutions and scalable backend systems." },
      { property: "twitter:image", content: "https://ducluuvan.com/images/preview.png" }
    ];

    const createdTags: HTMLMetaElement[] = [];
    const originalMetaContent: Map<string, string> = new Map();

    metaTags.forEach(tag => {
      let element: HTMLMetaElement | null = null;
      const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`;
      element = document.querySelector(selector);

      if (element) {
        originalMetaContent.set(selector, element.getAttribute('content') || '');
        element.setAttribute('content', tag.content);
      } else {
        const newElement = document.createElement('meta');
        if (tag.name) newElement.setAttribute('name', tag.name);
        if (tag.property) newElement.setAttribute('property', tag.property);
        newElement.setAttribute('content', tag.content);
        document.head.appendChild(newElement);
        createdTags.push(newElement);
      }
    });

    // Load data.json and populate the DOM, mimicking script.js
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
            const nameEl = document.getElementById('name');
            if (nameEl) nameEl.textContent = "Error loading data";
        });

    // Back to Top Button Logic
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        };
        
        const handleClick = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };

        window.addEventListener("scroll", handleScroll);
        backToTopBtn.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            backToTopBtn.removeEventListener("click", handleClick);
            
            // Cleanup SEO
            document.title = originalTitle;
            createdTags.forEach(tag => tag.remove());
            originalMetaContent.forEach((value, selector) => {
                const el = document.querySelector(selector);
                if (el) el.setAttribute('content', value);
            });
        };
    }
    
    return () => {
        // Cleanup SEO if backToTopBtn logic didn't run (though it likely will)
        document.title = originalTitle;
        createdTags.forEach(tag => tag.remove());
        originalMetaContent.forEach((value, selector) => {
            const el = document.querySelector(selector);
            if (el) el.setAttribute('content', value);
        });
    };
  }, []);

  return (
    <div className="portfolio-page">
        <div className="container">
            
            <aside className="sidebar card">
                <img id="avatar" src="" alt="Avatar" className="avatar" />
                <h1 id="name" className="name">Loading...</h1>
                <span id="role" className="role">Developer</span>
                
                <div id="contact-list" className="contact-info">
                </div>

                <div id="social-list" className="social-bar">
                </div>

                <a id="cv-link" href="#" className="btn-download">
                    <i className="fa-solid fa-cloud-arrow-down"></i> Download PDF
                </a>
            </aside>

            <main>
                <div className="header-actions">
                    <div className="typing-badge">
                        &gt; <span id="typing-text">Initializing...</span><span className="cursor">|</span>
                    </div>
                </div>

                <div id="gui-view">
                    
                    <section id="about" className="card" style={{marginBottom: '30px'}}>
                        <h2 className="section-title">About Me</h2>
                        <div id="about-content" className="about-text"></div>
                    </section>


                    <section id="experience" className="card" style={{marginBottom: '30px'}}>
                        <h2 className="section-title">Experience</h2>
                        <div id="experience-list" className="timeline"></div>
                    </section>

                    <section id="education" className="card" style={{marginBottom: '30px'}}>
                        <h2 className="section-title">Education</h2>
                        <div id="education-list" className="timeline"></div>
                    </section>

                    <section id="skills" className="card" style={{marginBottom: '30px'}}>
                        <h2 className="section-title">Skills & Expertise</h2>
                        <div id="skills-grid" className="grid-2"></div>
                    </section>


                    <section id="projects" className="card" style={{marginBottom: '30px'}}>
                        <h2 className="section-title">Selected Projects</h2>
                        <div id="portfolio-grid" className="grid-2"></div>
                    </section>

                    <section id="certificates" className="card">
                        <h2 className="section-title">Certificates</h2>
                        <div id="cert-list"></div>
                    </section>

                </div>

                <div id="json-view">
                    <pre><code id="json-code"></code></pre>
                </div>

            </main>
        </div>

        <button id="back-to-top" title="Back to Top">
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    </div>
  );
}

// Helper functions from script.js adapted for React component scope
function initCV(data: any) {
    renderProfile(data.profile);
    renderAbout(data.about);
    
    const resume = data.resume || {};
    renderExperience(resume.experience || []);
    renderEducation(resume.education || []);
    
    renderSkills(data.skills || [], data.expertise || []); 
    renderPortfolio(data.portfolio || []);
    renderCertificates(data.certificates || []);
}

function renderProfile(profile: any) {
    if(!profile) return;
    
    setText('name', profile.name);
    setText('role', profile.job);
    setSrc('avatar', profile.avatar);
    setHref('cv-link', profile.cvLink);

    const contactContainer = document.getElementById('contact-list');
    const validContacts = ['Email', 'Phone', 'Address', 'Birthday'];
    
    if (contactContainer && profile.details) {
        contactContainer.innerHTML = '';
        profile.details.forEach((item: any) => {
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

    const socialContainer = document.getElementById('social-list');
    if (socialContainer && profile.social) {
        socialContainer.innerHTML = '';
        Object.entries(profile.social).forEach(([key, url]) => {
            let iconClass = `fa-brands fa-${key}`;
            if (key === 'steam') iconClass = 'fa-brands fa-steam';
            
            socialContainer.innerHTML += `
                <a href="${url as string}" target="_blank" class="social-icon">
                    <i class="${iconClass}"></i>
                </a>`;
        });
    }
}

function renderAbout(about: any) {
    const container = document.getElementById('about-content');
    if (!container) return;

    if (about && about.length > 0) {
        container.innerHTML = about.map((line: string) => `<p>${line}</p>`).join('');
    } else {
        container.innerHTML = "<p>No information available.</p>";
    }
}

function renderExperience(exp: any) {
    const container = document.getElementById('experience-list');
    if (!container) return;

    if (!exp || exp.length === 0) {
        container.innerHTML = "<p>No experience listed.</p>";
        return;
    }

    container.innerHTML = exp.map((job: any) => `
        <div class="timeline-item">
            <div class="job-title">${job.title}</div>
            <div class="job-company">${job.company}</div>
            <span class="job-period">${job.period}</span>
            <div class="job-desc">${job.desc}</div>
        </div>
    `).join('');
}

function renderEducation(edu: any) {
    const container = document.getElementById('education-list');
    if (!container) return;

    if (!edu || edu.length === 0) {
        container.innerHTML = "<p>No education listed.</p>";
        return;
    }

    container.innerHTML = edu.map((school: any) => `
        <div class="timeline-item">
            <div class="job-title">${school.school}</div>
            <div class="job-company" style="color: var(--text-muted);">${school.major}</div>
            <span class="job-period">${school.period}</span>
        </div>
    `).join('');
}

function renderSkills(skills: any, expertise: any) {
    const container = document.getElementById('skills-grid');
    if (!container) return;
    
    let content = "";
    
    expertise.forEach((exp: any) => {
        content += `
            <div class="skill-card" style="border: 1px solid #e5e7eb;">
                <div class="skill-icon"><i class="${exp.icon}"></i></div>
                <div class="skill-title">${exp.title}</div>
                <div class="skill-desc">${exp.desc}</div>
            </div>
        `;
    });

    skills.forEach((skill: any) => {
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

function renderPortfolio(projects: any) {
    const container = document.getElementById('portfolio-grid');
    if (!container) return;

    if (!projects || projects.length === 0) {
        container.innerHTML = "<p>Updating...</p>";
        return;
    }

    container.innerHTML = projects.map((p: any) => `
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

function renderCertificates(certs: any) {
    const container = document.getElementById('cert-list');
    if (!container) return;

    if (!certs || certs.length === 0) return;
    
    container.innerHTML = `<ul style="list-style: none; padding-left: 0;">` + 
        certs.map((c: any) => `
            <li style="margin-bottom: 10px; display: flex; justify-content: space-between; border-bottom: 1px dashed #eee; padding-bottom: 5px;">
                <span><strong>${c.name}</strong> (${c.org})</span>
                <span style="font-family: var(--font-code); color: #6b7280;">${c.year}</span>
            </li>
        `).join('') + `</ul>`;
}

function setText(id: string, text: string) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}
function setSrc(id: string, src: string) {
    const el = document.getElementById(id) as HTMLImageElement;
    if (el) el.src = src;
}
function setHref(id: string, href: string) {
    const el = document.getElementById(id) as HTMLAnchorElement;
    if (el) el.href = href;
}
