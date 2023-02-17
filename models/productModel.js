let products = require('../data/products')
const { v4: uuidv4 } = require('uuid')

const { writeDataToFile } = require('../utils')

function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = {id: uuidv4(), ...product}
        products.push(newProduct)
        if (process.env.NODE_ENV !== 'test') {
            writeDataToFile('./data/products.json', products);
        }
        resolve(newProduct)
    })
}



module.exports = {
    create
}