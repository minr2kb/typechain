type Mytype = string | number; // union type
type Person = [number, boolean]; // tuple type
type Member = {
	[key: string]: string;
};

let variable: Mytype = "kim";
variable = 1234;
let arr: string[] = ["Kim", "Min"];

function func(x: string): number {
	return 123;
}

let john: Person = [123, true];
let koh: Member = {
	name: "Kim",
	surname: "asdf",
};

class User {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}
