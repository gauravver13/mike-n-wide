import { prisma } from '@/lib/db';
import { hashPassword } from '@/lib/utils';
import { NextResponse } from 'next/server';
import { z } from 'zod';


export interface SignupResponse {
    message: string;
    user: {
      id: number;
      email: string;
      name: string;
      createdAt: Date;
    };
  }
  
  export interface SignupError {
    error: string;
    details?: Array<{
      code: string;
      message: string;
      path: string[];
    }>;
  }

  

// Input validation schema
const signupSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export async function POST(req: Request) {
  try {
    // Parse and validate request body
    const body = await req.json();
    const result = signupSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.errors },
        { status: 400 }
      );
    }

    const { email, password, name } = result.data;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ 
      where: { email } 
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' }, 
        { status: 409 }
      );
    }

    // Hash password and create user
    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        provider: 'credentials'
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true
      }
    });

    return NextResponse.json({
      message: 'User created successfully',
      user
    }, { status: 201 });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
