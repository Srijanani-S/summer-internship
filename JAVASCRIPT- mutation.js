//mutation
const user5={
    name: 'sanj',age:20,email:'jan2004',dept:'cse'
};
const user6=user5;
const userx={...user5};
user5.sub='maths';
console.log(user5,userx);

//undefined
const usery={
    name: 'sanj',age:20,email:'jan2004',dept:'cse'
};
console.log(usery.sub);
