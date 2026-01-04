import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, projectType, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, projectType });

    // Send notification email to Anthony
    const notificationEmail = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["ayodeleanthonyo@gmail.com"],
      subject: `New Contact Form Submission - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">New Contact Form Submission</h1>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Project Type:</strong> ${projectType}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e293b; margin-top: 0;">Message</h2>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #64748b; font-size: 12px; margin-top: 30px;">
            This email was sent from your portfolio contact form at Anthony Digital Hub.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent successfully:", notificationEmail);

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "Anthony Digital Hub <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out! - Anthony Digital Hub",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">Thank You, ${name}!</h1>
          
          <p style="font-size: 16px; color: #334155; line-height: 1.6;">
            I've received your message regarding <strong>${projectType}</strong> and I'm excited to learn more about your project!
          </p>
          
          <p style="font-size: 16px; color: #334155; line-height: 1.6;">
            I'll review your inquiry and get back to you within 24 hours. In the meantime, feel free to check out my portfolio to see some of my recent work.
          </p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Your Message:</h3>
            <p style="white-space: pre-wrap; color: #64748b;">${message}</p>
          </div>
          
          <p style="font-size: 16px; color: #334155; line-height: 1.6;">
            Best regards,<br>
            <strong>Anthony Ayodele</strong><br>
            Full-Stack Web Developer
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              📧 ayodeleanthonyo@gmail.com<br>
              📱 +234 905 770 7072<br>
              📍 Lagos, Nigeria
            </p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent successfully:", confirmationEmail);

    return new Response(
      JSON.stringify({ success: true, notificationEmail, confirmationEmail }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
