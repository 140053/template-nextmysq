import dynamic from "next/dynamic";
import { FC } from "react";

const PDFViewer = dynamic(() => import("@/components/pdfjs/pdf-viewer"), {
  ssr: false,
});

interface PdfDisplayProps {
  params: {
    fileID: string;
  };
}

const PdfDisplay: FC<PdfDisplayProps> = ({ params }) => {
    
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1>{params.fileID}</h1>
          <PDFViewer fileID={params.fileID}  />
        </div>        
      </div>
    </>
  );
};

export default PdfDisplay;
