export function About() {
    let content = document.querySelector('#content-container')
    content.innerHTML = ''

    let createPEle = function() {
        let pEle = document.createElement('p')
        pEle.textContent = 'Contact Information'
        content.appendChild(pEle)
    }

    createPEle()
    createPEle()
    createPEle()
    createPEle()
    createPEle()
}