import React, { useState,useContext } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// CSS Imports (Zaroori hain!)
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { bookpathContext } from '../context/context.js';
import { currentbookpathcontext } from '../context/context.js';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function MyPDFViewer() {
  const {renderpdfurl,seturl} =useContext(currentbookpathcontext)
  const [numPages, setNumPages] = useState(null);
  const {bookpath,setpath}=useContext(bookpathContext)
  let fullurl="http://localhost:4002/"+bookpath
  console.log(fullurl)
  seturl(bookpath)
  console.log("bookpath now",bookpath)
  return (
    <div className='overflow-y-hidden' style={{
      width: '100%',
      height: '85vh',      // Viewer ki total height
      overflowY: 'auto',   // Scrollbar enable karne ke liye
      backgroundColor: '#20242b ', // Professional dark gray background
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      
      <Document
        file={fullurl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div key={`page_${index + 1}`} style={{ marginBottom: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.5)' }}>
            <Page 
              pageNumber={index + 1} 
              width={800} // Yahan se aap width adjust kar sakte hain (pixels mein)
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          </div>
        ))}
      </Document>
    </div>
  );
}

export default MyPDFViewer