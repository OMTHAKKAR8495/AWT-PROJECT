export async function extractTextFromPdfFile(file: File): Promise<string> {
  try {
    const rawText = await file.text();
    if (rawText && rawText.length > 20) {
      return rawText;
    }
  } catch (err) {
    console.warn('PDF text extraction fallback:', err);
  }
  return '';
}

export function extractEmailFromText(text: string, filename?: string): string {
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i;
  const match = text.match(emailRegex);
  if (match && match[1]) {
    const email = match[1].toLowerCase().trim();
    if (!email.includes('example.com') && !email.includes('domain.com')) {
      return email;
    }
  }

  if (filename) {
    const cleanFn = filename.replace(/\.[a-zA-Z0-9]+$/, '').toLowerCase();
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

  for (const line of lines.slice(0, 15)) {
    if (
      line.startsWith('%') ||
      line.startsWith('/') ||
      line.includes('@') ||
      line.includes('http') ||
      line.toLowerCase().includes('pdf') ||
      line.toLowerCase().includes('resume') ||
      line.toLowerCase().includes('curriculum') ||
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
