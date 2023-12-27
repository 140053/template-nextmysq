// lib/auth.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//import { getServerSession } from 'next-auth';

const secretKey = 'your-secret-key'; // Replace with a secure secret key

export async function hashPassword(password: string | Buffer) {
  return bcrypt.hash(password, 10);
}

export async function comparePasswords(inputPassword: string | Buffer, hashedPassword: string) {
  return bcrypt.compare(inputPassword, hashedPassword);
}

export function generateToken(payload: string | object | Buffer) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

export function verifyToken(token: string) {
  return jwt.verify(token, secretKey);
}


//const session = await getServerSession(authConfig);
 // if (!session) return redirect("/sign-in");
