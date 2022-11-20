// import { useState } from "react";
// import { PDFDocument } from "pdf-lib";
import "./style.css";
import $ from "jquery";
// import pdfjsLib from "pdfjs-dist/build/pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import API from "../../utils/API";
export default function PdfPage() {
  const handleClick = () => {
    const inpFile = $("#inpFile");
    const formData = new FormData();

    // console.log(inpFile[0].files[0]);
    formData.append("pdfFile", inpFile[0].files[0]);

    
    API.pdfRead(formData)
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        return response.data;
      })
      .then((extractedText) => {
        $("#resultText").val(extractedText.trim());
      });
  };
  return (
    <>
      <div className="container">
        <div className="input-group mb-3" id="loadPdf">
          <input
            type="file"
            className="form-control"
            id="inpFile"
            accept=".pdf"
          />
          <button
            className="btn btn-warning"
            type="button"
            id="btnUpload"
            onClick={handleClick}
          >
            Upload
          </button>
        </div>
        <textarea id="resultText" defaultValue= "Text will appear here"></textarea>
      </div>
    </>
  );
}
