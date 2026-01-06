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
    // Using reply-to header so you can reply directly to the customer
    const notificationEmail = await resend.emails.send({
      from: "Anthony Digital Hub <onboarding@resend.dev>",
      to: ["ayodeleanthonyo@gmail.com"],
      reply_to: email,
      subject: `[Anthony Digital Hub] New Inquiry from ${name} - ${projectType}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Anthony Digital Hub</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 25px; border: 1px solid #e2e8f0; border-top: none;">
            <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">📋 Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Project Type:</td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${projectType}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #ffffff; padding: 25px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">💬 Message</h2>
            <p style="white-space: pre-wrap; color: #334155; line-height: 1.6; margin: 0; padding: 15px; background-color: #f8fafc; border-radius: 8px;">${message}</p>
          </div>
          
          <div style="text-align: center; padding: 20px;">
            <a href="mailto:${email}?subject=Re: Your Inquiry - Anthony Digital Hub" style="display: inline-block; background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); color: #ffffff; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600;">Reply to ${name}</a>
          </div>
          
          <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 20px;">
            This email was sent from your portfolio contact form at Anthony Digital Hub.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent successfully:", notificationEmail);

    // Send confirmation email to the user
    // Adding reply-to so they can reply directly
    const confirmationEmail = await resend.emails.send({
      from: "Anthony Digital Hub <onboarding@resend.dev>",
      to: [email],
      reply_to: "ayodeleanthonyo@gmail.com",
      subject: `Thank you for contacting Anthony Digital Hub, ${name}!`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank You, ${name}! 🎉</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Your message has been received</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 25px; border: 1px solid #e2e8f0; border-top: none;">
            <p style="font-size: 16px; color: #334155; line-height: 1.6; margin: 0 0 15px 0;">
              I've received your message regarding <strong style="color: #3B82F6;">${projectType}</strong> and I'm excited to learn more about your project!
            </p>
            
            <p style="font-size: 16px; color: #334155; line-height: 1.6; margin: 0;">
              I'll review your inquiry and get back to you within <strong>24 hours</strong>. In the meantime, feel free to check out my portfolio to see some of my recent work.
            </p>
          </div>
          
          <div style="background-color: #ffffff; padding: 25px; border: 1px solid #e2e8f0; border-top: none;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 16px;">📝 Your Message:</h3>
            <p style="white-space: pre-wrap; color: #64748b; line-height: 1.6; margin: 0; padding: 15px; background-color: #f8fafc; border-radius: 8px; font-style: italic;">${message}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 25px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 16px; color: #334155; line-height: 1.6; margin: 0 0 15px 0;">
              Best regards,<br>
              <strong style="color: #1e293b;">Anthony Ayodele</strong><br>
              <span style="color: #64748b;">Full-Stack Web Developer</span>
            </p>
            
            <div style="border-top: 1px solid #e2e8f0; padding-top: 15px; margin-top: 15px;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                📧 <a href="mailto:ayodeleanthonyo@gmail.com" style="color: #3B82F6; text-decoration: none;">ayodeleanthonyo@gmail.com</a><br>
                📱 <a href="tel:+2349057707072" style="color: #3B82F6; text-decoration: none;">+234 905 770 7072</a><br>
                📍 Lagos, Nigeria
              </p>
            </div>
          </div>
          
          <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 20px;">
            © ${new Date().getFullYear()} Anthony Digital Hub. All rights reserved.
          </p>
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
