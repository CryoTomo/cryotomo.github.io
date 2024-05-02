function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}
 

function getData(){
  var spreadSheetId = "1FqyjpINlvZFEr8h8Hlb1WVR0goPcp41EFDPWm7POrjA";    //REPLACE WITH YOUR ID
  //var dataRange     = "MicroscopeStatus!A2:C";
  var dataRange     = "MicroscopeStatus!A2:D";
 
  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values  = range.values;
  console.log(values)
  return values;
}


//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
