// question 2
let person:string="eric";
console.log("hello"+ "  "+ person+ " "+"would you like to learn some typescript today")

//q#3
let namePerson:string="mehnazar";
let namePerson1= namePerson.toLowerCase();
let namePerson2=namePerson.toUpperCase();
console.log(namePerson);
console.log(namePerson1);
console.log(namePerson2);
console.log(namePerson.charAt(0).toUpperCase()+namePerson.slice(1).toLowerCase());

//q#4
console.log('hazrat Muhammad s.a.w said: "jannat is under the feet of mother"')

//q#5
let famousPerson:string="Hazrat Muhammad S.A.W";
let quote: string =famousPerson +'once said:,"jannat is under the feet of Mother"';
console.log(quote)
//q#6:
let printName: string="\t\t\t\t\t\n Mehnazar\t\t\t\n";
console.log(printName);
console.log(printName.trim());
//q#7
const numbers= 4;8;16;2;32;
console.log(4+4);
console.log(16-8);
console.log(4*2);
console.log(32/4);
//q#8
console.log(5+3);
console.log(10-2);
console.log(2*4);
console.log(16/2);
//q#9
let myFavoriteNum : number=4;
console.log('hello dude! my favorite number is'+ " " + myFavoriteNum);
//Q#10
//Mehnazar
// 6/4/2024
// this program prints my favorite number on screen
let myFavoriteNumb : number=4;
console.log('hello dude! my favorite number is'+ " " + myFavoriteNumb);
//q#11
let Names=["sir zia", "sir ameen alam", "sir moeiz", "daniyal nagori"];
for(let i=0; i< Names.length;i++ ) {
  console.log(Names[i])
}
//q#12
let Namess=["sir zia", "sir ameen alam", "sir moeiz", "daniyal nagori"];
for(let i=0; i< Namess.length;i++ ) {
console.log('hello'+" "+ Namess[i]+"  "+ "have a good day")}
// Q#13
let transport= ["car","plane","submarine"];
console.log(transport[0]+ " "+ "is my favorite land transport ");
console.log(transport[1]+ " " + "is my favorite air transport");
console.log(transport[2]+ " " + "is my favorite water transport");
// q#13 in another way 
let transports: string[]=["car","plane","submarine"];
transports.forEach(transports=>{
  console.log("i would like to own a" +" "+ transports)
})
//Q#14
let guest:string[]=["mohammad moosa","hoorain","anaya"];
guest.forEach(guest=>{
  console.log("Dear "+ guest + "  lets have a dinner together")
})
//Q#15
let unableToAttend="anaya";
console.log(unableToAttend+ " can't join us for dinner");
let newGuest= "abeeha fatima ";
guest[guest.indexOf(unableToAttend)]=newGuest;
guest.forEach(guest=> { 
  console.log('Dear '+ guest +" would you like to join me for dinner");
})
//q#16
console.log("hurrah ! I've found a bigger dinner table");
guest.unshift("hareem fatima"); // add element at the begining of an array
guest.splice(guest.length/2,0,"alayna"); // adds alayana in the middle of array as 3/2 = 1.5 so it adds after index 1
guest.push("ibraheem "); // push method add entity at the end of an arRAY
guest.forEach(guest=>{
  console.log("Dear "+ guest +" lets join me for the dinner")
})
//Q#17
// shrinking the list
console.log("unfortunately i missed the table and i have seats for only two persons");
while(guest.length>2){
  let removedGuest= guest.pop(); // deleting array elements
  console.log("sorry, "+ removedGuest+" i can't invite you for dinner")
}
guest.forEach(guest=>{
  console.log('Dear '+ guest+ ' you are still invited to dinner');

});
guest.splice(0,guest.length);// removing array elements to clear the list
console.log(guest); // show an empty list
//Q#18
// seeing the world
console.log("\n Q#18 seeing the world")
let myTrip :string[]=["kaaba","madina","switzerland","paris","london"];
console.log("original order: ", myTrip);
console.log("Alphabetical order: ", [...myTrip].sort());
console.log("original order: ", myTrip );
console.log("Reverse Alphabetical order:", [...myTrip].sort().reverse());
console.log("original list is still same,", myTrip);
myTrip.reverse();
console.log("Reversed order:", myTrip);
myTrip.reverse();
console.log("original order:", myTrip);
myTrip.sort();
console.log("Alphabetical order:", myTrip);
myTrip.reverse();
console.log("reverse Alphabetical order:", myTrip);

//Q#19
// indicating total guest in the list
console.log("Q#19 indicating total number of guest in a list")
let listOfGuest: string[]=["moosa","hoorain","anaya","hareem","Ahmed","alayna","abeeha","ibraheem"];
console.log("i invited " +listOfGuest.length +" guests for the dinner");
// Q#20
//list of things for example languages
console.log("\n Q#20 :list of things")
let language:string[]=["urdu","english","sindhi","arabi","chineese","persian"];
console.log("i want to learn these languages "+ language );
//Q #21
// use of object
console.log("\n Q#21 use of object")
let mySon:{name: string; age: number; class:number}={
  name:"Muhammad Moosa",
  age: 9,
  class:3
}
console.log("my Son "+ mySon.name + " is of age ", mySon.age +",he studies in grade "+ mySon.class);
//Q#22 
// international index error

