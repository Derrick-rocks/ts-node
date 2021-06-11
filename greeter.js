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
var Student = /** @class */ (function () {
    function Student(firstName, midInterval, lastName) {
        this.firstName = firstName;
        this.midInterval = midInterval;
        this.lastName = lastName;
        this.fullName = firstName + '' + midInterval + '' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + '' + person.midInterval + '' + person.lastName;
}
var user = new Student('derrick', 'fanxiu.', 'chen');
document.body.textContent = greeter(user);
