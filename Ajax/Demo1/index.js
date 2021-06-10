const url = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();



var form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    var title = document.getElementById("title").value
    var body = document.getElementById("body").value
    xhr.open('POST', "https://jsonplaceholder.typicode.com/posts")
    xhr.send({ title: title, body: body }, function (data) {
        console.log(data);
    })
})