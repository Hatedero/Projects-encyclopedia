const top_projects = [
    {
        title: "VRephi",
        summary: "Une extension de Gephi-lite permettant de visualiser des graphes en réalité virtuelle, pour une meilleure immersion et compréhension des données.",
    },
    {
        title: "G.A.S.C",
        summary: "Une application mobile permettant aux professeurs et étudiants de Lyon 1 & 3 de gérer leurs activités sportives à l'université.",
    },
    {
        title: "Inhibitus",
        summary: "Un serious game ayant pour but d'aider les professionnels de santé à réentrainer le mécanisme d'inhibition chez les patients souffrants d'addictions.",
    }
];

let skills = [];

function initializeSkills() {
    if (typeof getAllSkills === 'function') {
        const allSkills = getAllSkills();
        skills = allSkills.map((title, index) => ({
            id: index + 1,
            title: title,
            level: "Intermédiaire",
            icon: "📜"
        }));
    }
}

function loadProjects() {
    const container = document.getElementById('project-container');
    if (!container) return;
    container.innerHTML = '';

    top_projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'quest-card';
        card.onclick = () => openModal(project.title);

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
        `;
        container.appendChild(card);
    });
}

function loadSkills(filterText = '') {
    const skillGrid = document.querySelector('.skill-grid');
    if (!skillGrid) return;

    skillGrid.innerHTML = '';
    
    const filteredSkills = skills.filter(skill => 
        skill.title.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredSkills.length === 0) {
        skillGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; opacity: 0.5;">Aucun talent trouvé dans le grimoire...</p>';
        return;
    }

    filteredSkills.forEach(skill => {
        renderSkillCard(skill, skillGrid);
    });
}

function renderSkillCard(skill, skillGrid) {
    const levelCode = skill.level.charAt(0).toUpperCase();
    const card = document.createElement('div');
    card.className = 'skill-card';
    
    card.innerHTML = `
        <div class="card-corner top-left">
            ${levelCode}<br><span>♠</span>
        </div>
        
        <div class="card-icon">${skill.icon || '📜'}</div>
        <h4>${skill.title}</h4>
        <div style="font-family: 'MedievalSharp'; font-size: 0.7rem; margin-top: 5px; opacity: 0.6;">
            ${skill.level}
        </div>

        <div class="card-corner bottom-right">
            ${levelCode}<br><span>♠</span>
        </div>
    `;
    
    skillGrid.appendChild(card);
}

function initSearch() {
    const searchInput = document.getElementById('skill-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            loadSkills(e.target.value);
        });
    }
}

function openModal(projectTitle) {
    window.location.href = `./questboard.html?project=${encodeURIComponent(projectTitle)}`;
}

function closeModal() {
    document.getElementById('quest-modal').style.display = 'none';
}

function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

window.onload = () => {
    initializeSkills();
    loadProjects();
    loadSkills();
    initSearch();
    
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
};

window.onclick = (event) => {
    const modal = document.getElementById('quest-modal');
    if (event.target == modal) closeModal();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const form = document.getElementById('quest-form');
const msg = document.getElementById('response-msg');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        msg.textContent = "Par pigeon voyageur, votre message a été envoyé avec succès !";
        msg.style.display = "block";
        form.reset();
        msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}