// const OpenAI = require('openai-api');
// const { Configuration, OpenAIApi } = OpenAI;

const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 3002

// const configuration = new Configuration({
//     organization: "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",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

app.post('/', (req, res) => {
    res.json({
        message: "Hi!"
    });
})

// app.post('/', async(req, res) => {
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "Say this is a test",
//         max_tokens: 7,
//         temperature: 0,
//       });
//       conslole.log(response)
//       res.json({
//         message: "Heil!"
//       })
// })

app.use(bodyParser.json())
app.use(cors)

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening on ${PORT}`)
})