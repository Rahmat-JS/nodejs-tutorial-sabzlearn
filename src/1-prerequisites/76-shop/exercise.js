const { log } = require('console');
const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
};

const products = [
    {
        id: 1,
        name: 'pen',
        price: 5_000
    },
    {
        id: 2,
        name: 'ruler',
        price: 10_000
    },
    {
        id: 3,
        name: 'book',
        price: 100_000
    },
    {
        id: 4,
        name: 'switch',
        price: 20_000
    },
    {
        id: 5,
        name: 'case',
        price: 5_000
    },
    {
        id: 6,
        name: 'knapsack',
        price: 500_000
    },
    {
        id: 7,
        name: 'wire',
        price: 2_000
    },
    {
        id: 8,
        name: 'brush',
        price: 17_000
    },
    {
        id: 9,
        name: 'eraser',
        price: 7_000
    },
    
];


let shopping_cart = [
    {
        id: 1,
        name: 'pen',
        price: 5_000
    },
    {
        id: 2,
        name: 'ruler',
        price: 10_000
    },
    {
        id: 3,
        name: 'book',
        price: 100_000
    }
];

async function main() {
    try {
        while(true) {
            console.log('1. shopping cart');
            console.log('2. products');
            console.log('3. delete');
            console.log('4. add');
            console.log('5. total price');
            console.log('0. exit');
            const choice = Number(await askQuestion(': '));

            if(choice === 0) break;

            let product_name;
            switch(choice) {
                case 1:
                    console.log(shopping_cart);
                    break;
                case 2:
                    console.log(products);
                    break;
                case 3:
                    product_name = await askQuestion('Enter your product name: ');
                    shopping_cart = shopping_cart.filter((product) => {
                        return product.name !== product_name;
                    });
                    console.log(`your product removed successfully!`);
                    break;
                case 4:
                    product_name = await askQuestion('Enter your product name: ');
                    const product = products.find((product) => {
                        return product.name === product_name;
                    });
                    if(product === undefined) console.log('your product can not find!');
                    else if(shopping_cart.find((product_curr) => {
                        return product_curr.name === product_name;
                    })) console.log('this product exist in your shopping cart!');
                    else {
                        shopping_cart.push(product);
                        console.log(`${product_name} added successfully!`);
                    }
                    break;
                case 5:
                    let result = 0;
                    shopping_cart.forEach((product) => {
                        result += product.price;
                    });
                    console.log(`current price is ${result}`)
                    break;
                default:
                    console.log('your option is not valid!');
            }
        }
    }
    catch(error) {
        console.log(`an error occurred ${error}`);
    }
    finally {
        rl.close();
    }
};

main();