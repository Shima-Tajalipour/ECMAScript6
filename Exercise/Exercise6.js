//Exercise 6
let salaries = {
    Fred:100,
    Ted:160,
    Ghaith:130
}
let sum=0;
for (const i in salaries) {
    sum += salaries[i]
}
console.log(sum)