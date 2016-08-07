// used in lesson2.html

//Functions, beginning//
function hello(person) {
	console.log("Hello " + person + "!");
}

hello("Jodi");



function conversation(person, topic) {
	hello(person);
	console.log("How are you?");
	console.log("Do you like " + topic + "?")
	console.log("Goodbye");
}

conversation("Kornelia", "Dogs");



function greeting(person) {
	return "Hello" + person + "!";
}

console.log(greeting("Kornelia"));


//Objects//

var person_a = {
	first_name: "Kornelia", 
	likes: "dogs",
};

console.log(person_a);

var person_b = person_a;

console.log("Before");
console.log(person_a.first_name);
console.log(person_b.first_name);

person_a.first_name = "Aberforth";

console.log("After");
console.log(person_a.first_name);
console.log(person_b.first_name);



