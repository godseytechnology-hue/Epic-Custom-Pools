/**
 * ROUTING NOTE: In the deployed Replit monorepo, this route is NEVER reached.
 * The application router (artifacts/api-server/.replit-artifact/artifact.toml,
 * `paths = ["/api"]`) forwards ALL /api/* requests to the Express api-server
 * (port 8080) before they reach Next.js (port 19724).
 *
 * This file is kept for local Next.js standalone dev parity only.
 * The live handler lives in artifacts/api-server/src/routes/contact.ts.
 */
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  let body: Record<string, string>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const {
    name,
    email,
    phone,
    city,
    poolType,
    message,
    source,
    position,
    companyName,
    contactName,
    projectCount,
  } = body;

  if (!name?.trim() || !phone?.trim() || !city?.trim()) {
    return NextResponse.json(
      { error: 'Name, phone number, and city are required.' },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contractorEmail = process.env.CONTRACTOR_EMAIL;

  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return NextResponse.json(
      { error: 'Server configuration error — please contact us directly.' },
      { status: 500 }
    );
  }

  if (!contractorEmail) {
    console.error('[contact] CONTRACTOR_EMAIL is not set');
    return NextResponse.json(
      { error: 'Server configuration error — please contact us directly.' },
      { status: 500 }
    );
  }

  const isB2B = source === 'home-builders-page';
  const resend = new Resend(apiKey);
  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
  const pageUrl = req.headers.get('referer') || 'https://epiccustompools.com';

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family:sans-serif;color:#1a1a1a;max-width:600px;margin:auto;padding:24px;">
  <div style="background:#080e06;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h1 style="color:#4cd137;font-size:20px;margin:0;">${isB2B ? 'New Builder Inquiry' : 'New Lead'} — Epic Custom Pools</h1>
  </div>
  <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:24px;">
    <table style="width:100%;border-collapse:collapse;">
      ${companyName?.trim() ? `<tr><td style="padding:8px 0;color:#666;width:140px;vertical-align:top;font-size:14px;">Company</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(companyName)}</td></tr>` : ''}
      <tr><td style="padding:8px 0;color:#666;width:140px;vertical-align:top;font-size:14px;">${isB2B ? 'Contact Name' : 'Name'}</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(isB2B ? (contactName || name) : name)}</td></tr>
      ${email?.trim() ? `<tr><td style="padding:8px 0;color:#666;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#00b4d8;">${escapeHtml(email)}</a></td></tr>` : ''}
      <tr><td style="padding:8px 0;color:#666;font-size:14px;">Phone</td><td style="padding:8px 0;"><a href="tel:${escapeHtml(phone.replace(/\D/g, ''))}" style="color:#00b4d8;">${escapeHtml(phone)}</a></td></tr>
      <tr><td style="padding:8px 0;color:#666;font-size:14px;">City / Zip</td><td style="padding:8px 0;">${escapeHtml(city)}</td></tr>
      ${isB2B
        ? projectCount?.trim()
          ? `<tr><td style="padding:8px 0;color:#666;font-size:14px;">Projects / Year</td><td style="padding:8px 0;">${escapeHtml(projectCount)}</td></tr>`
          : ''
        : `<tr><td style="padding:8px 0;color:#666;font-size:14px;">Pool Interest</td><td style="padding:8px 0;">${escapeHtml(poolType || 'Not specified')}</td></tr>`
      }
      ${source?.trim() ? `<tr><td style="padding:8px 0;color:#666;font-size:14px;">Lead Source</td><td style="padding:8px 0;">${escapeHtml(source)}</td></tr>` : ''}
      ${position?.trim() ? `<tr><td style="padding:8px 0;color:#666;font-size:14px;">Form Position</td><td style="padding:8px 0;">${escapeHtml(position)}</td></tr>` : ''}
      ${!isB2B && message?.trim()
        ? `<tr><td style="padding:8px 0;color:#666;font-size:14px;vertical-align:top;">Message</td><td style="padding:8px 0;white-space:pre-wrap;">${escapeHtml(message)}</td></tr>`
        : ''
      }
    </table>
    <hr style="border:none;border-top:1px solid #e0e0e0;margin:20px 0;" />
    <p style="font-size:12px;color:#999;margin:0;">
      Submitted: ${submittedAt} (Central)<br />
      Source: ${escapeHtml(pageUrl)}
    </p>
  </div>
</body>
</html>
`;

  try {
    // ⚠️  BEFORE LAUNCH: Update the `from` address to a verified domain address
    // (e.g., 'Epic Custom Pools <hello@epiccustompools.com>') once DNS is verified
    // in Resend. Also confirm CONTRACTOR_EMAIL is set to the owner's real inbox
    // (currently reads from the CONTRACTOR_EMAIL environment secret).
    const { data, error: resendError } = await resend.emails.send({
      from: 'Epic Custom Pools <onboarding@resend.dev>',
      to: [contractorEmail],
      ...(email?.trim() ? { replyTo: email.trim() } : {}),
      subject: isB2B
        ? `New Builder Inquiry — Epic Custom Pools — ${companyName || name}`
        : `New Lead — Epic Custom Pools — ${name}`,
      html,
    });

    if (resendError) {
      console.error('[contact] Resend API error:', resendError);
      return NextResponse.json(
        { error: 'Failed to send. Please call us directly or try again.' },
        { status: 500 }
      );
    }

    console.log('[contact] Email sent, id:', data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Resend exception:', err);
    return NextResponse.json(
      { error: 'Failed to send. Please call us directly or try again.' },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
