export default function createContactTab() {
    const tabContent = document.createElement('div');
    tabContent.classList.add('tab-content');

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Contact us at contact@example.com or call us at +123456789.';
    
    tabContent.appendChild(contactInfo);

    return tabContent;
}