import { fail,redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import * as crypto from "crypto";
import {auth} from "$lib/auth";

let klicks = 0;

export const actions: Actions = {
  register: async ({ request, locals, cookies }) => {
    
      const form = await request.formData();
      const herbaberb = await auth.register(form)

      if (herbaberb.error){
        return fail(herbaberb.error.code, herbaberb.error.data)
      }
      

    
    // const username = form.get("username")?.toString();
    // const password = form.get("password")?.toString();


    // if (username && password) {
    //   let users = await database.users.findUnique({ where: { username } });

    //   if (!users) {
    //     const session = crypto.randomUUID();

    //     // Creating a unique salt for a particular user
    //     const salt = crypto.randomBytes(16).toString('hex');
    //     // Should be saved in the database along with the hash

    //     // Hash the salt and password with 1000 iterations, 64 length and sha512 digest 
    //     const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');


    //     const user = await database.users.create({
    //       data: { username, hash, salt, session },
    //     });

    //     database.clicker.create({ data: { clicks: 0, userId: user.id } })

    //     cookies.set("session", user.session, {
    //       path: "/",
    //       httpOnly: true, // optional for now
    //       sameSite: "strict", // optional for now
    //       secure: process.env.NODE_ENV === "production", // optional for now
    //       maxAge: 120, //
    //     });
    //     throw redirect(302, "/");
    //   }
    // }
    // // TODO: Implement register
    // // Check if ustername already exist etc.

    // return {
    //   error: "error",
    // };
    throw redirect(302, "/");
  }
};
