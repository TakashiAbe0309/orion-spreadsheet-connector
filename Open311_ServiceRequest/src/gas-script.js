function onEditIssues() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Issues');
  var lastRow = sheet.getLastRow();
  var idName = "service-request" + lastRow;
  sheet.getRange(lastRow, 1).setValue(idName);
  var id = sheet.getRange(lastRow, 1).getValue();
  var service_name = sheet.getRange(lastRow, 2).getValue();
  var description = sheet.getRange(lastRow, 3).getValue();
  var location = sheet.getRange(lastRow, 4).getValue();
  var media_url = sheet.getRange(lastRow, 5).getValue();
  var service_code = sheet.getRange(lastRow, 7);
  var status = 'open';
  var requested_datetime = sheet.getRange(lastRow, 6);
  var splitRow = location.indexOf(',');
  var latitude = location.slice(0, splitRow);
  var longitude = location.slice(splitRow + 1)
  var postData = {
    "id": id,
    "type": "Open311ServiceRequest",
    "address": "",
    "agency_responsible": "",
    "alternateName": "",
    "areaServed": "",
    "dataProvider": "",
    "dateCreated": "",
    "dateModified": "",
    "description": description,
    "device_id": "",
    "email": "",
    "expected_datetime": "",
    "first_name": "",
    "jurisdiction_id": "",
    "last_name": "",
    "location": {
      "type": "Point",
      "value": [ Number(latitude), Number(longitude)]
    },
    "media_url": {
      "type": "URL",
      "value": media_url
    },
    "name": "",
    "phone": "",
    "requested_datetime": {
      "type": "DateTime",
      "value": requested_datetime
    },
    "seeAlso": "",
    "service_code": service_code,
    "service_name": service_name,
    "service_notice": "",
    "service_request_id": "",
    "source": "",
    "status": status,
    "status_notes": "",
    "updated_datetime": {
      "type": "DateTime",
      "value": ""
    }
  }
  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(postData),
  };
  UrlFetchApp.fetch("<fiware-url>/orion/v2.0/entities?options=keyValues", options);
}
