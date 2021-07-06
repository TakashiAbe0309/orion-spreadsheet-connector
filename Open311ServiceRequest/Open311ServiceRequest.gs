function onEditIssues() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Open311ServiceRequest');
  var lastRow = sheet.getLastRow();
  var requestId = "service-request" + lastRow;
  sheet.getRange(lastRow, 1).setValue(requestId);
  var location = sheet.getRange(lastRow, 16).getValue();
  var splitRow = location.indexOf(',');
  var entity = {
    "id":                 requestId,
    "type":               "Open311ServiceRequest",
    "address":            {"type": "Text",      "value": sheet.getRange(lastRow, 2).getValue()},
    "agency_responsible": {"type": "Text",      "value": sheet.getRange(lastRow, 3).getValue()},
    "alternateName":      {"type": "Text",      "value": sheet.getRange(lastRow, 4).getValue()},
    "areaServed":         {"type": "Text",      "value": sheet.getRange(lastRow, 5).getValue()},
    "dataProvider":       {"type": "Text",      "value": sheet.getRange(lastRow, 6).getValue()},
    "dateCreated":        {"type": "DateTime",  "value": sheet.getRange(lastRow, 7).getValue()},
    "dateModified":       {"type": "DateTime",  "value": sheet.getRange(lastRow, 8).getValue()},
    "description":        {"type": "Text",      "value": sheet.getRange(lastRow, 9).getValue()},
    "device_id":          {"type": "Text",      "value": sheet.getRange(lastRow, 10).getValue()},
    "email":              {"type": "Text",      "value": sheet.getRange(lastRow, 11).getValue()},
    "expected_datetime":  {"type": "DateTime",  "value": sheet.getRange(lastRow, 12).getValue()},
    "first_name":         {"type": "Text",      "value": sheet.getRange(lastRow, 13).getValue()},
    "jurisdiction_id":    {"type": "Text",      "value": sheet.getRange(lastRow, 14).getValue()},
    "last_name":          {"type": "Text",      "value": sheet.getRange(lastRow, 15).getValue()},
    "location":           {"type": "Point",     "value": [Number(location.slice(0, splitRow)),
                                                          Number(location.slice(splitRow + 1))]},
    "media_url":          {"type": "URL",       "value": sheet.getRange(lastRow, 17).getValue()},
    "name":               {"type": "Text",      "value": sheet.getRange(lastRow, 18).getValue()},
    "phone":              {"type": "Text",      "value": sheet.getRange(lastRow, 19).getValue()},
    "requested_datetime": {"type": "DateTime",  "value": sheet.getRange(lastRow, 20).getValue()},
    "seeAlso":            {"type": "Text",      "value": sheet.getRange(lastRow, 21).getValue()},
    "service_code":       {"type": "Text",      "value": sheet.getRange(lastRow, 22).getValue()},
    "service_name":       {"type": "Text",      "value": sheet.getRange(lastRow, 23).getValue()},
    "service_notice":     {"type": "Text",      "value": sheet.getRange(lastRow, 24).getValue()},
    "service_request_id": {"type": "Text",      "value": sheet.getRange(lastRow, 25).getValue()},
    "source":             {"type": "Text",      "value": sheet.getRange(lastRow, 26).getValue()},
    "status":             {"type": "Text",      "value": sheet.getRange(lastRow, 27).getValue()},
    "status_notes":       {"type": "Text",      "value": sheet.getRange(lastRow, 28).getValue()},
    "updated_datetime":   {"type": "DateTime",  "value": sheet.getRange(lastRow, 29).getValue()}
  }
  var credential = {Authorization: "Bearer <Your-Token>"}
  var client = NGSI.Client("<Orion-URL>", credential);
  client.createEntity(entity, "<Fiware-Service>", "<Fiware-ServicePath>");
}
