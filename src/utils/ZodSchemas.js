// validationSchema.js
import { z } from 'zod';

export const signup = z.object({
  username: z.string().min(4, { message: "Name has to have at least 4 letters" }),
  email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
  password: z.string().min(4, { message: "Password has to have at least 4 letters" }),
});
  
  export const login = z.object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    password: z.string()
  });
