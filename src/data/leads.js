/**
 * Lead payload shape for Google Sheet / future CRM integration.
 *
 * {
 *   name,
 *   phone,
 *   email?,
 *   qualification?,
 *   courseInterest,
 *   preferredLocation?,
 *   message?,
 *   consent,
 *   source?,
 *   dreamSelection?
 * }
 */

export function buildLeadPayload(values, meta = {}) {
  return {
    name: values.name.trim(),
    phone: values.phone.replace(/\s/g, ''),
    email: values.email?.trim() || '',
    qualification: values.qualification || '',
    courseInterest: values.courseInterest,
    preferredLocation: values.preferredLocation || '',
    message: values.message?.trim() || '',
    consent: Boolean(values.consent),
    source: meta.source || 'website',
    dreamSelection: meta.dreamSelection || '',
    createdAt: new Date().toISOString(),
  };
}

/**
 * Posts a lead to the Google Apps Script Web App that appends a Sheet row.
 *
 * Uses text/plain + no-cors because Apps Script redirects and does not expose
 * CORS headers reliably to localhost / browser apps. With a correct "Anyone"
 * deployment, the row is still written even though the response is opaque.
 */
export async function submitLeadToGoogleSheet(lead) {
  const endpoint = import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL?.trim();

  if (!endpoint) {
    throw new Error(
      'Missing VITE_GOOGLE_SHEETS_WEBAPP_URL. Create a .env file (not .env.example) and restart npm run dev.'
    );
  }

  if (!endpoint.includes('script.google.com') || !endpoint.endsWith('/exec')) {
    throw new Error(
      'Use the Apps Script Web app URL ending in /exec (not the Google Sheet share link).'
    );
  }

  try {
    await fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(lead),
    });
  } catch {
    throw new Error(
      'Could not reach Google Sheets. Redeploy the Apps Script as Web app with access set to Anyone, then update .env and restart.'
    );
  }

  // Opaque response — browser cannot read status. Verify a new row appears in the sheet.
  return { ok: true };
}

export function buildWhatsAppMessage(lead) {
  const lines = [
    'Hi PROVA, I would like free counselling.',
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Course interest: ${lead.courseInterest}`,
  ];

  if (lead.qualification) lines.push(`Qualification: ${lead.qualification}`);
  if (lead.preferredLocation) lines.push(`Preferred location: ${lead.preferredLocation}`);
  if (lead.email) lines.push(`Email: ${lead.email}`);
  if (lead.message) lines.push(`Message: ${lead.message}`);

  return lines.join('\n');
}

export function getWhatsAppUrl(whatsappNumber, message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encoded}`;
}
