const { OpenAI } = require("openai")

const openai = new OpenAI({
  baseURL: process.env.ZIMA_BASE_URL || "https://zima-backend.vercel.app/api/v1",
  apiKey: process.env.ZIMA_API_KEY,
  apiKey: process.env.OPENAI_API_KEY

})

module.exports = { openai }
