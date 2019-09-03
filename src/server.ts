// Required modules
import dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response } from 'express';

const app: Application = express();

// Middleware and config
app.use(express.static(__dirname + '/../client/build/'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Catch-all route - delivers React app
app.get('/*', (req: Request, res: Response) => {
    res.sendFile('index.html');
})

// Listen!
const PORT: string = process.env.PORT || '3000';
app.listen(PORT, (): void => {
    console.log(`Server is listening on port ${PORT}`);
})