'use client';

import { useMemo, useState } from 'react';

function prettifyLabel(filename = '') {
  // Remove extension
  const base = filename.replace(/\.[^/.]+$/, '');

  // Turn dashes/underscores into spaces and Title Case
  return base
    .replace(/[-_]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function PdfLightboxGallery({
  pdfItems = [], // [{ file, cover, label }]
  project = '',
  displayName = '',
}) {
  const [open, setOpen] = useState(false);
  const [activePdf, setActivePdf] = useState(null);

  const normalized = useMemo(() => {
    return (pdfItems || [])
      .filter((p) => p && p.file)
      .map((p) => ({
        file: p.file,
        cover: p.cover || null,
        label: p.label || prettifyLabel(p.file),
      }));
  }, [pdfItems]);

  const openPdf = (pdf) => {
    setActivePdf(pdf);
    setOpen(true);
  };

  const closePdf = () => {
    setOpen(false);
    setActivePdf(null);
  };

  if (!normalized.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">PDFs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {normalized.map((pdf) => (
          <div
            key={pdf.file}
            className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Cover preview (clickable) */}
            <button
              type="button"
              onClick={() => openPdf(pdf)}
              className="w-full text-left"
              aria-label={`Open ${pdf.label}`}
            >
              <div className="relative w-full aspect-[4/5] bg-gray-50">
                {pdf.cover ? (
                  <img
                    src={`/portfolio/${project}/${pdf.cover}`}
                    alt={`${pdf.label} cover`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 text-gray-500">
                    <div className="text-center">
                      <div className="text-sm uppercase tracking-wider mb-2">PDF</div>
                      <div className="font-semibold">{pdf.label}</div>
                    </div>
                  </div>
                )}

                {/* subtle hover overlay */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-black/10" />
              </div>
            </button>

            {/* Title + button */}
            <div className="p-4">
              <div className="font-semibold leading-snug">{pdf.label}</div>
              <div className="text-xs text-gray-500 mt-1 break-words">{pdf.file}</div>

              <button
                type="button"
                onClick={() => openPdf(pdf)}
                className="mt-4 inline-flex items-center justify-center w-full rounded-lg bg-[#26bcab] hover:bg-[#1e9d90] text-white font-bold py-2 transition"
              >
                Open Preview →
              </button>

              <a
                href={`/portfolio/${project}/${pdf.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center text-sm text-blue-600 underline"
              >
                Open in new tab
              </a>
            </div>
          </div>
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
            className="bg-white w-full max-w-6xl h-[85vh] rounded-xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="font-semibold truncate">
                {displayName} — {activePdf.label}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`/portfolio/${project}/${activePdf.file}`}
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
                src={`/portfolio/${project}/${activePdf.file}`}
                className="w-full h-[calc(85vh-52px)]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
