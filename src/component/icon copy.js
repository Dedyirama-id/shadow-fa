import data from '../../dist/manifest.json';
const Style = new URL('../../node_modules/@fortawesome/fontawesome-free/css/all.css', import.meta.url);
class Icon extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // @import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
        // @import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
        this.shadowRoot.innerHTML = `
        
        <style>

                :host {
                    display: inline-block;
                }
                .material-symbols-outlined {
                    font-variation-settings:
                    'FILL' 20,
                    'wght' 800,
                    'GRAD' 50,
                    'opsz' 24
                }
            </style>
            <link href="${Style}" rel="stylesheet"></link>
            <span class="material-symbols-outlined">
            Verified
            </span>
            <i class="fa-solid fa-circle"></i>
            `;
        // <script>
        //     let manifest;
        //     fetch('./manifest.json')
        //         .then(response => response.json())
        //         .then(data => console.log(data));
        // </script>
        // const script = document.createElement('script');
        // script.src = './src/component/shadow-module.js';
        // script.type = 'module';
        // // script.innerText = `import './node_modules/@fortawesome/fontawesome-free/css/all.min.css';`;
        // this.shadow.appendChild(script);

        // this.shadowRoot.querySelector('link').href = data['main.css'].replace("auto/", "");
        // const script = document.createElement('script');
        // script.type = 'module';
        // script.innerText = `
        //     import data from './manifest.json';
        //     shadowRoot.querySelector('link').href = data.main.css;
        // `;
        // this.shadow.appendChild(script);
    }
}

customElements.define('my-icon', Icon);