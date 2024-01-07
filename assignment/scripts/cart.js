console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//global variable 'basket' with empty array
let basket = [];

//function 'addItem' & input parameter for a string 'item'
function addItem(item) { 
    let newList = basket.push(item); //variable that adds new item to basket
    if (newList < 0) {
        return false;
    } else {
        return true;
    }
}
//call to test
console.log(`items in basket: ${basket}`);
console.log('Added peppers (output true)', addItem('peppers'));
console.log(`items in basket now: ${basket}`);
console.log('Added carrots (output true)', addItem('carrots'));
console.log('Added berries (output true)', addItem());

//function 'listItems'

//loop items in basket array


//function 'empty'


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
