import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Invalid payload' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio <onboarding@resend.dev>',
          to: ['danino.dev@gmail.com'],
          subject: `Nuevo mensaje de ${name}`,
          html: `
            <h2>Nuevo mensaje desde el portfolio</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message.replace(/\n/g, '<br/>')}</p>
          `,
        }),
      });

      if (!resp.ok) {
        const t = await resp.text();
        console.error('Resend error:', t);
        return NextResponse.json({ ok: false }, { status: 500 });
      }
    } else {
      // Mock: no hay API key, solo log
      console.log('[contact mock] =>', { name, email, message });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('contact route error:', e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
