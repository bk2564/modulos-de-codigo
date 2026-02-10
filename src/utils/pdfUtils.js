import * as pdfjsLib from "pdfjs-dist";

export async function extractTextFromPDF(dataUrl) {
  const loadingTask = pdfjsLib.getDocument(dataUrl);
  const pdf = await loadingTask.promise;

  let fullText = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    fullText += strings.join(" ") + "\n";
  }

  return fullText;
}

export function enrichPdf(pdf) {
  if (!pdf.url) return pdf;

  const arr = pdf.url.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  const u8arr = new Uint8Array(bstr.length);

  for (let i = 0; i < bstr.length; i++) {
    u8arr[i] = bstr.charCodeAt(i);
  }

  const blob = new Blob([u8arr], { type: mime });

  return {
    ...pdf,
    blob,
    blobUrl: URL.createObjectURL(blob)
  };
}
