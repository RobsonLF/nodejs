const a1 = [1,2,3,];
const a2 = [4,5,6,];
const a3 = a1.concat(a2,[7,8,9],'Robson');
const a4 = [... a1,...a2,...[7,8,9]];
//... pode ser o rest operator e 
//... spread operator

console.log(a3);
console.log(a4);