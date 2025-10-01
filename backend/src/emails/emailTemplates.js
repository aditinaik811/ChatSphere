export function createWelcomeTemplate(name, clientURL) {
  return `
    <div style="font-family: Arial, sans-serif; line-height:1.5; color:#333;">
      <h2>Welcome to ChatSphere, ${name} 🎉</h2>
      <p>We're excited to have you on board!</p>
      <p>Click the button below to start exploring:</p>
      <a href="${clientURL}" 
         style="display:inline-block; margin-top:10px; padding:10px 20px; 
                background-color:#4F46E5; color:#fff; text-decoration:none; 
                border-radius:5px; font-weight:bold;">
        Get Started
      </a>
      <p style="margin-top:20px;">If you didn’t sign up, you can safely ignore this email.</p>
    </div>
  `;
}
