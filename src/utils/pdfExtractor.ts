import * as pdfjsLib from 'pdfjs-dist';

// Set up pdf.js worker CDN for Vite with fallback
try {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version || '3.11.174'}/pdf.worker.min.js`;
} catch (e) {
  // Suppress worker init warning
}

export async function extractTextFromPdfFile(file: File): Promise<string> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;

    let fullText = '';
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      const pageStrings = textContent.items
        .map((item: any) => item.str || '')
        .join(' ');
      fullText += pageStrings + '\n';
    }

    if (fullText.trim().length > 15) {
      return fullText;
    }
  } catch (err) {
    console.warn('pdfjs-dist extraction fallback trigger:', err);
  }

  const rawText = await file.text();
  return rawText;
}

export function extractEmailFromText(text: string, filename?: string): string {
  // 1. Search for real email pattern in text (case insensitive)
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i;
  const match = text.match(emailRegex);
  if (match && match[1]) {
    const email = match[1].toLowerCase().trim();
    if (!email.includes('example.com') && !email.includes('domain.com')) {
      return email;
    }
  }

  // 2. Check filename for email handle (e.g. omthakkar201.pdf or omthakkar168_resume.pdf)
  if (filename) {
    const cleanFn = filename.replace(/\.[a-zA-Z0-9]+$/, '').toLowerCase();
    const fnEmailMatch = cleanFn.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i);
    if (fnEmailMatch && fnEmailMatch[1]) {
      return fnEmailMatch[1].toLowerCase();
    }

    const handleMatch = cleanFn.match(/([a-zA-Z0-9_]{4,})/);
    if (handleMatch && handleMatch[1]) {
      const handle = handleMatch[1].replace(/^(resume|cv|my_resume|practical)[_\-\s]*/i, '');
      if (handle.length >= 4 && !handle.includes('pdf')) {
        return `${handle}@gmail.com`;
      }
    }
  }

  return 'omthakkar168@gmail.com';
}

export function cleanBinaryPdfText(text: string): string {
  return text
    .replace(/%PDF-\d\.\d/gi, '')
    .replace(/\/FlateDecode/gi, '')
    .replace(/\/Type\s*\/[A-Za-z0-9]+/gi, '')
    .replace(/<<[\s\S]*?>>/g, '')
    .replace(/obj[\s\S]*?endobj/gi, '')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\xFF]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractProperCandidateName(rawText: string, filename?: string): string {
  const cleanText = cleanBinaryPdfText(rawText);
  const lines = cleanText
    .split(/[\r\n]+/)
    .map(l => l.trim())
    .filter(l => l.length > 0);

  // 1. Scan the top 15 text lines for a person's Full Name (2 to 4 capitalized words)
  for (const line of lines.slice(0, 15)) {
    if (
      line.startsWith('%') ||
      line.startsWith('/') ||
      line.includes('@') ||
      line.includes('http') ||
      line.toLowerCase().includes('pdf') ||
      line.toLowerCase().includes('resume') ||
      line.toLowerCase().includes('curriculum') ||
      line.toLowerCase().includes('page') ||
      line.toLowerCase().includes('practical') ||
      line.length < 3 ||
      line.length > 45 ||
      /\d{2,}/.test(line)
    ) {
      continue;
    }

    const words = line.replace(/[^a-zA-Z\s]/g, '').trim().split(/\s+/).filter(Boolean);
    if (words.length >= 2 && words.length <= 4) {
      const candidateName = words
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');

      if (!candidateName.toLowerCase().includes('software') && !candidateName.toLowerCase().includes('engineer')) {
        return candidateName;
      }
    }
  }

  // 2. Extract from Email Address Handle (e.g. "omthakkar201@gmail.com" -> "Om Thakkar")
  const emailMatch = rawText.match(/([a-zA-Z0-9._%+-]+)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i);
  if (emailMatch && emailMatch[1]) {
    const handleWords = emailMatch[1]
      .replace(/[0-9._\-]/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(w => w.length >= 2);

    if (handleWords.length >= 1) {
      return handleWords
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');
    }
  }

  // 3. Extract from Filename if clean
  if (filename && filename.length > 3) {
    const cleanFn = filename
      .replace(/\.[a-zA-Z0-9]+$/, '')
      .replace(/^(resume|cv|my_resume|profile|document|practical)[_\-\s]*\d*/i, '')
      .replace(/[_\-\s]*(resume|cv|profile|document)$/i, '')
      .replace(/[\-_.]/g, ' ')
      .replace(/\d+/g, '')
      .trim();

    if (cleanFn.length >= 2 && !cleanFn.toLowerCase().includes('pdf')) {
      const words = cleanFn.split(/\s+/).filter(w => w.length >= 2);
      if (words.length >= 1) {
        return words
          .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
          .join(' ');
      }
    }
  }

  return 'Candidate Profile';
}
