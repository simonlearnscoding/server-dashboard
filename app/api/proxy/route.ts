"use server";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(request: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.redirect("/sign-in");

  const { searchParams } = new URL(request.url);
  const service = searchParams.get("service");

  const validServices = {
    syncthing: {
      url: "http://localhost:8384",
      path: "",
    },
    plex: {
      url: "http://localhost:32400",
      path: "/web",
    },
  };

  if (!service || !validServices[service as keyof typeof validServices]) {
    return new Response("Invalid service", { status: 400 });
  }

  const serviceConfig = validServices[service as keyof typeof validServices];
  return NextResponse.redirect(`${serviceConfig.url}${serviceConfig.path}`);
}
