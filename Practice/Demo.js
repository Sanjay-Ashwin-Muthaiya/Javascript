
user = {
    name: 'Sanjay',
    age: '24',
    designation: 'Software Engineer',
};
console.log("My name is "+user.name+" and I'm "+user.age);
console.log(Object.values(user));
Object.seal(user);
delete user.name;
console.log(Object.values(user));
var c
function fun(){
    return 2+4;
}
console.log(fun());
console.table(user);
var arr=["Teleport",1,"AdaptiveU","Setmore","Yocoboard","Anywhereworks"]
Object.getOwnPropertyNames(user).forEach(function(val) {  
    console.log(val + ' -> ' +user[val]);  
});

for (const key in user) {
   // if (Object.hasOwnProperty.call(user, key)) {
        const keys=user;
        const element = user[key];
        console.log(keys);
        //console.log(element);
        
   // }
}

function f1(id,names,number){
    this.id=id;
    this.names=names;
    this.number=number;
}

f=new f1(1,"Ashwin","234");
console.log(f.id+f.names+f.number);

const square = number => number*number;
console.log(square(2));

const colors=["yellow","blue","white"];
const items=colors.map(color => `<li>${color}</li>`);
console.log(items);
var str="hello";
var chr=[...str];
for(c in chr){
    const char=chr[c];
    console.log(char);
}
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log(message);