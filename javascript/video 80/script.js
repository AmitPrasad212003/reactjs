// let obj = {
//     a:1,
//     b:"Harry"
// }

// console.log(obj)

// let animal ={
//     eats : true
// };

// let rabbit = {
//     jumps:true
// };

// rabbit._proto_ = animal;

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is ");
    }
    eats(){
        console.log("kha raha hoon")
    }
    jumps(){
        console.log("Kood raha hoon ");

    }
}

class lion extends Animal{
    constructor(name){
        super(name)       
        console.log("Object is created and he is a lion...")
        
    }
    eats(){
        super.eats()
        console.log("kha raha hoon meat")
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new lion("Shera")
console.log(l)

// class user{
//     constructor(name){
//         this.name = name;
//     }

//     get name(){
//         return this._name ;
//     }

//     set name (value){
//         if(value.length <4){
//             console.log("Name is too short..");
//             return;

//         }
//         this._name = value;
//     }
// }


// let User = new user("John");
// console.log(User.name);

// User.name = "Amit"
// console.log(User);

