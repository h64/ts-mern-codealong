"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Required modules
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// Middleware and config
app.use(express_1.default.static(__dirname + '/../client/build/'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// Catch-all route - delivers React app
app.get('/*', (req, res) => {
    res.sendFile('index.html');
});
// Listen!
const PORT = process.env.PORT || '3000';
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
