import express from 'express';

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
    res.send(`Express running on ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});