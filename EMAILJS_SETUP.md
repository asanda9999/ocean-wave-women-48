# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form.

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com
2. Click "Sign Up" (it's free - 200 emails/month)
3. Create your account

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for asandamkhize9@gmail.com)
   - Or choose Outlook, Yahoo, etc.
4. Follow the connection steps:
   - For Gmail: You'll need to authorize EmailJS to send emails on your behalf
   - This is secure and only allows EmailJS to send emails
5. After connecting, you'll see your **Service ID** - copy this!

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template (copy and paste):

### Template Settings:
- **Template Name**: Contact Form Template
- **Subject**: `{{subject}}`

### Email Body (HTML):
```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}} ({{from_email}})</p>

<p><strong>Company:</strong> {{company}}</p>

<p><strong>Phone:</strong> {{phone}}</p>

<p><strong>Service Interest:</strong> {{service}}</p>

<hr>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>This email was sent from your website contact form.</em></p>
```

### Or Plain Text Version:
```
New Contact Form Submission

From: {{from_name}} ({{from_email}})
Company: {{company}}
Phone: {{phone}}
Service Interest: {{service}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. **Important**: Make sure the "To Email" field is set to: `{{to_email}}`
5. Click **"Save"**
6. Copy your **Template ID** (you'll see it after saving)

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** 
3. Copy it

## Step 5: Update Your Code

Open `src/components/ContactSection.tsx` and replace these three values:

```typescript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // ← Replace with your Public Key
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // ← Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // ← Replace with your Template ID
```

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Submit it
3. Check your email (asandamkhize9@gmail.com) - you should receive the form submission!

## Troubleshooting

- **Not receiving emails?** Check your spam folder
- **Getting errors?** Make sure all three IDs are correctly copied (no extra spaces)
- **Template not working?** Verify all template variables match exactly:
  - `{{to_email}}`
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{company}}`
  - `{{phone}}`
  - `{{service}}`
  - `{{message}}`
  - `{{subject}}`

## Security Note

The Public Key is safe to use in frontend code - it's designed to be public. However, you can restrict it to specific domains in your EmailJS account settings for extra security.

