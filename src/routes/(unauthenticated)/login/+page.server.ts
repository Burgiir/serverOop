import { error, fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { database } from "$lib/database";
import * as crypto from "crypto"
import {auth} from "$lib/auth";

export const actions: Actions = {
  login: async ({ request, locals, cookies }) => {
    const form = await request.formData();
    const herbaberb = await auth.login(form)

    if (herbaberb.error){
      return fail(herbaberb.error.code, herbaberb.error.data)
    }
    
    // const username = form.get("username")?.toString();
    // const password = form.get("password")?.toString();

    // // TODO: Implement login
    // // Check if password and username
    // // exists and is correct

    // if (!username) {
    //   return fail(400, { username: "username missing" });
    // }

    // if (!password) {
    //   return fail(400, { password: "password missing" });
    // }

    // try {
    //   const result = await database.users.findFirst({
    //     where: { username },
    //   });

    //   console.log(result)

    //   if (!result) {
    //     return fail(400, {
    //       user: "wrong username or password",
    //     });
    //   }

    //   const {salt, hash} = result;

    //   const newhash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

    //   if (newhash!=hash) {
    //     return fail(400, {
    //       user: "wrong username or password",
    //     });
    //   }

    //   const session = crypto.randomUUID();

    //   cookies.set("session", update.session, {
    //     path: "/",
    //     httpOnly: true, // optional for now
    //     sameSite: "strict", // optional for now
    //     secure: process.env.NODE_ENV === "production", // optional for now
    //     maxAge: 1000, //
    //   });
    // } catch (e) {
    //   console.log(e)
    //   return fail(400, { server: "database connection error" });
    // }
    cookies.set("session", herbaberb.success?.user.session, {
      path: "/",
      httpOnly: true, // optional for now
      sameSite: "strict", // optional for now
      secure: process.env.NODE_ENV === "production", // optional for now
      maxAge: 1000, //
    });

    throw redirect(302, "/");
  },
};
