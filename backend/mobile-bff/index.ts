import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';
import { authenticateToken } from './middleware/auth-middleware';

const app = express();
const PORT = 3001;
const BACKEND_URL = 'http://localhost:5000';

app.use(cors());
app.use(express.json());

app.get('/products/featured', authenticateToken, async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/products`);
        const featuredProducts = response.data.filter((product: any) => product.isFeatured);
        res.json(featuredProducts);
    } catch (error) {
        res.status(500).send('Error fetching featured products');
    }
});

app.get('/categories', async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/products`);
        const categories = [...new Set(response.data.map((product: any) => product.category))];
        res.json(categories);
    } catch (error) {
        res.status(500).send('Error fetching categories');
    }
});

app.get('/', (req, res) => {
    res.send({ message: 'Mobile BFF is running' });
});

app.listen(PORT, () => console.log(`Mobile BFF running on port ${PORT}`));
