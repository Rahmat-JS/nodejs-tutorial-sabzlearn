products = [
    {
        id: 1,
        name: 'laptop',
        price: 32_000_000
    },
    {
        id: 2,
        name: 'book',
        price: 43_500
    },
    {
        id: 3,
        name: 'car',
        price: 1_200_000_000
    },
    {
        id: 4,
        name: 'violen',
        price: 50_000_000
    },
];

products.forEach((product) => {
    product['price'] /= 2;
    // product.name = 'renamed';
});

console.log(products);
