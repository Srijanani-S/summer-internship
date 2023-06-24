//prevent changes in object--->freeze()
const user2=Object.freeze({
    name: 'sanj',age:20,email:'jan2004',dept:'cse'
});

user2.sub='maths';
delete user2.sub;
console.log(user2);

//print all the keys in object
const user3=Object.keys({
    name: 'sanj',age:20,email:'jan2004',dept:'cse'
});

user3.sub='maths';
delete user3.sub;
console.log(user3);

//print all the values in odject
const user4=Object.values({
    name: 'sanj',age:20,email:'jan2004',dept:'cse'
});

user4.sub='maths';
delete user4.sub;
console.log(user4);
