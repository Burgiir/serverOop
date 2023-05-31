import type {
    Auth,
    DeleteResult,
    Encrypter,
    LoginResult,
    RegisterResult,
    SignoutResult,
    UIDRandomizer,
  } from "$lib/Interfaces/auth";
  import { database } from "$lib/ssr";
import { redirect } from "@sveltejs/kit";
  import * as crypto from "crypto";
  
  export class AdvancedUIDRandomizer implements UIDRandomizer {
    generate_unique_id(): string {
      return crypto.randomUUID();
    }
  }
  
  export class AdvancedEncrypter implements Encrypter {
    hash(password: string, salt: string): string {
      return crypto
        .pbkdf2Sync(password, salt, 1000, 64, "sha512")
        .toString("hex");
    }
  }

  
  
  export class SQLiteAuth implements Auth {
    async register(form: FormData): Promise<RegisterResult> {
      const username = form.get("username")?.toString();
      const password = form.get("password")?.toString();
  
  
      if (username && password) {
        let users = await database.users.findUnique({ where: { username } });
  
        if (!users) {
          const session = crypto.randomUUID();
  
                  // Creating a unique salt for a particular user
          const salt = crypto.randomBytes(16).toString('hex'); 
          // Should be saved in the database along with the hash
  
          // Hash the salt and password with 1000 iterations, 64 length and sha512 digest 
          const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  
  
          const user = await database.users.create({
            data: { username, hash, salt, session },
          });
  
          database.clicker.create({data:{clicks:0,userId:user.id}})
          
          //cookies.set("session", user.session, {
           // path: "/",
           // httpOnly: true, // optional for now
           // sameSite: "strict", // optional for now
           // secure: process.env.NODE_ENV === "production", // optional for now
           // maxAge: 120, //
          //});
          throw redirect(302, "/");
        }
      }
      // TODO: Implement register
      // Check if ustername already exist etc.
  
      return {
        error: {code: 400, data: {}},
      };
    }

    async signout(username:string, request:any, cookies:any, locals:any): Promise<SignoutResult> {
      const form = await request.formData();

      // TODO: Implement register
      // Check if ustername already exist etc.
      cookies.delete("session");
      throw redirect(302, "/login");
    }
    delete(username: string): Promise<DeleteResult> {
      throw new Error("Method not implemented.");
    }
    randomizer: UIDRandomizer = new AdvancedUIDRandomizer();
    encrypter: Encrypter = new AdvancedEncrypter();
  
    async login(form: FormData): Promise<LoginResult> {
      const username = form.get("username")?.toString();
      const password = form.get("password")?.toString();
  
      if (!username) {
        return { error: { code: 400, data: { username: "username missing" } } };
      }
  
      if (!password) {
        return { error: { code: 400, data: { password: "password missing" } } };
      }
  
      try {
        const result = await database.users.findFirst({
          where: { username },
        });
  
        console.log(result);
  
        if (!result) {
          return {
            error: {
              code: 400,
              data: { user: "wrong credentials" },
            },
          };
        }
  
        const { salt, hash } = result;
  
        const newhash = this.encrypter.hash(password, salt);
  
        if (newhash != hash) {
          return {
            error: {
              code: 400,
              data: { user: "wrong credentials" },
            },
          };
        }
  
        const session = this.randomizer.generate_unique_id();
  
        const user = await database.users.update({
          where: { id: result.id },
          data: {
            session,
          },
        });
  
        return { success: { user: user } };
      } catch (e) {
        console.log(e);
        return {
          error: {
            code: 400,
            data: { server: "database connection error" },
          },
        };
      }
    }
  }
  