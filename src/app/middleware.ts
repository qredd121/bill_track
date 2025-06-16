import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  req.headers.set("Access-Control-Allow-Origin", "*");
  req.headers.set("Access-Control-Allow-Methods", "*");
  req.headers.set("Access-Control-Allow-Headers", "Content-Type");
}
