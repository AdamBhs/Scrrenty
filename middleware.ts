import { auth } from "@/lib/auth";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import aj from "./lib/arcjet";
import { createMiddleware, detectBot, shield } from "@arcjet/next";

export async function middleware(request: NextRequest, response: NextResponse) {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("better-auth.session_token");

  if (!sessionToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

const validate = aj.withRule(shield({ mode: "LIVE" })).withRule(
  detectBot({
    mode: "LIVE",
    allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"],
  })
);
// Run the validate include the shield and detecting bad bots
export default createMiddleware(validate);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};
