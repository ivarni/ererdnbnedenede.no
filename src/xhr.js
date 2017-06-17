const fetch = cb => {
    const url = '/dnbnedestatus';
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.onload = function() {
        cb(this.response);
    }
    req.open('GET', url);
    req.send();
};

export default fetch;
