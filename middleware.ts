// middleware.ts
import {
  clerkClient,
  clerkMiddleware,
  currentUser,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// 1. Define public routes (including Clerk's auth pages and your unauthorized page)
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

// 2. Configure allowed emails (modify with your approved list)
const ALLOWED_EMAILS = ["simon.muscas@gmail.com", "user@yourcompany.com"];

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    // 3. Protect the route - will auto-redirect to sign-in if not authenticated
    await auth.protect();
    const { userId } = await auth();
    const client = await clerkClient();
    const user = await client.users.getUser(userId as string);
    const userMails = user.emailAddresses.map((email) => email.emailAddress);
    // 4. Check if user email is allowed
    if (!userMails.some((email) => ALLOWED_EMAILS.includes(email))) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
