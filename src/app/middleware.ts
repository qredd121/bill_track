import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const res = NextResponse.next();
  res.headers.set("Access-Control-Allow-Origin", "http://192.168.1.100:3000");
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS"
  );
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}
