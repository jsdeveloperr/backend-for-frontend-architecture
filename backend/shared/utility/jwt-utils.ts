import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET_KEY = 'supersecretkey';

export const generateToken = (payload: object): string => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token: string): JwtPayload | null => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        if (typeof decoded === 'object' && decoded !== null) {
            return decoded as JwtPayload;
        }
        return null;
    } catch (error) {
        return null;
    }
};
