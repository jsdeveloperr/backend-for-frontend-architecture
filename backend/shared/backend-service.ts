import express, { Request, Response } from 'express';
import cors from 'cors';
import { Product, User } from './types/types';
import { generateToken } from './utility/jwt-utils';
import db from '../_data/db.json';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products: Product[] = [
    { id: 1, name: 'Laptop', isFeatured: true, category: 'Electronics' },
    { id: 2, name: 'Headphones', isFeatured: true, category: 'Electronics' },
    { id: 3, name: 'Book', isFeatured: false, category: 'Books' },
];

const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password1'  },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'password1'  },
];

app.post('/login', (req: Request, res: any) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken({ id: user.id, email: user.email });
    res.json({ token });
});

// Routes
app.get('/products', (req: Request, res: Response<Product[] | { message: string }>) => {
    try {
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
});

app.get('/users', (req: Request, res: Response<User[] | { message: string }>) => {
    try {
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
});

app.get('/recipes', (req: Request, res: Response) => {
    res.status(200).json(db.recipes);
  });
  
app.get('/recipes/:id', (req: Request, res: Response) => {
    const recipeId = parseInt(req.params.id, 10);
    const recipe = db.recipes.find((r: any) => r.id === recipeId);
    if (recipe) {
        res.status(200).json(recipe);
    } else {
        res.status(404).json({ message: 'Recipe not found' });
    }
});

app.get('/', (req, res) => {
    res.send({
        message: 'Shared service is running',
        routes: [
            { method: 'POST', path: '/login', description: 'Login endpoint' },
            { method: 'GET', path: '/products', description: 'Fetch all products' },
            { method: 'GET', path: '/users', description: 'Fetch all users' },
            { method: 'GET', path: '/recipes', description: 'Fetch all recipes' },
            { method: 'GET', path: '/recipes/:id', description: 'Fetch recipes id' },
        ],
    });
});



app.listen(PORT, () => console.log(`Backend service running on port ${PORT}`));
