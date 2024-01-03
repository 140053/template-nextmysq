"use client"
/*
import React, { useState, useEffect } from 'react';
//import { Worker, Viewer } from '@react-pdf-viewer/pdfjs-dist/entry.webpack';
//import '@react-pdf-viewer/core/lib/styles/index.css';
import axios from 'axios';

async function Urldecode(){
    try {
        const fileId = '1rBNRuHRfX15RmMp18P0Fv2104D3pnUgg';
        const apiKey = 'AIzaSyAWJqO2lq0CdnT0SV1NCvOvpY_GlTCy0ag'
        const response = await axios.get(
            `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`,
            { responseType: 'blob' }
          );

        const blob = new Blob([response.data], { type: 'application/pdf' });
        const objectUrl = URL.createObjectURL(blob);
        console.log(objectUrl)
        return objectUrl
        //setPdfUrl(objectUrl);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    
}

const PdfViewer = () => {
    const urll = Urldecode();

  return (
    <div>
      <h1>PDF Viewer</h1>
      
      {pdfUrl && (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${window.pdfjs.version}/build/pdf.worker.min.js`}>
          <Viewer file={pdfUrl} />
        </Worker>
      )}
    </div>
  );
};

export default PdfViewer;



*/
import PdfViewer from '@/components/customd/pdfjs';
import React from 'react';
import { Document, Page } from 'react-pdf'
//'react-pdf/dist/esm/entry.webpack';
import axios from 'axios';

async function getdata() {
    const response = await fetch("http://localhost:3000/api/thesis/1046");
    const data = await response.json()
    return data

}



async function Urldecode(){
    try {
        const fileId = '1rBNRuHRfX15RmMp18P0Fv2104D3pnUgg';
        const apiKey = 'AIzaSyAWJqO2lq0CdnT0SV1NCvOvpY_GlTCy0ag'
        const response = await axios.get(
            `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`,
            { responseType: 'blob' }
          );

        const blob = new Blob([response.data], { type: 'application/pdf' });
        const objectUrl = URL.createObjectURL(blob);
        console.log(objectUrl)
        return objectUrl
        //setPdfUrl(objectUrl);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    
}



const BrowsePage = async () => {
    const thesis = await getdata()
    //console.log(thesis['thesis'].id)
    const urlll = await Urldecode();


    return (
        <>
            <p>Thesis</p>
            <p>Title {thesis['thesis'].title}</p>
            <p>{thesis['thesis'].glinkView}</p>
            <Document file={urlll}>
                <Page pageNumber={1} />
            </Document>

            <PdfViewer />



        </>
    )
}

export default BrowsePage;

