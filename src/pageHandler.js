export { content, Element, buildPage, clearPage };

let elements = {}; //elements are added here upon creation so that buildPage can reference child elements
const content = document.querySelector('#content');

class Element {
    constructor(input) {
        this.name = input.name;

        this.node = document.createElement(input.type);

        for (const [attribute, value] of input.attributes ? Object.entries(input.attributes) : []) {
            if (attribute !== 'class') {
                this.node.setAttribute(attribute, value);
            }
            else {
                for (const cl of value.split(' ')) {
                    this.node.classList.add(cl);
                };
            };
        };

        this.node.textContent = input.text;

        this.children = input.children;

        elements[this.name] = this;
    };
};

function buildPage(container) {
    for (const elem of Object.values(elements)) {
        for (const child of elem.children ? elem.children : []) {
            elem.node.appendChild(elements[child].node);
        };
    };
    content.appendChild(container.node);
};

function clearPage() {
    elements = {};
    content.textContent = '';
};