console.log("\n creating index error")
let countries: string[]=["pakistan","Iran","palestine"];
console.log(countries[3]);
console.log(countries[2]);
//Q#23 
//conditional test
console.log("\n conditional test for car");
let car="toyota";
console.log("Is car == 'toyota'? I predict true");
console.log(car =='toyota'); 
console.log("Is car == 'suzuki'? I predict false");
console.log(car == 'suzuki');
//2. 
console.log("\n conditional test for tv");
let TV ="LED";
console.log("Is TV == 'LED'? I predict true");
console.log(TV == 'LED');
console.log("Is TV =='LCD'? I predict false");
console.log(TV=='LCD');
//3
console.log(" \n conditional test for boy name check ");
let boy="Moosa";
console.log("Is boy == 'Moosa'? I predict true");
console.log(boy=='Moosa');
console.log("is boy == 'muhammad'? I predict false");
console.log(boy=='Muhammad');
//4
console.log("\n conditional test for girl name ");
let girl="hoorain";
console.log("is girl == 'hoorain' ? I predict true");
console.log(girl=='hoorain');
console.log("is girl == 'anaya'? I predict false");
console.log(girl=='anaya');
//5
let sign="alpha";
console.log("is sign == 'alpha'? I predict true");
console.log(sign == 'alpha');
console.log("is sign == 'beta'? I predict false");
console.log(sign == 'beta');
//6
let country = "Pakistan";
console.log("is country == 'Pakistan'? i predict true ");
console.log(country == 'Pakistan');
console.log("is country == 'India'? i predict false");
console.log(country=='India');
//7
let great="Sir Zia";
console.log("is great =='Sir Zia'? I predict true ");
console.log(great=='Sir Zia');
console.log("is great == 'anybody'? I predict faalse");
console.log(great=='anybody');
//8
let desert = "cake";
console.log("is desert == 'cake'? I predict true");
console.log(desert=='cake');
console.log("is desert ='kheer'? I predict false");
console.log(desert== 'kheer');
//9 
let favDish= "Pizza";
console.log("is favDish== 'Pizza'? I predict true");
console.log(favDish == 'Pizza');
console.log("is favDish == 'biryani'? i predict false");
console.log(favDish == 'biryani');
//10
let learn ="typescript";
console.log("is learn == 'typescript'? I predict true");
console.log(learn == 'typescript');
console.log("is learn == 'C++'? I predict false");
console.log(learn== 'C++');

// Q#24
// equality of string
let fruit = "apple"
console.log("\n Q#24 equality test for word")
console.log(fruit == "apple");
console.log(fruit =='Apple');

// lower case function
console.log("Testing with lower case");
console.log("Apple".toLowerCase()=="apple");
// numerical test
console.log("Numerical Test");
console.log(10<20);
console.log(2>3);
console.log(10>=10);
console.log(3<=5);
console.log("testing logical operator");
console.log(1&&0==0);
console.log(true || false);
console.log("testing array entities");
let vegetable:string[]=["carrot", "capsicum","pumpkin"];
console.log("is 'carrot' in vegetable?");
console.log(vegetable.includes('carrot'));
console.log("is 'mango' not in vegetable?");
console.log(vegetable.includes('mango'));
// q25
//alien color
console.log("\n Q#25: alien color")
let alien_color ="green";
if(alien_color == "green"){
    console.log(" you earned 5 points")
}
// version fails
let alienColor='red'
if(alienColor="green"){

}
//q#26
let alien= "green";
if (alien == "green"){
    console.log("you jus earned 5 points");
    }
    else {
        console.log("you just earned 10 points")
  };
  //to run else block
  let alien_Color="red";
  if(alien_Color == "green"){
    console.log("you just earned 5 points")
  }  
  else{
    console.log(" you just earned 10 points")
  }
  // Q#27
  let aleinCol="green";
  if (aleinCol == "green"){
    console.log("you just earned 5 points")
  }
  else if(aleinCol == "yellow"){
    console.log("You just earned 10 points ");

  }
  else if(aleinCol == "red"){
    console.log(" You earned 15 points")
  }
  // yellow alein 
  let aleinColr="yellow";
  if (aleinColr == "green"){
    console.log("you just earned 5 points")
  }
  else if(aleinColr == "yellow"){
    console.log("You just earned 10 points ");

  }
  else if(aleinColr == "red"){
    console.log(" You earned 15 points")
  }
  // red alien
  let aleinColour="red";
  if (aleinColour == "green"){
    console.log("you just earned 5 points")
  }
  else if(aleinColour == "yellow"){
    console.log("You just earned 10 points ");

  }
  else if(aleinColour == "red"){
    console.log(" You earned 15 points")
  }
  
  //Q# 28
  // stages of life

  console.log("\n Q# 28 : stages of life ")

  let age =90;
  if (age<2){
    console.log("the person is baby")
  }
  else if (age <4){
    console.log("the person is toddler")
  }
  else if (age<13)
{
    console.log("the person is a kid")
}
else if (age <20){
    console.log("the person is teenager")
}
else if (age < 65){
    console.log("the person is an adult")
}
else {
    console.log(" the person is elder")
}
// Q# 29
//check array with if statement

 console.log("\n Q#29 if in array")
