const BaseUrl = "https://admin.wtcnepal.com/api";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Forward the application to your Strapi resume collection
      const response = await fetch(`${BaseUrl}/resume-collection`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            message: req.body.message,
            job_position: req.body.jobPosition,
            resume: req.body.resume // You'd handle file upload separately
          }
        })
      });

      if (response.ok) {
        res.status(200).json({ message: 'Application submitted successfully' });
      } else {
        res.status(500).json({ error: 'Failed to submit application' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}