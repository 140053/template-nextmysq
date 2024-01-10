"use client"
import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "@/lib/pdf-worker";
import { Button } from "../ui/button";
import axios from 'axios';
import Head from 'next/head';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

async function fetchPdfUrl() {
  try {
    const fileId = '14dKIQ361jZHVQWlTGFUnVGQGPawWwg8h';
    const apiKey = 'AIzaSyAWJqO2lq0CdnT0SV1NCvOvpY_GlTCy0ag'; // Replace with your API key

    const response = await axios.get(
      `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`,
      { responseType: 'blob' }
    );

    const blob = new Blob([response.data], { type: 'application/pdf' });
    const objectUrl = URL.createObjectURL(blob);
    console.log(objectUrl)
    //setPdfUrl(objectUrl);
    return objectUrl;
  } catch (error) {
    console.error('Error fetching PDF:', error);
  }
};




export default function PDFViewer() {
  const [file, setFile] = useState("./sample.pdf");
  //const [file, setFile] = useState(pdfUrl);
  const [numPages, setNumPages] = useState(null);


  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  async function cPdf() {
    const pdfUrl = await fetchPdfUrl()
    console.log(pdfUrl)
    setFile(pdfUrl)
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <>
      <Head>
        <style>{`
          @media (max-width: 600px) {
            body {
              width: 100%;
            }
          }
          @media (min-width: 601px) {
            body {
              width: 80%;
            }
          }
          @media (min-width: 1024px) {
            body {
              width: 60%;
            }
          }
          /* Add more media queries and styles as needed */
        `}</style>
      </Head>
      <div className="">
        <div className=" text-center ">
          <label htmlFor="file">Load from file:</label>{" "}
          <input onChange={onFileChange} type="file" />
        </div>
        <Button variant="outline" onClick={cPdf} >Change</Button>
        <div className="text-center ">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className=" justify-center  md:w-900 lg:w-900 sm:w-400" >
            {Array.from({ length: numPages }, (_, index) => (
              <Page
                className="flex justify-center overflow-hidden md:w-900 lg:w-900 sm:w-400"
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </Document>
        </div>
      </div>
    </>

  );
}
