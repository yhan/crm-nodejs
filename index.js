import express from 'express';
import routes from './routes/crmRoutes';

const app = express();
const PORT = 4000;

routes(app);

app.get("/", (req, res) => {
    res.send(`Express running on ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});