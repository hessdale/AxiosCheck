let body_html = document.querySelector(`body`);

function successFunction(response) {
    for (i = 0; i < response.data.length; i++) {
        body_html.insertAdjacentHTML(`afterbegin`, `<h3>${response.data[i][`title`]}</h3><p>${response.data[i][`title`]}</p>`)
    };
};

function failureFunction(error) {
    body_html.insertAdjacentElement(`afterbegin`, `<h1>ERROR</h1>`)
};

axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`
}).then(successFunction).catch(failureFunction);