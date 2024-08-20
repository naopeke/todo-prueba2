import z from "zod";

export type User = {
    user_id: number;
    username: string;
    email: string;
    password: string;
  };
  
export type Todo = {
    item_id: number;
    description: string;
    isDone: boolean;
    id_user?: number;
}

export type TodoListCollection = {
    collection_id: number;
    collection_name: string;
    id_user?: number;
    username?: string;
}

export type Route = {
    route_name: string;
    start: string;
    end: string;
    route_data: string;
    id_user?: number;
}

export type LatLong = {
    lat: number;
    lng: number;
}

export const FormSchema = z.object({
    email: z.string().email ({ message: 'Invalid email address'}),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'})
});

export type FormSchema = z.infer <typeof FormSchema>;