let favFruit:string[]=["apple", "banana","mango"];
if (favFruit.includes( "apple"))
    { 
    console.log("you really like an apple")
    }
    if(favFruit.includes("banana")){
        console.log("you really like banana")
    }
    if (favFruit.includes("mango")){
        console.log(" you really like mango")
    }  

    //Q # 30
    console.log("\n Q#30")
    let userName:string[]=["admin","mehnazar","Umair","Moosa","Hoorain"];
    userName.forEach(userName=>{
    if (userName.includes("admin")){
        console.log("Hello admin, would you like to see status report")
    }
    else{
        console.log(`hello ${userName}, thank you for logging in again`)
    }});
    // Q# 31
    console.log("\n Q# 31:");
    let usernames: string[]=[];
    if (usernames.length === 0){
        console.log("we need to find some users!");
    }

    //Q#32
    console.log("\n Q#32: checking username")
    let current_user:string[]=["maha", "hunain", " hidaya","hoor","anaya"];
    let new_user:string[]=["moosa","ibraheem","abeeha","hoor","anaya"];
    new_user.forEach(newUser =>{
        if (current_user.some(currentUser=> currentUser.toLowerCase() === newUser.toLowerCase()))
            {
                console.log(`${newUser} will need to enter a new user name`)
            } else{
                console.log(`${newUser} is available`)
            }
    }
        
    )
    //Q#33

    console.log("\n Q# 33 ordinal number ")
    let numberss:number[]=[1,2,3,4,5,6,7,8,9];
    numberss.forEach(number=>{
        let suffix = "th";
        if (number === 1){
            suffix = "st";}
                else if (number === 2){
                    suffix = "nd";
                } else if(number === 3){
                    suffix ="rd";
                }
                console.log(`${number} ${suffix}`);
                     });
    //Q#34
    //pizza
console.log("\n Q#34");
    let pizza:string[]=["afghani pizza","peproni pizza","fajita pizza"];
 pizza.forEach(pizzas=>{
console.log(`I like ${pizzas} pizza`)
 });
 console.log("I really love pizza")

//Q#35
// loop in array
console.log("\n Q# 35");
let animal:string[]=["Dog","Cat","peacock"];
animal.forEach(animals=>{
    console.log(`A ${animals} would make a great pet`)
});
console.log("Any of these animals would make a great pet!")

//Q#36
// use of function
console.log("\n Q#36");
function make_shirt(size: string, message: string){
    console.log(`making a ${size} t-shirt with the message "${message}" printed on it`);
}
make_shirt("large","coding is life");
make_shirt("small","my little champ");
make_shirt("medium","All is well");
// Q#37;
console.log("\n Q#37");
function makeShirt(size: string= "large", message : string= " I love typescript"){
    console.log(`making a ${size} t-shirt with the message "${message}" printed on it.`);
}
makeShirt(); // default values
makeShirt("medium");
makeShirt("small", "dive into coding");

//Q# 38;
console.log("\n Q#38 ");
function describe_city(city : string, country: string="Pakistan"){
    console.log(`${city} is in ${country}.`);
}
describe_city("karachi");
describe_city("hyderabad");
describe_city("Tokyo", "Japan");

//Q#39
console.log("\n Q#39");
function city_country(city: string, country: string):string{
    return `${city}, ${country}`;
}
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("tokyo","japan"));
console.log(city_country("Paris","France"));

//Q#40
console.log("\n Q#40 ")
function make_album(artist:string, title:string, tracks?: number ){
let album= { artist, title,tracks};
return  album;
}
console.log(make_album("first Artist","the first album"));
console.log(make_album("second Artist", "second Edition"));
console.log(make_album("allama Iqbal"," nazmo ki dunia",3));


//Q#41
console.log("\n Q#41")
let magicians: string[]=["salaar","halaar","famous"]
function show_magician(magicianName: String[]){
  magicians.forEach(magicians=>{
    console.log(magicians);
  });
}
show_magician(magicians);

//Q#42
console.log("\n Q#42 ")
function make_great(magicians:string[]){
  magicians.forEach(magician=>{
    console.log(`${magician} the Great`);
  })
}
make_great(magicians);
show_magician(magicians);

// Q#44
console.log(" \n Q#44")
function sandwitch(...items:string[]){
  console.log(`making a sandwitch with:${items.join(',')}`);
}
sandwitch("olives","carrot","potato");
sandwitch("cheese","egg");
sandwitch("ketchup","mayogarlic","bbq sauce")

// //Q#45
// function make_model(manufacturer:string, model:string, ...options:[string, any][]): object{
//     let car={ manufacturer, model};
//     options.forEach(([key, value]) => car[key]= value);
//     return car;
//   }
//   console.log(make_model("toyota","carolla",["red",2016],));
//   console.log(make_model("ford","fiesta",["color","blue"],["sunroof","true"]))







