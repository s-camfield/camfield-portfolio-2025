'use client';

import { useState } from 'react';

export default function PdfLightboxGallery({ pdfFiles = [], project = '', displayName = '' }) {
  const [open, setOpen] = useState(false);
  const [activePdf, setActivePdf] = useState(null);

  const openPdf = (pdfFile) => {
    setActivePdf(pdfFile);
    setOpen(true);
  };

  const closePdf = () => {
    setOpen(false);
    setActivePdf(null);
  };

  if (!pdfFiles.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">PDFs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pdfFiles.map((pdfFile) => (
          <button
            key={pdfFile}
            type="button"
            onClick={() => openPdf(pdfFile)}
            className="text-left rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition p-4 bg-white"
          >
            <div className="text-sm text-gray-500 mb-2">PDF</div>
            <div className="font-semibold break-words">{pdfFile}</div>
            <div className="mt-3 inline-block text-blue-600 underline">
              Open Preview →
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && activePdf && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
          onClick={closePdf}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="font-semibold truncate">
                {displayName} — {activePdf}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`/portfolio/${project}/${activePdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 underline"
                >
                  Open in new tab
                </a>

                <button
                  type="button"
                  onClick={closePdf}
                  className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="w-full h-full">
              <iframe
                title={`${displayName} PDF Preview`}
                src={`/portfolio/${project}/${activePdf}`}
                className="w-full h-[calc(85vh-52px)]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
