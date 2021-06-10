let todo = {
    userId: 110,
    id: 30,
    title: "This is Ajax Demo",
    complete: false
}
var xhr = new XMLHttpRequest();
function show() {
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/todos')
    var data = JSON.stringify(todo);
    xhr.send(data);
    var jsonTitle = JSON.parse(data);
    var  displayData= jsonTitle.title;

    document.getElementById("content").innerHTML = displayData;
    console.log(data);
}
