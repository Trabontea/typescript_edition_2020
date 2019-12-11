//15. Objects
//la alt capitol
interface person {
  name:string;
  age:number;
} 

const person:person = {
  name: 'Max',
  age: 30
};

console.log(person.name)
 
interface product {
  id: string;
  price: number;
  tags: string[],
  details: {
    title: string;
    description: string;
  }
}

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

console.log(product.id)

//17. Arrays Types

const member: {
  name: string,
  age: number,
  hobbies: string[],
  role:[number, string]
} = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  //tuples
  role: [2, 'author']
};

//array of stringss
let favoriteActivities: string[];
favoriteActivities = ['sport']

for (const hobby of member.hobbies) {
  console.log('hobby:', hobby);
}

//18.Tuples
//an array with 2 values
//member.role.push('admin');
 member.role[0] = 10;

for (const r of member.role) {
  console.log('role:', r);
}
console.log(member.role)

//19.Enums

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR  = 2;

enum Role {ADMIN = 'ADMIN' , READ_ONLY = 100, AUTHOR = '200'}

const person2 = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

if(person2.role === Role.ADMIN) {
  console.log('is admin') //is admin
 }

 //20. The "any" Type


 let favoriteActivities2: any[];
favoriteActivities2 = ['sport', 5 , [2, 5]]