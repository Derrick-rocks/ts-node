// function greeter(person: string) {
// 	return "Hello, " + person;
// }

// let user = "Derrick";

// document.body.textContent = greeter(user);






// interface Person {
// 	firstName: string;
// 	lastName: string;
// }

// function greeter(person: Person) {
// 	return "Hello, " + person.firstName + '' + person.lastName;
// }

// let user = { firstName: "derrick", lastName: "chen"};

// document.body.textContent = greeter(user);






class Student{
	fullName: string;
	constructor(
		public firstName: string,
		public midInterval: string,
		public lastName: string,
	) {
		this.fullName = firstName + '' + midInterval+ '' + lastName;
	}
}

interface Person {
	firstName: string;
	midInterval: string;
	lastName: string;
}

function greeter(person: Person) {
	return "Hello, " + person.firstName + '' + person.midInterval+ '' + person.lastName;
}

let user = new Student('derrick','fanxiu.','chen');

document.body.textContent = greeter(user);