const API_BASE_URL = 'http://localhost:5001/api';

export async function uploadResumeToBackend(file: File) {
  const formData = new FormData();
  formData.append('resume', file);

  try {
    const response = await fetch(`${API_BASE_URL}/candidates/upload`, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.warn('Backend server offline, fallback to client-side parsing:', err);
  }
  return null;
}

export async function fetchCandidatesFromBackend() {
  try {
    const response = await fetch(`${API_BASE_URL}/candidates`);
    if (response.ok) {
      const data = await response.json();
      return data.candidates;
    }
  } catch (err) {
    console.warn('Backend server offline, fallback to LocalStorage:', err);
  }
  return null;
}

export async function deleteCandidateFromBackend(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/candidates/${id}`, {
      method: 'DELETE'
    });
    return response.ok;
  } catch (err) {
    console.warn('Backend server offline:', err);
  }
  return false;
}
