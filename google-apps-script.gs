const SPREADSHEET_ID = "1fLdKR_7G7SDYO63MOS-i9LtqDsBDtqSYnPedJS1iOOg";
const SHEET_NAME = "축의금DB";

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const data = JSON.parse(e.postData.contents || "{}");

  sheet.appendRow([
    new Date(),
    data.envelope || "",
    data.name || "",
    Number(data.amount || 0),
    Number(data.tickets || 0),
    data.note || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const values = sheet.getDataRange().getValues();
  const rows = values.slice(1).map((row) => ({
    timestamp: row[0],
    envelope: row[1],
    name: row[2],
    amount: row[3],
    tickets: row[4],
    note: row[5]
  }));

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, rows }))
    .setMimeType(ContentService.MimeType.JSON);
}
