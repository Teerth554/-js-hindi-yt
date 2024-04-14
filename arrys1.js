const marvel_hero=["thor","ironman","spidey"]
const dc_hero=["superman","flash","batman"]

// marvel_hero.push (dc_hero) //it takes the array as a data
// console.log(marvel_hero);

const allHero= marvel_hero.concat(dc_hero)
 console.log(allHero);
const every=[...marvel_hero,...dc_hero]//spread operator
console.log(every);

const arr=[1,2,3,4,[5,8],11,[45,55,65],101]
const realarr=arr.flat(1)
console.log(realarr);

console.log(Array.isArray("teerth"))
console.log(Array.from("teerth"))
console.log(Array.from({ name: "masao"})) //intresting que

