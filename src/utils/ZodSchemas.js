// validationSchema.js
import { z } from 'zod';
import axios from 'axios';

const backend_URL = "http://localhost:8000";

export const signup = z.object({
    name: z.string().min(4, {message: "Name has to have at least 4 letters"}),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email.")
      .refine(async (e) => {
        return await !checkIfEmailExists(e);
      }, "Already a user with this email"),
    password: z.string().min(4, {message: "Password has to have at least 4 letters"}),
  });

export const login = z.object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email.")
      .refine(async (e) => {
        return await checkIfEmailExists(e);
      }, "No user found with matching email")
  });

const checkIfEmailExists = async (email) =>{
        const promise = axios.post(
          `${backend_URL}/api/email`,
          email
        );
        await promise;
}