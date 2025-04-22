// src/ExportCV.tsx
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import MyCV from "./MyCV";

const ExportCV = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "My-CV",
  });

  return (
    <div className="flex flex-col items-center mt-8">
      <button
        onClick={() => handlePrint && handlePrint()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download PDF
      </button>
      <div>
        <MyCV ref={componentRef} />
      </div>
    </div>
  );
};

export default ExportCV;
