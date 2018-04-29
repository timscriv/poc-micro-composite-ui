(function (window, document, undefined) {
    class HelloWorld extends HTMLElement {
        constructor() {
            super();
            this.log("hit constructor");
        }

        connectedCallback() {
            this.render();
        }

        render() {
            this.log("hit render");
            this.innerHTML = `
                <span>Hello World</span>
            `;
        }

        log(message) {
            console.log(`From hello-world: ${message}`);
        }
    }

    window.customElements.define('hello-world', HelloWorld);
})(window, document);