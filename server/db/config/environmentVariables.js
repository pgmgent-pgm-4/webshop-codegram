import dotenv from 'dotenv';
dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const HOSTNAME = process.env.HOSTNAME || 'localhost';
export const PORT = process.env.PORT || 8080; // Port >= 0 and < 65536
