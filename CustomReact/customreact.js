function customRander(reactElement, mainContainer){
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    mainContainer.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern
    for (const prop in reactElement.props) {
        if(prop == "childern") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement);
}


const reactElement = {
    type : 'a',
    props:{
        href : 'https://google.com',
        target : '_blank'
    },
    childern : "Click me to vist google"
}
const mainContainer = document.querySelector('#root');

customRander(reactElement, mainContainer)