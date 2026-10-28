/**
 * PROVA Leads → Google Sheet
 *
 * SETUP
 * 1. Create a Google Sheet. Rename the first tab to "Leads".
 * 2. Put this header row in A1:P1:
 *    Submission ID | Submission Timestamp | Name as Submitted | Phone as Submitted | Email | Course Interest | Qualification | Preferred Location | Message | Consent Response | Form Source | Dream Selection | Processing Status | PROVA Lead ID | Processed At | Internal Notes
 * 3. Extensions → Apps Script → paste this file → Save.
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone   ← MUST be "Anyone" (not "Anyone with Google account")
 *      If you only see limited options, create a NEW deployment (not just a new version).
 * 5. Copy the Web app URL ending in /exec into .env:
 *    VITE_GOOGLE_SHEETS_WEBAPP_URL=https://script.google.com/macros/s/.../exec
 * 6. Quick test: open that /exec URL in a browser — you should see JSON like
 *    {"ok":true,"message":"PROVA lead endpoint is live..."}.
 *    If you get a login / 401 page, access is wrong — redeploy as Anyone.
 *
 * After changing this script, Deploy → Manage deployments → Edit → New version.
 */

var SHEET_NAME = 'Leads';

function doPost(e) {
  try {
    var data = parseRequest_(e);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    if (!sheet) {
      return json_({ ok: false, error: 'Sheet "' + SHEET_NAME + '" not found.' });
    }

    sheet.appendRow([
      data.submissionId || Utilities.getUuid(),
      data.createdAt || new Date().toISOString(),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.courseInterest || '',
      data.qualification || '',
      data.preferredLocation || '',
      data.message || '',
      data.consent === true || data.consent === 'true' ? 'Yes' : 'No',
      data.source || '',
      data.dreamSelection || '',
      'New',
      '',
      '',
      '',
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({
    ok: true,
    message: 'PROVA lead endpoint is live. Use POST from the website form.',
  });
}

function parseRequest_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Empty request body');
  }

  // Supports JSON body (text/plain or application/json)
  return JSON.parse(e.postData.contents);
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
