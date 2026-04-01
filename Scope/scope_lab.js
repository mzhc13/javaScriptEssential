

// Global scope

var globalVar = "Im a global variable";
let globalLet = "Im also a globa, but scoped with let";
const globalConst = "Im a global constant";

{
var blockVar = "Im a block-scoped var";
let blockLet = "Im a block-scoped let";
const blockConst = "Im a block-scoped const";
}

console.log(globalVar); //Output: "Im a global variable"
console.log(globalLet); //Output: "Im also global, but scoped with let"
console.log(globalConst); //Output: "Im a global constant"

//we create function
function show(){
    var functionVar = "Im a block-scoped var";
    let functionLet = "Im a block-scoped let";
    const functionConst = "Im a block-scoped const";
}

//call function
show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);

 