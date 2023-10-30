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