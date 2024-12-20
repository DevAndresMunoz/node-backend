const { faker } = require("@faker-js/faker");

const products = [];

for (let i = 0; i < 50; i++) {
    const product = {
        productName: faker.commerce.productName(),
        productDescription: faker.commerce.productDescription(),
        productMaterial: faker.commerce.productMaterial(),
        productPrice: faker.commerce.price(),
    };
    products.push(product);
}

module.exports = products;