import DataContent from "@/public/jsons/navbar-data-content.json";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json(DataContent);
}
