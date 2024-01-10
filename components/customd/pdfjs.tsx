import React, { useState, useEffect } from 'react';
//import { Worker, Viewer } from '@react-pdf-viewer/pdfjs-dist/entry.webpack';
//import '@react-pdf-viewer/core/lib/styles/index.css';
import axios from 'axios';

const PdfViewer = () => {
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const fetchPdfUrl = async () => {
      try {
        const fileId = '1W2w8xDUmw5voE6pKnj_bbQWxq8N_tIn9';
        const response = await axios.get(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
          responseType: 'blob',
        });

        const blob = new Blob([response.data], { type: 'application/pdf' });
        const objectUrl = URL.createObjectURL(blob);
        setPdfUrl(objectUrl);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdfUrl();
  }, []);

  return (
    <div>
      <h1>PDF Viewer</h1>
      {pdfUrl}
      {/**pdfUrl && (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${window.pdfjs.version}/build/pdf.worker.min.js`}>
          <Viewer file={pdfUrl} />
        </Worker>
      )*/}
    </div>
  );
};

export default PdfViewer;
