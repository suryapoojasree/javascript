const names = ["pooja", "ravi", "dattu", "himavanth", "ganesh", "hima"];
let text = names.push("murali");
console.log(names);

let text2 = names.unshift("krishna");
console.log(names);

let text3 = names.pop();
console.log(names);

let text4 = names.shift();
console.log(names);

let text5 = names.reverse();
console.log(names);

let text6 = names.includes("pooja");
console.log(text6);

let value = names.at(2);
console.log(value);

let text8 = names.slice(1, 4);
console.log(text8);

let text9 = names.splice(1, 2);
console.log(names);

let text0 = names.splice(2, 0, "raj", "tej");
console.log(names);

let text11 = names.indexOf("pooja");
console.log(text11);

let text12 = names.fill("pooja");
console.log(names);

let text13 = names.join("sree");
console.log(text13);
