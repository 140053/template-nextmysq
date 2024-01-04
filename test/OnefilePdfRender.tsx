"use client"
import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import workerSrc from "@/lib/pdf-worker";
import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface Thesis {
  thesis: {
    title: string;
    glinkView: string;
    // Add other properties as needed
  };
  // Add other properties as needed
}

const BrowsePage = () => {
  const [thesis, setThesis] = useState<Thesis | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  //const [pageNum, setNumPages ] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/thesis/1046");
        const data: Thesis = await response.json();
        setThesis(data);
        
        const fileId = '14dKIQ361jZHVQWlTGFUnVGQGPawWwg8h';
        const apiKey = 'AIzaSyAWJqO2lq0CdnT0SV1NCvOvpY_GlTCy0ag';
        const pdfResponse = await axios.get(
          `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`,
          { responseType: 'blob' }
        );

        const blob = new Blob([pdfResponse.data], { type: 'application/pdf' });
        const objectUrl = URL.createObjectURL(blob);
        setPdfUrl(objectUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    

    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once
  
  //function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    //setNumPages(nextNumPages);
  //}
 
  return (
    <>
      <p>Thesis</p>
      {thesis && (
        <>
          <p>Title {thesis.thesis.title}</p>
          <p>{thesis.thesis.glinkView}</p>
        </>
      )}
      {pdfUrl && (
        <Document file={pdfUrl} >
          <Page pageNumber={2}
           renderAnnotationLayer={false}
           renderTextLayer={false} />
        </Document>
      )}
    </>
  );
}

export default BrowsePage;
