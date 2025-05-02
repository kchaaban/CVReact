import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import MyCV from "./MyCV";

const ExportCV = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  // Function to handle the PDF export
  const handlePrint = async () => {
    const element = cvRef.current;
    if (!element) return;

    // Scroll to top to prevent layout shifts
    window.scrollTo(0, 0);

    // Create canvas from the HTML content
    const canvas = await html2canvas(element, {
      scale: 3, // Adjust the scale for better quality
      useCORS: true,
      logging: true,
      windowWidth: window.innerWidth, // Dynamically calculate window width
    });

    // Convert the canvas into image data
    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Calculate the image width and height based on PDF page size
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * pageWidth) / canvas.width;

    let position = 0;

    // Check if the content fits on one page, if not, split it across multiple pages
    if (imgHeight < pageHeight) {
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
    } else {
      while (position < imgHeight) {
        pdf.addImage(imgData, "JPEG", 0, -position, imgWidth, imgHeight);
        position += pageHeight;
        if (position < imgHeight) pdf.addPage();
      }
    }

    // Save the generated PDF
    pdf.save("my-cv.pdf");
  };

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Button to trigger PDF generation */}
      <button
        onClick={handlePrint}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download PDF
      </button>

      {/* The content that will be captured for the PDF */}
      <div
        ref={cvRef}
        className="w-full max-w-[1200px] bg-white mx-auto p-4"
        style={{ overflow: "visible" }}
      >
        <MyCV />
      </div>
    </div>
  );
};

export default ExportCV;