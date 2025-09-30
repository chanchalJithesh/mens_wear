import { User } from "../models/User";
import { randomUUID } from "crypto";

const usersDB: User[] = [];

export class UserService {
  registerUser(input: Omit<User, "id">): User {
    const user = { id: randomUUID(), ...input };
    usersDB.push(user);
    return user;
  }

  getUserDetails(id: string): User | undefined {
    return usersDB.find(u => u.id === id);
  }

  getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
}
