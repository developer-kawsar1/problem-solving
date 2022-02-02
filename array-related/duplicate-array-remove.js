var real = []

//console.log(real.indexOf("98")); // -1
var names = ["kawsar", "tanzim", "masum", "tanzim"]
for (let i of names) {
  if (real.indexOf(i) === -1) {
    real.push(i)
  }
}

console.log(real);