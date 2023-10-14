import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import dotenv from 'dotenv'
import customItemsRouter from "./routes/customItems.js"

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

// Handler for the root route
app.get("/", (req, res) => {
    res.send("Express server is running!");
});

// Use custom items router for all requests going to /api/custom-items
app.use('/api/custom-items', customItemsRouter);

if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'lightning.png')))
}
else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'lightning.png')))
    app.use(express.static('public'))
}


if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})