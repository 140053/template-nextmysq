"use client"
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "@/lib/pdf-worker";
import axios from 'axios';
import Head from 'next/head';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initializePdf() {
      try {
        const pdfUrl = await fetchPdfUrl();
        setFile(pdfUrl);
      } catch (error) {
        console.error('Error initializing PDF:', error);
      } finally {
        setLoading(false);
      }
    }
    initializePdf();
  }, []);

  async function fetchPdfUrl() {
    try {
      const fileId = '14dKIQ361jZHVQWlTGFUnVGQGPawWwg8h';
      const apiKey = 'AIzaSyAWJqO2lq0CdnT0SV1NCvOvpY_GlTCy0ag';

      const response = await axios.get(
        `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`,
        { responseType: 'blob' }
      );

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const objectUrl = URL.createObjectURL(blob);
      console.log(objectUrl);
      return objectUrl;
    } catch (error) {
      console.error('Error fetching PDF:', error);
      throw error;
    }
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
       
        {loading && <p>Loading...</p>}
        {!loading && (
          <div className="text-center">
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className="justify-center md:w-900 lg:w-900 sm:w-400">
              {Array.from({ length: numPages }, (_, index) => (
                <Page
                  className="flex justify-center overflow-hidden md:w-900 lg:w-900 sm:w-400 border border-sky-500"
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={900}
                />
              ))}
            </Document>
          </div>
        )}
      </div>
    </>
  );
}
