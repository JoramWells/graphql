const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))
 
app.use(express.static('public/build'))
app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'public/build', 'index.html'))

})

const PORT = process.env.PORT || 5000

app.listen(5000,()=>{
    console.log('Server running on http://localhost:5000/')
})