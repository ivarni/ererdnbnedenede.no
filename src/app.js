import './styles/styles.less';

import dom from './dom';
import fetch from './xhr';

const title = dom.h1('ER ER DNB NEDE NEDE?', { class: 'h1' })
const header = dom.header(null, { class: 'header'}, [title]);

const content = dom.p(
    `Et øyeblikk, vi sjekker...`,
    { id: 'content', class: 'paragraph' }
);

const container = dom.div(null, {}, [header, content]);
document.body.appendChild(container)

fetch((response) => {
    const link = dom.a(
        'www.erdnbnede.no',
        { href: 'http://www.erdnbnede.no/', class: 'link' }
    );
    const result = dom.span(
        `${link.outerHTML} ser ut til å være ${response && response.up ? 'oppe': 'nede'}`
    );
    if (!response || !response.up) {
        document.body.classList.add('errar');
    }
    document.getElementById('content').innerHTML = result.outerHTML;
});
