/**
 * HATCH CARDS - GOOGLE SHEETS WAITLIST INTEGRATION
 * 
 * INSTRUCTIONS:
 * 1. Go to Google Sheets, create a new spreadsheet named "Hatch Cards Waitlist".
 * 2. In the top menu, click Extensions -> Apps Script.
 * 3. Delete any code there and paste this entire file.
 * 4. Click Save.
 * 5. Click "Deploy" (top right) -> "New deployment".
 * 6. Select type "Web app".
 * 7. Set "Execute as" to "Me".
 * 8. Set "Who has access" to "Anyone".
 * 9. Click Deploy (Approve any Google permissions warnings).
 * 10. Copy the Web App URL and paste it into your Hero.tsx fetch string!
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Email', 'Name', 'Main Use Case', 'Platform', 'Country']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    }
    
    // Append the new lead
    sheet.appendRow([
      new Date(),
      data.email || '',
      data.name || '',
      data.useCase || '',
      data.platform || '',
      data.country || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS Preflight requests
function doOptions(e) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
}
