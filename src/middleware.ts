import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  console.log("ty suka robisz cy nie????");
  const res = NextResponse.next();
  res.headers.set("Access-Control-Allow-Origin", "http://192.168.0.41:3000/");
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS"
  );
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}
