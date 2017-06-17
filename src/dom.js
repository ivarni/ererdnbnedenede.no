const element = (name) =>
    function(textContent, props = {}, children = []) {
        var e = document.createElement(name);
        Object.keys(props || {}).forEach(function(prop) {
            e.setAttribute(prop, props[prop]);
        });
        (children || []).forEach(function(child) {
            e.appendChild(child);
        });
        if (textContent) {
            e.innerHTML = textContent;
        }
        return e;
    }

const api = {};

['div', 'h1', 'header', 'p', 'a', 'span']
    .map(name => api[name] = element(name) );

export default api;
