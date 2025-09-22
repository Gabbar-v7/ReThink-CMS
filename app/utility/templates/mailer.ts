export function getVerificationMail(url: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Codeverd Email Verification</title>
  <style>
    body {
      background-color: #ffffff;
      color: #000000;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #ddd;
      padding: 30px;
      border-radius: 8px;
    }
    h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
      text-align: center;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      margin-top: 20px;
      background-color: #000;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
    .link-box {
      margin-top: 20px;
      background-color: #f7f7f7;
      padding: 12px;
      word-break: break-all;
      font-family: monospace;
      font-size: 14px;
      border: 1px dashed #999;
    }
    .footer {
      margin-top: 40px;
      font-size: 14px;
      color: #555;
      text-align: center;
    }
    .footer a {
      color: #000;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Verify Your Email - Codeverd</h1>
    <p>You're almost ready to start using Codeverd. Please verify your email address by clicking the button below:</p>
    <p style="text-align: center;">
      <a href="${url}" class="btn">Verify Email</a>
    </p>
    <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
    <div class="link-box">${url}</div>
    <div class="footer">
      <p>Need help? <a href="mailto:codeverd@gmail.com">Contact our support</a></p>
      <p>You're receiving this email because you signed up on Codeverd.</p>
    </div>
  </div>
</body>
</html>
`;
}

export function getDeleteVerificationMail(url: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Confirm Account Deletion - Codeverd</title>
  <style>
    body {
      background-color: #ffffff;
      color: #000000;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #ddd;
      padding: 30px;
      border-radius: 8px;
    }
    h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
      text-align: center;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
    .warning {
      background-color: #fef3c7;
      border: 1px solid #facc15;
      padding: 12px;
      margin: 20px 0;
      font-weight: bold;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      margin-top: 20px;
      background-color: #000;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
    .link-box {
      margin-top: 20px;
      background-color: #f7f7f7;
      padding: 12px;
      word-break: break-all;
      font-family: monospace;
      font-size: 14px;
      border: 1px dashed #999;
    }
    .footer {
      margin-top: 40px;
      font-size: 14px;
      color: #555;
      text-align: center;
    }
    .footer a {
      color: #000;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Confirm Account Deletion - Codeverd</h1>
    <p>You requested to delete your account on <strong>Codeverd</strong>. Please confirm this action by clicking the button below.</p>
    <div class="warning">
      Important: Open the link in a browser where you're signed into Codeverd to complete this process.
    </div>
    <p style="text-align: center;">
      <a href="${url}" class="btn">Confirm Deletion</a>
    </p>
    <p>If the button doesn't work, copy and paste the link below into your signed-in browser:</p>
    <div class="link-box">${url}</div>
    <div class="footer">
      <p>Need help? <a href="mailto:codeverd@gmail.com">Contact our support</a></p>
      <p>If you didn't request this, you can safely ignore this email.</p>
    </div>
  </div>
</body>
</html>
`;
}

export function getChangeEmailVerificationMail(url: string, newEmail: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Confirm Email Change - Codeverd</title>
  <style>
    body {
      background-color: #ffffff;
      color: #000000;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #ddd;
      padding: 30px;
      border-radius: 8px;
    }
    h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
      text-align: center;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
    .highlight {
      font-weight: bold;
      background-color: #f7f7f7;
      padding: 8px;
      display: inline-block;
      border: 1px solid #ccc;
      margin-top: 10px;
    }
    .warning {
      background-color: #fef3c7;
      border: 1px solid #facc15;
      padding: 12px;
      margin: 20px 0;
      font-weight: bold;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      margin-top: 20px;
      background-color: #000;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
    .link-box {
      margin-top: 20px;
      background-color: #f7f7f7;
      padding: 12px;
      word-break: break-all;
      font-family: monospace;
      font-size: 14px;
      border: 1px dashed #999;
    }
    .footer {
      margin-top: 40px;
      font-size: 14px;
      color: #555;
      text-align: center;
    }
    .footer a {
      color: #000;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Confirm Email Change - Codeverd</h1>
    <p>We've received a request to change the email associated with your Codeverd account to:</p>
    <p style="text-align: center;">
      <span class="highlight">${newEmail}</span>
    </p>
    <div class="warning">
      Important: To confirm this change, please open the link below in a browser where you're already signed into Codeverd.
    </div>
    <p style="text-align: center;">
      <a href="${url}" class="btn">Confirm Email Change</a>
    </p>
    <p>If the button doesn't work, copy and paste this link into your signed-in browser:</p>
    <div class="link-box">${url}</div>
    <div class="footer">
      <p>Need help? <a href="mailto:codeverd@gmail.com">Contact our support</a></p>
      <p>If you did not request this email change, please ignore this message.</p>
    </div>
  </div>
</body>
</html>
`;
}

export function getResetPasswordMail(url: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset Your Password - Codeverd</title>
  <style>
    body {
      background-color: #ffffff;
      color: #000000;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #ddd;
      padding: 30px;
      border-radius: 8px;
    }
    h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
      text-align: center;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
    .warning {
      background-color: #fef3c7;
      border: 1px solid #facc15;
      padding: 12px;
      margin: 20px 0;
      font-weight: bold;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      margin-top: 20px;
      background-color: #000;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
    .link-box {
      margin-top: 20px;
      background-color: #f7f7f7;
      padding: 12px;
      word-break: break-word;
      font-family: monospace;
      font-size: 14px;
      border: 1px dashed #999;
    }
    .footer {
      margin-top: 40px;
      font-size: 14px;
      color: #555;
      text-align: center;
    }
    .footer a {
      color: #000;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Reset Your Password - Codeverd</h1>
    <p>We received a request to reset your password for your Codeverd account. If this was you, click the button below to create a new password.</p>
    <div class="warning">
      Important: Open the reset link in a browser where you're already signed into Codeverd.
    </div>
    <p style="text-align: center;">
      <a href="${url}" class="btn">Reset Password</a>
    </p>
    <p>If the button doesn't work, copy and paste this link into your signed-in browser:</p>
    <div class="link-box">${url}</div>
    <div class="footer">
      <p>Need help? <a href="mailto:codeverd@gmail.com">Contact our support</a></p>
      <p>If you didn't request this password reset, you can ignore this email.</p>
    </div>
  </div>
</body>
</html>
`;
}

export function getLoginCredentialsMail(email: string, password: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Codeverd Login Credentials</title>
  <style>
    body {
      background-color: #ffffff;
      color: #000000;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #ddd;
      padding: 30px;
      border-radius: 8px;
    }
    h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
      text-align: center;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      margin-top: 20px;
      background-color: #000;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
    .credentials-box {
      margin-top: 20px;
      background-color: #f7f7f7;
      padding: 20px;
      border: 1px dashed #999;
      border-radius: 5px;
    }
    .credential-item {
      margin-bottom: 12px;
      font-family: monospace;
      font-size: 14px;
    }
    .credential-label {
      font-weight: bold;
      color: #333;
      font-family: Arial, sans-serif;
    }
    .credential-value {
      color: #000;
      word-break: break-all;
    }
    .warning {
      background-color: #fff3cd;
      border: 1px solid #ffeaa7;
      padding: 15px;
      border-radius: 5px;
      margin-top: 20px;
      color: #856404;
    }
    .footer {
      margin-top: 40px;
      font-size: 14px;
      color: #555;
      text-align: center;
    }
    .footer a {
      color: #000;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Your Codeverd Login Credentials</h1>
    <p>Welcome to Codeverd! Your account has been successfully created. Below are your login credentials:</p>
    
    <div class="credentials-box">
      <div class="credential-item">
        <span class="credential-label">Email:</span> 
        <span class="credential-value">${email}</span>
      </div>
      <div class="credential-item">
        <span class="credential-label">Password:</span> 
        <span class="credential-value">${password}</span>
      </div>
    </div>
    
    <div class="warning">
      <strong>⚠️ Important Security Notice:</strong><br>
      Please do not share these login credentials with anyone. For your security, we recommend changing your password after your first login.
    </div>
    
    <p style="text-align: center;">
      <a href="https://codeverd.com" class="btn">Visit Codeverd</a>
    </p>
    
    <div class="footer">
      <p>Need help? <a href="mailto:codeverd@gmail.com">Contact our support</a></p>
      <p>You're receiving this email because an account was created for you on Codeverd.</p>
    </div>
  </div>
</body>
</html>
`;
}

export function getAuditNotificationMail(publicUrl: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Codeverd Audit Created</title>
  <style>
    body {
      background-color: #ffffff;
      color: #000000;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #ddd;
      padding: 30px;
      border-radius: 8px;
    }
    h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
      text-align: center;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      margin-top: 20px;
      background-color: #000;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
    .link-box {
      margin-top: 20px;
      background-color: #f7f7f7;
      padding: 12px;
      word-break: break-all;
      font-family: monospace;
      font-size: 14px;
      border: 1px dashed #999;
    }
    .footer {
      margin-top: 40px;
      font-size: 14px;
      color: #555;
      text-align: center;
    }
    .footer a {
      color: #000;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Your Audit Has Been Created - Codeverd</h1>
    <p>Great news! Your audit has been successfully created and is now available for viewing.</p>
    <p>Click the button below to view your public audit report:</p>
    <p style="text-align: center;">
      <a href="${publicUrl}" class="btn">View Public Audit</a>
    </p>
    <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
    <div class="link-box">${publicUrl}</div>
    <div class="footer">
      <p>Need help? <a href="mailto:codeverd@gmail.com">Contact our support</a></p>
      <p>You're receiving this email because you requested an audit on Codeverd.</p>
    </div>
  </div>
</body>
</html>
`;
}