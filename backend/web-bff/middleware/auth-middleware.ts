import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../../shared/utility/jwt-utils';

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Token required' });
        return;
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        res.status(403).json({ message: 'Invalid or expired token' });
        return;
    }

    (req as any).user = decoded;
    next();
};
