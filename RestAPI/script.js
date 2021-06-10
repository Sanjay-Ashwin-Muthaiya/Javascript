const express = require('express');
const app = express();
//app.use(express.json);
var bodyParser = require("body-parser");
app.use(bodyParser());
const personDetails = [{
    id: 1,
    name: 'Sanjay',
    designation: 'Full Stack Developer',
    city: 'Namakkal'

}, {
    id: 2,
    name: 'Arun Balaji',
    designation: 'Software Engineer',
    city: 'Chennai'

}, {
    id: 3,
    name: 'Siva Rajan',
    designation: 'Software Engineer',
    city: 'Cuddalore'

}, {
    id: 4,
    name: 'Ganesh Ravikumar',
    designation: 'Team Lead',
    city: 'Chennai'

}]

app.get('/home', (req, res) => {
    res.send('Welcome to REST API Demo using Person Details');
})

app.get('/home/personDetails', (req, res) => {
    res.send(personDetails);
})

app.get('/home/personDetails/:id', (req, res) => {
    let person = undefined
    for (var i = 0; i <= personDetails.length; i++) {
        if ((parseInt(req.params.id) <= personDetails.length) && (parseInt(req.params.id) > 0)) {
            if (personDetails[i].id == parseInt(req.params.id)) {
                person = personDetails[i];
                break;
            }
        }
    }
    if (person != undefined) {
        res.send(person);
    } else {
        res.send("Invalid ID");
    }
})

app.post('/home/personDetails', (req, res) => {
    const error = validateId(req.body)
    if (error) {
        res.send("Check you ID")
    } else {
        const person = {
            id: req.body.id,
            name: req.body.name,
            designation: req.body.designation,
            city: req.body.city
        }
        personDetails.push(person);
        res.send(person);
    }
})

function validateId(person) {
    let idCount = personDetails.length;
    if (idCount < parseInt(person.id)) {
        return false
    } else {
        return true
    }
}
app.put('/home/personDetails/:id', (req, res) => {
    let person = personDetails.find(p => p.id === parseInt(req.params.id));
    if (!person) {
        res.send("Invalid ID")
    } else {
        person.name = req.body.name;
        person.designation = req.body.designation;
        person.city = req.body.city;
        res.send(person)
    }
})
app.delete('/home/personDetails/:id', (req, res) => {
    let myPromise = new Promise(function (myResolve, myReject) {
        let person = personDetails.find(p => p.id === parseInt(req.params.id));
        if (!person) {
            myReject("Invalid ID");
        } else {
            const index = personDetails.indexOf(person);
            personDetails.splice(index, 1);
            myResolve(person)
        }
    })
    myPromise.then(function (value) {
        deleteDisplay(value)
    }, function (error) {
        deleteDisplay(error)
    })
    function deleteDisplay(data) {
        res.send(data)
    }

})



const port = 9000;
app.listen(port, () => console.log("Server started"))