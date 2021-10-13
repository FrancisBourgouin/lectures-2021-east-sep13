const potato = process.argv[2] || "hello";

console.log(potato);

let bob = "";

if (process.argv[2]) {
	bob = process.argv[2];
} else {
	bob = "hello";
}
