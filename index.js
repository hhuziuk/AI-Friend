const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;
const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 3002

const configuration = new Configuration({
    organization: "org-bESpoV2aeZ481Zjv0ujJKZ5Z",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json())
app.use(cors())

app.post('/', async(req, res) => {
    const {message} = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Pretend you are my best 17-years friend.
        You: What have you been up to?
        Friend: Watching old movies.
        You: Did you watch anything interesting?
        Friend: ${message}`,
        temperature: 0.8,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
      });
      console.log(response.data)
      if(response.data.choices[0].text){
            res.json({message: response.data.choices[0].text})
      }
});

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening on ${PORT}`)
})