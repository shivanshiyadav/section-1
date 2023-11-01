const user  ={
    name : 'remau',
    email:'ramugamail.com',
    rollno :284
};
console.log(user.email);
console.log(user.name);
console.log(user['name']);

user.addressc = 'Lucknow';
user.rollno = 90;
console.log(user);

const smartphone ={
    brand: 'Redmi',
    model:'note 12',
    price: '20,000',
    color: ['black','grey' ,'blue']
};
console.log(smartphone.model);
console.log(smartphone.color[1]);
const smartphoneList = [
    {
        brand: 'Redmi',
        model:'note 12',
        price: '20,000',
        color: ['black','grey' ,'blue']
    }
];

console.log(smartphoneList[0]);
smartphoneList[0].model =' note15';


console.log(smartphoneList[0].color[2]);
smartphoneList[0].color [2]=' red';
console.log(smartphoneList);