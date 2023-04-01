import express from "express";
import { personajeRoute } from "./routes/personaje.route";
import { dbConnection } from "../db-config";

const port = 3000;
const app = express();

app.use(express.json());

dbConnection();

app.use(express.urlencoded({ extended: true }));
app.use(personajeRoute);

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});
