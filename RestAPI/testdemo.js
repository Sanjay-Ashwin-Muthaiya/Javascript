/* app.get('/home/personDetails/:id',(req,res)=>{
    const person=personDetails.find(c=>c.id === parseInt(req.params.id));
    if(!person){
        res.send("Invalid ID")
    }else{
        res.send(person)
    }
}) */

app.delete('/home/personDetails/:id',(req,res)=>{
    let person=personDetails.find(p=>p.id === parseInt(req.params.id));
    if(!person){
        res.send("Invalid ID")
    }else{
        const index=personDetails.indexOf(person);
        personDetails.splice(index,1);
        res.send(person);
    }
})