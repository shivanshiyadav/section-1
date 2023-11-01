const nums = [2,3,7,9,18,6,23,];
for( let n of nums){
    if(n%2 ===0){
    console.log(n);
    }
};
console.log('---------------------');
nums .forEach( ( n) => { if (n%2  !==0) console.log(n);});

//anew array that contains the square of all elements

 const newArr = nums.map((n) => {return n**2} );
 console.log(newArr);

 //filter 
  const evens = nums .filter ((a) => {return  a%2 ===0})
  console.log(evens);
  const price = [ 2300 , 150 , 1300, 800, 300, 600, 750]
  //price should be less than 1000 and greater than 500
  for( let n of nums){
    if(n%2 ===0){
    console.log(n);
    }
}; 
const newPrice = price .filter((p) => {return p>500 && p<1000});
// console.log('p>500 && p<1000'.includes ('500'))
console.log(newPrice);

const mails = ['mmmyahoo.com','abcgamil.com','xyzgmail.com,' ]
// console.log('triplegmail.com'.includes('m'))
const gmail = mails.filter ((m) => { return m.includes('gamil')});
console.log(gmail);
const discounted = price .map((p) => {return p*0.9 + p*1.8});
console.log(discounted);

console.log(( 100 * 0.18));
  