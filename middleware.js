import { NextResponse } from "next/server";

const MAP = {
  IN: "in",
  AE: "uae", // UAE
};

export function middleware(req) {
  const { nextUrl, geo } = req;

  // Only redirect homepage "/"
  if (nextUrl.pathname === "/") {
    const countryCode = geo?.country || "IN"; // fallback India
    const country = MAP[countryCode] || "in";

    return NextResponse.redirect(`${nextUrl.origin}/${country}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // only homepage
};
