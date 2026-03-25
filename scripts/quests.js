const myQuests = [
    {
        id: 1,
        title: "The Great Inventory",
        status: "Complete",
        summary: "A marketplace enchantment for secure trading across the realm.",
        details: "Using the Arcane Scripts of React and the fire-breath of Node.js, I forged a portal where thousands of merchants trade their artifacts daily. It features a dragon-hide firewall and a seamless ledger for gold distribution.",
        realm: "Commerce",
        artifacts: "React, Firebase"
    },
    {
        id: 2,
        title: "Dragon-Eye Analytics",
        status: "Ongoing",
        summary: "A scrying tool to visualize resource flow through the kingdoms.",
        details: "By polishing the lenses of SVG and D3, I am creating a vision that allows the King to see every copper move. It translates raw numbers into constellations of data that any advisor can read.",
        realm: "Alchemy",
        artifacts: "D3.js, WebGL"
    },
    {
        id: 3,
        title: "Scroll of Whispers",
        status: "Complete",
        summary: "A secure messaging network that vanishes like smoke.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the scroll, the ink disappears and the parchment turns to ash.",
        realm: "Security",
        artifacts: "Rust, WebSockets"
    }
];

const maxQuestsToShow = 3;

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('quest-list');
    const overlay = document.getElementById('focus-overlay');
    const focusData = document.getElementById('focus-data');
    const closeBtn = document.querySelector('.close-btn');

    myQuests.slice(0, maxQuestsToShow).forEach(q => {
        const card = document.createElement('article');
        card.className = 'quest-card';
        card.innerHTML = `
            <span class="quest-status">${q.status}</span>
            <h2 class="quest-title">${q.title}</h2>
            <p>"${q.summary}"</p>
        `;
        
        card.addEventListener('click', () => {
            showDetails(q);
        });

        container.appendChild(card);
    });

    function showDetails(q) {
        focusData.innerHTML = `
            <h1 class="quest-title" style="font-size: 2.2rem;">${q.title}</h1>
            <p class="quest-status" style="float: none;">Status: ${q.status}</p>
            <div class="focus-body">${q.details}</div>
            <div class="focus-footer">
                <span><b>Realm:</b> ${q.realm}</span>
                <span><b>Artifacts:</b> ${q.artifacts}</span>
            </div>
        `;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    const closeOverlay = () => {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOverlay();
    });
});