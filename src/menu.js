export function Menu() {
    let content = document.querySelector('#content-container');
    content.innerHTML = '';

    let createMenuItem = function() {
    let divEle = document.createElement("div");
    content.appendChild(divEle);

    let h2Ele = document.createElement('h2');
    h2Ele.textContent = 'Menu Item';
    divEle.appendChild(h2Ele);

    let pEle = document.createElement('p');
    pEle.textContent = 'This is information about menu item';
    divEle.appendChild(pEle);
    
    let imgEle = document.createElement('img');
    imgEle.alt = 'image of menu item';
    divEle.appendChild(imgEle);
    };

    createMenuItem();
    createMenuItem();
    createMenuItem();
    createMenuItem();
    createMenuItem();
};