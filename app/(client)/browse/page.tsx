"use client"
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

async function fetchPdfUrl(){
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

const PdfViewer = async () => {
  //const [numPages, setNumPages] = useState(null);
  //const [pageNumber, setPageNumber] = useState(1);
  const pageNumber = 3
  //const [pdfUrl, setPdfUrl] = useState('');
  const pdfUrl = await fetchPdfUrl()
/*
  useEffect(() => {
   
    fetchPdfUrl();
  }, []);
  */

  //const onDocumentLoadSuccess = ({ numPages }) => {
  //  setNumPages(numPages);
  //};

  //onLoadSuccess={onDocumentLoadSuccess}

  return (
    <div>
      <h1>PDF Viewer</h1>
      {pdfUrl && (
        <Document file={pdfUrl} >
          <Page pageNumber={pageNumber} />
        </Document>
      )}
      <p>
        Page {pageNumber} of {/*8numPages */}
      </p>
    </div>
  );
};

export default PdfViewer;
