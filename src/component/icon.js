class Icon extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `  
        <style>
            i {
                color: white;
                font-size: 32px;
                background-color: green;
                padding: 4px 8px;
                border-radius: 8px;
            }
        </style>     
        <link href="" rel="stylesheet"></link>
        <i class="fa-solid fa-check"></i>
        `;

        fetch('./manifest.json')
            .then(response => response.json())
            .then(dataUrl => {
                const link = this.shadowRoot.querySelector('link');
                link.href = dataUrl['fa.css'].replace("auto/", "");
            }
        );
    }
}

customElements.define('my-icon', Icon);