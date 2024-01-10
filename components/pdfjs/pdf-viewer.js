"use client"
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "@/lib/pdf-worker";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from 'axios';
import Head from 'next/head';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer({ fileID }) {

  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(1);
  const [numTPages, setNumTPages] = useState(0);
  const [loading, setLoading] = useState(true);
  //console.log(fileID)

  useEffect(() => {
    async function initializePdf() {
      try {
        const pdfUrl = await fetchPdfUrl(fileID);
        setFile(pdfUrl);
      } catch (error) {
        console.error('Error initializing PDF:', error);
      } finally {
        setLoading(false);
      }
    }
    initializePdf();
  }, []);

  async function fetchPdfUrl(fileID) {
    try {
      const fileId = fileID //'14dKIQ361jZHVQWlTGFUnVGQGPawWwg8h';
      const apiKey = 'AIzaSyAWJqO2lq0CdnT0SV1NCvOvpY_GlTCy0ag';

      const response = await axios.get(
        `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`,
        { responseType: 'blob' }
      );

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const objectUrl = URL.createObjectURL(blob);
      //console.log(objectUrl);
      return objectUrl;
    } catch (error) {
      console.error('Error fetching PDF:', error);
      throw error;
    }
  }

  function NextPage(){
    
    if(numTPages > numPages){
      setNumPages(numPages + 1)
    }
    
  }
  function PrevPage(){
    

    if(numPages > 1){
      setNumPages(numPages - 1)
    }
    
  }
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1024px)' });

  const getWidth = () => {
    if (isSmallScreen) {
      return 100;
    } else if (isMediumScreen) {
      return 400; // Adjust as needed
    } else {
      return 900; // Adjust as needed
    }
  };
  



  function onDocumentLoadSuccess({ numPages: nextNumPages }) {    
    setNumTPages(nextNumPages);
    
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
      <div className="container ">
        <div className="">
          {loading && <p>Loading...</p>}
          {!loading && (
            <div className="">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Button variant="default" className="w-full" onClick={() => {PrevPage()}} >Previous</Button>
                <Input type="text" value={numPages} className="text-center" />
                <Input type="text" value="of" className="text-center"/>
                <Input type="text" value={numTPages} className="text-center" />
                <Button variant="default" className="w-full" onClick={() => {NextPage()}} >Next</Button>
              </div>
              <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className="justify-center md:w-900 lg:w-900 sm:w-400">
                <Page
                  className="flex justify-center overflow-hidden md:w-900 lg:w-900 sm:w-400 border border-sky-500 mt-4"
                  pageNumber={numPages}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={getWidth()}
                />
                {/*Array.from({ length: numPages }, (_, index) => (
                <Page
                  className="flex justify-center overflow-hidden md:w-900 lg:w-900 sm:w-400 border border-sky-500 mt-4"
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={900}
                />
                ))*/}
              </Document>
            </div>
          )}
        </div>
      </div>
    </>
  );
}