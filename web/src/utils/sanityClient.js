require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'development'}`
})
const { createClient } = require('@sanity/client')


module.exports = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    apiVersion: '2023-05-03',
    useCdn: false
})
