if (process.env.NODE_ENV !== 'production') {
  (async () => {
    const dotenv = await import('dotenv')
    dotenv.config()
  })()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' })
  }

  const { text, target } = req.body

  if (!text || !target) {
    return res.status(400).json({
      message: 'Missing text or language.' })
  }

}

