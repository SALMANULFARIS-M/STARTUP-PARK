// /api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyd6Q_0nHG1kzpzCBAROfLw5cBWDBvP5pnAgFxBEKKOYquI_rGvrD7_MihoWn78Yeb8/exec';

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const result = await response.text();
    res.status(200).json({ status: 'success', result });
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
}
