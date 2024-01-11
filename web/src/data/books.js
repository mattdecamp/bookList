const groq = require('groq')
const client = require('../utils/sanityClient')

function generateBook(post) {
    return {
        ...post
    }
}

async function getBooks() {
    const filter = groq`*[_type == "book"]`
    const order = `| order(dateRead desc)`
    const query = [filter, order].join(' ')
    const docs = await client.fetch(query).catch((err) => console.error(err))
    const prepareBooks = docs.map(generateBook)
    return prepareBooks
}

module.exports = getBooks
