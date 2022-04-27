const express = require("express")
const cors = require("cors")

const emailRouter = require("./routes/email/emailRouter")

const app = express()

const PORT = "8800"

app.use(express.json())
app.use(cors())

app.use("/api/email", emailRouter)

app.listen(PORT, () => {
   console.log(`App running on port ${PORT}`)
})
