/* printing out product names and prices on an invoice, then totaling the prices and printing them at the bottom

'Underpants:6.99'
                'Socks:5.99'
                'T-shirt:14.99'
                'Trousers:31.99'
                'Shoes:23.99';*/
                
var products = ['Underpants:6.99',
 'Socks:5.99',
 'T-shirt:14.99',
 'Trousers:31.99',
 'Shoes:23.99'];
var total = 0;

/*for (var i =0; i <products.length; i++){
  var productItemArray = products[i].split(':');
  var price = Number(productItemArray[1]);
  total += price;
}
console.log(total);
total = 0;*/

products.forEach(function(productItem) {
  var productItemArray = productItem.split(':');
  var price = Number(productItemArray[1]);
  total += price;
  
});
total = Math.round(total*100)/100;        //to fix weird computer adding issue

products.forEach(function(productItem) {
  productItemDash = productItem.replace(':',' - ');
  console.log(productItemDash);
});

console.log(`The total price of the items is ${total}`);