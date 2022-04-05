console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
    basket.push(item);
    if(basket.includes(item)){
        return true;
    }
    else return false;
}
console.log('Basket is', basket);
console.log('Adding eggs and milk (expect true)', addItem('eggs'), addItem('milk'));
console.log('Basket is now', basket);

function listItems(){
    console.log('Items are:')
    for (let i=0; i<basket.length;i++){
        console.log(basket[i], '\n');
    }
}
listItems();

function empty(){
    basket = [];
    }
    
    empty();
    console.log('Basket emptied. Basket is now', basket);