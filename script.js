//complete this code
class Person {
	let name;
	let age;
	
	constructor(name,age) {
		this.name=name;
		this.age=age;
	}

	get name() {
		return this.name;
	}

	set age(age) {
		this.age=age;
	}
}

class Student extends Person {
	// constructor(name) {
	// 	super(name)
	// }
	
	function study() {
		console.log(this.name, "is strudying");
	}
}

class Teacher extends Person {
	// constructor(age) {
	// 	super(age);
	// }
	
	function teach() {
		console.log(this.age, "is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
