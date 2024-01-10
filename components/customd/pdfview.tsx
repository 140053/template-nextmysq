import { FC } from "react";

interface ThesisDisplayProps {
    thesis: any; // Define the type of the thesis data
}

const PdfView: FC<ThesisDisplayProps> = ({ thesis }) => {
    return (
        <>
            <iframe height="999"  contextMenu="return false;" allowFullScreen className="w-full pdf-iframe" src={thesis} ></iframe>
        </>
    )
}

export default PdfView;