/*
    - With the given shoppingList array, use array destructuring to assign each array within the shoppingList array its own variable. Then, reinitialize the shoppingList array so it is a single array containing all of the values from the original array. 
    
    - after the shoppingList array has been reinitialized, using the array.prototype.map method, map over the newly initialized shoppingList array. You should do the following within the map method:
        - include a parameter for index
        - utilize the array.prototype.push method to push the current value being mapped over into the appropriate key/value pair in the obj variable
            - you will need to implement some sort of logic to check the index of the current item being mapped over.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let shoppingList = [[ 'eggs', 'milk', 'butter' ], [ 'cleaner', 'trash bags', 'detergent' ], [ 'thank you card', 'pens', 'gift wrapping' ], [ 'shoes', 't-shirt', 'slacks' ]];

const grocery = shoppingList[0];
const cleaning = shoppingList[1];
const gifts = shoppingList[2];
const clothing = shoppingList[3];

const shoppingList2 = [...grocery, ...cleaning, ...gifts, ...clothing];
console.log(shoppingList2);




let obj = {
cleaning: [],
gifts: [],
clothing: [],
grocery: []
};

shoppingList2.map((item, index) => {
    if(index <= 2) {
        obj.grocery.push(item)
    } else if(index >2 && index <=5) {
        obj.cleaning.push(item)
    } else if(index >5 && index <=8) {
        obj.gifts.push(item)
    } else {
        obj.clothing.push(item)
    }
})

console.log(obj);