/*
Truthey:
1. True
2. Any number(+ve), (-ve) will be truthy other then 0
3. Any string is truty other then empty string
4. '0'
5. []
6. {}

Falsy:
1. Falsy;
2. 0
3. Empty('') string is falsy
4. undeffine
5. null
*/

const x = "0";
if (x) {
    console.log('value is true');

}
else{
    console.log('value is false');
    
}