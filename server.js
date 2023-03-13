const app = require("express")()
const { spawn } = require("child_process")
require("dotenv").config()

app.get("/", (_, res) =>
    res.json({ message: "Hello, hacker nation!" })
)

app.get("/deploy/firebot", (_, res) => {
    const script = spawn("./scripts/firebot")

    script.stdout.on("data", (data) => {
        res.json({ data: data })
    })

    script.stderr.on("data", (data) => {
        res.json({ data: data })
    })

    // script.on("exit", (code) => {
    // 	console.log(`child process exited with code ${code}`)
    // })

})

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`App listening on http://localhost:${port}.`))

