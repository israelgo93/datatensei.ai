export async function GET() {
  return Response.json({
    ok: true,
    service: "datatensei-ai",
    timestamp: new Date().toISOString(),
  });
}
