import createHomePage from './home.js';
import createContactTab from './contact.js';
import createMenuTab from './menu.js';

function switchTab(tabName) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    let tabContent;
    if (tabName === 'home') {
        createHomePage();
    } else if (tabName === 'contact') {
        tabContent = createContactTab();
    } else if (tabName === 'menu') {
        tabContent = createMenuTab();
    }

    if (tabContent) {
        tabContent.classList.add('tab-content', 'active'); // Add the 'active' class
        contentDiv.appendChild(tabContent);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            const tabName = event.target.dataset.tab;
            switchTab(tabName);
        });
    });

    // Load the default tab (home) on page load
    switchTab('home');
});