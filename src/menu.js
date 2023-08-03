export default function createMenuTab() {
    const tabContent = document.createElement('div');
    tabContent.classList.add('tab-content');

    const menuItem1 = document.createElement('p');
    menuItem1.textContent = 'Delicious Dish 1: $10';
    
    const menuItem2 = document.createElement('p');
    menuItem2.textContent = 'Delicious Dish 2: $12';
    
    const menuItem3 = document.createElement('p');
    menuItem3.textContent = 'Delicious Dish 3: $15';
    
    tabContent.appendChild(menuItem1);
    tabContent.appendChild(menuItem2);
    tabContent.appendChild(menuItem3);

    return tabContent;
}