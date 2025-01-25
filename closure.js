function closure() {
    let compare = 0;
    return function () {
        compare++;
        return compare
    }
}
const clos = closure();
console.log(clos());
console.log(clos());
console.log(clos());
console.log(clos());
console.log(clos());
console.log(clos());
console.log(clos());