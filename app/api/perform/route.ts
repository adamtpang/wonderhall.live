// Express-interest endpoint for performers (Errors/Fixes #28: the door's always open).
// Forwards submissions to a Discord webhook so they land where the team already
// coordinates, no database. Set PERFORM_WEBHOOK_URL in the environment to enable
// delivery; without it, submissions are logged server-side and still accepted.

const LIMITS = { name: 120, contact: 200, act: 200, link: 300, message: 1000 } as const;

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: "invalid body" }, { status: 400 });
  }

  // Honeypot: real people never fill this. Pretend success, forward nothing.
  if (clean(body.website, 50)) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name, LIMITS.name);
  const contact = clean(body.contact, LIMITS.contact);
  const act = clean(body.act, LIMITS.act);
  const link = clean(body.link, LIMITS.link);
  const message = clean(body.message, LIMITS.message);

  if (!name || !contact || !act) {
    return Response.json({ ok: false, error: "missing fields" }, { status: 400 });
  }

  const webhook = process.env.PERFORM_WEBHOOK_URL;
  if (!webhook || !/^https:\/\//.test(webhook)) {
    // No webhook configured (e.g. local/preview); don't lose the submission.
    console.warn("[perform] PERFORM_WEBHOOK_URL unset; submission not delivered:", {
      name,
      contact,
      act,
      link,
      message,
    });
    return Response.json({ ok: true });
  }

  const fields = [
    { name: "Name", value: name },
    { name: "Contact", value: contact },
    { name: "Act", value: act },
    ...(link ? [{ name: "Link", value: link }] : []),
    ...(message ? [{ name: "Would play", value: message }] : []),
  ];

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Wonderhall",
        embeds: [{ title: "🎤 New performer interest", color: 0xf59e0b, fields }],
      }),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
  } catch (err) {
    console.error("[perform] webhook delivery failed:", err);
    return Response.json({ ok: false, error: "delivery failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
