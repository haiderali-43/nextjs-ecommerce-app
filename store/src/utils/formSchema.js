import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(255),
});

export const SignupFormSchema = z.object({
  name: z.string().min(3).max(255, {
    message: "Name must be between 3 and 255 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6).max(255, {
    message: "Password must be between 6 and 255 characters",
  }),
});

