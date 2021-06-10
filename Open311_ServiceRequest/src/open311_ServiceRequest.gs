function onEditIssues() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Open311ServiceRequest');
  var lastRow = sheet.getLastRow();
  var idName = "service-request" + lastRow;
  sheet.getRange(lastRow, 1).setValue(idName);
  sheet.getRange(lastRow, 1).setValue(idName);
  var id = sheet.getRange(lastRow, 1).getValue();
  var description = sheet.getRange(lastRow, 2).getValue();
  var location = sheet.getRange(lastRow, 3).getValue();
  var splitRow = location.indexOf(',');
  var latitude = location.slice(0, splitRow);
  var longitude = location.slice(splitRow + 1)
  var name = sheet.getRange(lastRow, 4);
  var mediaUrl = sheet.getRange(lastRow, 5).getValue();
  var serviceCode = sheet.getRange(lastRow, 6);
  var serviceName = sheet.getRange(lastRow, 7).getValue();
  var status = 'open';
  var requestedDatetime = sheet.getRange(lastRow, 9);
  var address = sheet.getRange(lastRow, 10);
  var agencyResPonsible = sheet.getRange(lastRow, 11);
  var alternateName = sheet.getRange(lastRow, 12);
  var areaServed = sheet.getRange(lastRow, 13);
  var dataProvider = sheet.getRange(lastRow, 14);
  var dateCreated = sheet.getRange(lastRow, 15);
  var dateModified = sheet.getRange(lastRow, 16);
  var deviceId = sheet.getRange(lastRow, 17);
  var email = sheet.getRange(lastRow, 18);
  var expectedDatetime = sheet.getRange(lastRow, 19);
  var firstName = sheet.getRange(lastRow, 20);
  var jurisdicrionId = sheet.getRange(lastRow, 21);
  var lastName = sheet.getRange(lastRow, 22);
  var owner = sheet.getRange(lastRow, 23);
  var phone = sheet.getRange(lastRow, 24);
  var seeAlso = sheet.getRange(lastRow, 25);
  var serviceNotice = sheet.getRange(lastRow, 26);
  var serviceRequestedId = sheet.getRange(lastRow, 27);
  var source = sheet.getRange(lastRow, 28);
  var statusNotes = sheet.getRange(lastRow, 29);
  var updateDatetime = sheet.getRange(lastRow, 30);
  var postData = {
    "id": id,
    "type": "Open311ServiceRequest",
    "address": address,
    "agency_responsible": agencyResPonsible,
    "alternateName": alternateName,
    "areaServed": areaServed,
    "dataProvider": dataProvider,
    "dateCreated": dateCreated,
    "dateModified": dateModified,
    "description": description,
    "device_id": deviceId,
    "email": email,
    "expected_datetime": expectedDatetime,
    "first_name": firstName,
    "jurisdiction_id": jurisdicrionId,
    "last_name": lastName,
    "location": {
      "type": "Point",
      "value": [ Number(latitude), Number(longitude)]
    },
    "media_url": {
      "type": "URL",
      "value": mediaUrl
    },
    "name": name,
    "phone": phone,
    "requested_datetime": {
      "type": "DateTime",
      "value": requestedDatetime
    },
    "seeAlso": seeAlso,
    "service_code": serviceCode,
    "service_name": serviceName,
    "service_notice": serviceNotice,
    "service_request_id": serviceRequestedId,
    "source": source,
    "status": status,
    "status_notes": statusNotes,
    "updated_datetime": {
      "type": "DateTime",
      "value": updateDatetime
    }
  }
  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(postData),
  };
  UrlFetchApp.fetch("https://<orion-host>:1026/v2/entities?options=keyValues", options);
}
