import { z } from 'zod';

export const UserRole = {
  ADMIN: 'admin',
  USER: 'user',
  EDITOR: 'editor',
} as const;

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum([UserRole.ADMIN, UserRole.USER, UserRole.EDITOR]),
  createdAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;