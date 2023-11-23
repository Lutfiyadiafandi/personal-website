import { NextRequest, NextResponse } from "next/server";
import Mantra from "@/common/data/Mantra.json";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const selectedMantra = Mantra.find((item) => item.id === Number(id));
    return NextResponse.json({
      status: 200,
      message: "Success",
      data: selectedMantra,
    });
  }
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: Mantra,
  });
}
