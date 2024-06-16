import express, { application } from 'express'
import connection from './config/dbConfig.js';
import taskRoutes from './routes/taskRoutes.js'
import path from 'path';
import fs from 'fs';
import swaggerUi from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { config } from "dotenv";
config()
connection();

const port = process.env.PORT || 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load Swagger JSON
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, 'swagger.json'), 'utf8'));

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())
app.use(cors())
app.use('/api', taskRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});