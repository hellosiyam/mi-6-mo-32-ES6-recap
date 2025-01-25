// const first = [45, 54, 89]; 
// const second = [45, 54, 89];
// const third = (first, second)

// const compire = (third).map =>(first.values === second.values)
// if (first === second) {
//     console.log('values are equal');
    
// }
// else{
//     console.log('values are not equal');
    
// }

const first = [45, 54, 89];
const second = [45, 54, 89];

// Function to compare arrays using map and values comparison
// const compareArrays = (first, second) => {
//   if (first.length !== second.length) return false;

//   return first.every((value, index) => value === second[index]);
// };

// const areEqual = compareArrays(first, second);
// console.log(areEqual); // Output: true

const compare =(first, second)=>{
    if (first.length !== second.length) {
        return false
    }
    else{
        const third = first.every((value, index)=> value === second[index]);
        return third
    }
}
const arrays =compare(first, second);
console.log(arrays);

