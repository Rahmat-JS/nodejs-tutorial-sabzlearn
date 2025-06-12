const obj = {
    id: 43,
    name: 'Rahmat',
    email: 'rahmat.ansari.dev@gmail.com'
};

const {name, id: my_id, email} = obj;

console.log(`id: ${my_id}, name: ${name}, email: ${email}`);