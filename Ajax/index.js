
const url = "https://jsonplaceholder.typicode.com/photos";
const xhr = new XMLHttpRequest();

function show(data){
    const Container = document.getElementsByClassName("contentContainer")[0];
    for(let i=0;i<data.length;i++){
        const newElement=document.createElement("h3");
        newElement.textContent=`${i+1}) ${data[i].title}`;
        Container.append(newElement);
    }
}

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const photosArr = JSON.parse(xhr.response);
        show(photosArr);
        } else {
            console.log("ERROR");
        }
    }
}

xhr.open("GET", url);
xhr.send();