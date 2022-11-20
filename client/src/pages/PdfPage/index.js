import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import "./style.css";


export default function Home() {
  const [pdfFileData, setPdfFileData] = useState();

  function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  function renderPdf(uint8array) {
    const tempblob = new Blob([uint8array], {
      type: "application/pdf",
    });
    const docUrl = URL.createObjectURL(tempblob);
    setPdfFileData(docUrl);
  }

  function range(start, end) {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i - 1);
  }

  async function extractPdfPage(arrayBuff) {
    const pdfSrcDoc = await PDFDocument.load(arrayBuff);
    const pdfNewDoc = await PDFDocument.create();
    const pages = await pdfNewDoc.copyPages(pdfSrcDoc, range(1, 5));
    pages.forEach((page) => pdfNewDoc.addPage(page));
    const newpdf = await pdfNewDoc.save();
    return newpdf;
  }

  // Execute when user select a file
  const onFileSelected = async (e) => {
    const fileList = e.target.files;
    if (fileList?.length > 0) {
      const pdfArrayBuffer = await readFileAsync(fileList[0]);
      const newPdfDoc = await extractPdfPage(pdfArrayBuffer);
      renderPdf(newPdfDoc);
    }
  };

  return (
    <>
      <div className="container">
        <div className="input-group mb-3" id="loadPdf">
          <button
            className="btn btn-warning"
            type="button"
            id="inputGroupFileAddon03"
          >
            Button
          </button> 
          <input
            type="file"
            className="form-control"
            id="inputGroupFile03"
            accept=".pdf"
            aria-describedby="inputGroupFileAddon03"
            aria-label="Upload"
            onChange={onFileSelected}
          />
        </div>

        {/* <input
          type="file"
          id="file-selector"
          accept=".pdf"
          onChange={onFileSelected}
        /> */}
        <iframe
          style={{ display: "block", width: "100vw", height: "90vh" }}
          title="PdfFrame"
          src={pdfFileData}
          frameBorder="0"
          type="application/pdf"
        ></iframe>
      </div>
    </>
  );
}
