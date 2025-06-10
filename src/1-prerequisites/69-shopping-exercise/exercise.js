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
        name: 'pencil',
        count: 5,
    },
    {
        id: 2,
        name: 'marker',
        count: 5,
    },
    {
        id: 3,
        name: 'book',
        count: 5,
    },
    {
        id: 4,
        name: 'sticky note',
        count: 5,
    },
    {
        id: 5,
        name: 'crayon',
        count: 0,
    },
    {
        id: 6,
        name: 'ruler',
        count: 5,
    }
];

const shopping_cart = [
    {
        id: 1,
        name: 'pencil',
    },
    {
        id: 2,
        name: 'marker'
    },
    {
        id: 3,
        name: 'book',
    }
];

async function main() {
    try {
        while(true) {
            const product_title = await askQuestion('Enter your title to buy: ');
            const idx = products.findIndex((product) => {
                return product.name === product_title;
            });

            if(idx === -1) console.log('the product you are looking for is not available!');
            else if(products[idx].count <= 0) console.log('this product is sold out!');
            else if(shopping_cart.some((product) => {
                return product.name === product_title;
            })) console.log('this product is exist on you shopping cart!');
            else {
                products[idx].count--;
                shopping_cart.push({
                    id: products[idx].id,
                    name: products[idx].name
                });
                console.log(`your current shopping cart is:\n${JSON.stringify(shopping_cart, null, 4)}`);
            }
            const choice = await askQuestion('do you want to continue (y/n)? ');
            const yes = ['yes', 'y'];
            if(!yes.includes(choice.toLowerCase())) break;
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