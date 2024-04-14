// singleton
//object.create
//objects literals

const sym=Symbol("key1")

const user={
    name:"vaidehee", 
    "fullName":"vaidehi panchotiya",
    age:20,
    [sym]:"mykey1",
    location :"Indore",
    email:"vaidehi@gmail.com",
    isLoggedIn :false,
    lastLoginDays:["monday","saturday"]
}

// console.log(user.email) 
// console.log(user["email"]);
// console.log(user["fullName"]);
console.log(user[sym]);
console.log(typeof(sym));

user.email="teerth@gmail.com"
//Object.freeze(user)
user.email="teerth@gpt.com"
// console.log(user);

user.greeting=function()
    {
        console.log("hello user");
    }

user.greeting2=function()
    {
        console.log(`hello user, ${ this.name}`);
        console.log("hello user");
    }
console.log(user.greeting2())
