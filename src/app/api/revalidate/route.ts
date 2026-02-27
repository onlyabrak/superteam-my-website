import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const token = process.env.REVALIDATION_TOKEN;

  if (token && authHeader !== `Bearer ${token}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const path = body.path as string | undefined;

    if (path) {
      revalidatePath(path);
    } else {
      // Revalidate all public pages
      revalidatePath("/");
      revalidatePath("/members");
    }

    return NextResponse.json({ revalidated: true, path: path ?? "all" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
