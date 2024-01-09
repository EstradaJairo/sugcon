import DataContent from "@/public/jsons/join-community-data-content.json";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json(DataContent);
}
