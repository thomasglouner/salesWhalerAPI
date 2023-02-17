//const Product = require('../models/productModel')

//const { getPostData } = require('../utils')

// @desc    Create a Product
// @route   POST /api/products
async function createProduct(req, res) {
    try {
        const xmlDocument = new DOMParser().parseFromString(req, "text/xml")

        console.log(xmlDocument)


        const xmlResponse = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"><soapenv:Body><notificationsResponse xmlns="http://soap.sforce.com/2005/09/outbound"><Ack>true</Ack></notificationsResponse></soapenv:Body></soapenv:Envelope>'

        res.write(xmlResponse, 'utf8', () => {
            console.log("status: 200");
        })
        

        //res.writeHead(201, {'Content-Type': 'application/xml'})

        /*const body = await getPostData(req)

        const { name, description, price } = JSON.parse(body)

        const product = {
            name,
            description,
            price
        }

        const newProduct = await Product.create(product)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newProduct))  
        */
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createProduct
}