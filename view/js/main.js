let http = new XMLHttpRequest();
let textArea = document.querySelector('textarea');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
let span = document.querySelector('span');
let data = {};
let newLi;
let result;


function runCode() {
    data = {code: textArea.value};

    http.open('POST', 'http://127.0.0.1:8080/runCode/runCode', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(JSON.stringify(data));

    http.onload = function () {
        result = JSON.parse(http.responseText);
        newLi = document.createElement('li');
        newLi.innerHTML = result.response;
        ul.appendChild(newLi);
    }
}

function npmInstall() {
    if (input.value) {
        span.style.backgroundColor = 'red';
        data = {name: input.value};

        http.open('POST', 'http://127.0.0.1:8080/runCode/npmInstall', true);
        http.setRequestHeader('Content-type', 'application/json');
        http.send(JSON.stringify(data));

        http.onload = function () {
            span.style.backgroundColor = 'inherit';
        }
    }
}