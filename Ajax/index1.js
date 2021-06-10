
function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            var output = '';
            output += '<ul>' +
                '<li>ID: ' + user.id + '</li>' +
                '<li>NAME: ' + user.name + '</li>' +
                '<li>PLACE: ' + user.place + '</li>' +
                '</ul>';
            document.getElementById('user').innerHTML = output;
        }
    }
    xhr.send();
}
function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            var output = '';
            for (var i in user)
                output += '<ul>' +
                    '<li>ID: ' + user[i].id + '</li>' +
                    '<li>NAME: ' + user[i].name + '</li>' +
                    '<li>PLACE: ' + user[i].place + '</li>' +
                    '</ul>';
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}