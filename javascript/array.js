let myarr=[7643,' hello' ,true,console.log,45,67];
console.log(myarr);
console.log(typeof(myarr) );
console.log(Array.isArray(myarr) );


const fruits =['apple','mango','grapes','kiwi','orange','fig'];
console.log(fruits.length);

//indexing
console.log(fruits[2] );
console.log(fruits.indexOf('mango') );


console.log( fruits.at(-3) );

//slicing
console.log(fruits.slice(2,5) );
console.log(fruits.slice(2,1000) );
console.log(fruits.slice(2) )
console.log(fruits.slice(1,-3) );

// adding elements
 fruits.push('banana')// add at the end of array
 fruits.unshift('papaya');  //add at the begning of the array 

 console.log(fruits)

//  replacing elements
fruits[2]="cherry"
console.log(fruits);

// resolving element
fruits.pop(); //remove last element
 fruits.shift(); //remove first element

console.log(fruits);


fruits.splice( 2,4);

console.log(fruits);







//slicing

