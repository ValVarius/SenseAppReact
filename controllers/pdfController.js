const pdfParse = require("pdf-parse");

module.exports = {
    read: function(req, res) {
        console.log("inside pdfcontroller");
  if (!req.files && !req.files.pdfFile) {
    res.status(400);
    res.end();
}

pdfParse(req.files.pdfFile).then(result => {
    res.send(result.text);
});
}

}
