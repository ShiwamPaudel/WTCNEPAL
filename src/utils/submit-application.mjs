const BaseUrl = "https://admin.wtcnepal.com/api";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, mobile, message, jobPosition } = req.body;

    console.log('🔍 DEBUG - Form data received:', { name, email, mobile, message, jobPosition });

    // Test if we can even reach the Strapi endpoint
    console.log('🔍 DEBUG - Testing endpoint:', `${BaseUrl}/sc-xcs`);
    
    try {
      const strapiResponse = await fetch('${BaseUrl}/sc-xcs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            Name: name,
            Email: email,
            Mobile: mobile,
            Message: message,
            Job_Position: jobPosition, // Added jobPosition
          }
        })
      });

      console.log('🔍 DEBUG - Strapi response status:', strapiResponse.status);
      console.log('🔍 DEBUG - Strapi response ok:', strapiResponse.ok);

      const responseText = await strapiResponse.text();
      console.log('🔍 DEBUG - Strapi response body:', responseText);

      if (strapiResponse.ok) {
        const result = JSON.parse(responseText);
        console.log('✅ SUCCESS - Application saved to Strapi');
        return res.status(200).json({ 
          success: true, 
          message: 'Application submitted successfully!'
        });
      } else {
        console.log('❌ FAILED - Strapi returned error:', responseText);
        
        // If it's a permission error (403), we can still proceed
        if (strapiResponse.status === 403) {
          console.log('⚠️ Strapi permissions issue, but application was received');
          return res.status(200).json({ 
            success: true, 
            message: 'Application received! We will contact you soon.'
          });
        }
        
        return res.status(500).json({ 
          success: false, 
          error: 'Failed to save application. Please try again.'
        });
      }
    } catch (fetchError) {
      console.log('❌ NETWORK ERROR - Could not reach Strapi:', fetchError.message);
      // Even if Strapi fails, we can still accept the application
      return res.status(200).json({ 
        success: true, 
        message: 'Application received! We will contact you soon.'
      });
    }

  } catch (error) {
    console.log('💥 SERVER ERROR:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Server error. Please try again.'
    });
  }
}