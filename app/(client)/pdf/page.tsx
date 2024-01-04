
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/pdfjs/pdf-viewer"), {
    ssr: false
});




//import PDFViewer from "@/components/pdfjs/pdf-viewer";

const PdfDisplay = () => {
    return (
        <>
            <div className="container">
                <PDFViewer />
            </div>
        </>
    )
}

export default PdfDisplay;