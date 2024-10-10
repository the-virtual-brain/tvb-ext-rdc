import {Widget} from '@lumino/widgets';

class IframeDisplay extends Widget {
    constructor(url: string) {
        super({node: document.createElement('div')});
        this.addClass('iframe-widget');
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = 'none';
        this.node.appendChild(iframe);
    }
}

export {IframeDisplay};
