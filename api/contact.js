// /api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyxSQ_dM4VZJdE4JYh1FEcz8zE81PnpkvKU9g6tbKvYSUl3KmKOTf2gstBSBrMUKz2ptg/exec';

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
