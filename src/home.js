import chineseLanterns from './img/chinese-lanterns-7591296_1280.jpg';

export function Home() {
    let content = document.querySelector('#content-container');
    content.innerHTML = '';

    let h1Ele = document.createElement("h1");
    h1Ele.textContent = 'RESTAURANT NAME';
    content.appendChild(h1Ele);
    
    let pEle = document.createElement("p");
    pEle.textContent = 'Serving you the best food since 1989';
    content.appendChild(pEle);

    let imgEle = document.createElement("img");
    imgEle.src = chineseLanterns;
    imgEle.alt = 'Chinese lanterns in the night';
    content.appendChild(imgEle);
};

