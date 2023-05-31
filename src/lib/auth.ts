import { SQLiteAuth } from "./implementations/auth";
import type { Auth } from "./Interfaces/auth";
export const auth: Auth = new SQLiteAuth();