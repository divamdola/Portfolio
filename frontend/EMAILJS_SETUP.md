# EmailJS Setup Instructions

To make the contact form functional, you need to set up EmailJS and configure the environment variables.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Get Your EmailJS Credentials

### Service ID
1. Log in to EmailJS dashboard
2. Go to "Email Services" → "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Copy the **Service ID** (it will look like: `service_xxxxxxxx`)

### Template ID
1. Go to "Email Templates" → "Create New Template"
2. Create a template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
3. Set the "To Email" to: `divyanshuamdola01@gmail.com`
4. Copy the **Template ID** (it will look like: `template_xxxxxxxx`)

### Public Key
1. Go to "Account" → "General"
2. Copy the **Public Key** (it will look like: `xxxxxxxxxxxxxxxxxxxxx`)

## Step 3: Update Environment Variables

Open the `.env` file in the `frontend` directory and replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 4: Restart the Development Server

After updating the `.env` file, restart your development server:

```bash
cd frontend
npm run dev
```

## Example Email Template

Subject: `{{subject}}`

Body:
```
You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

## Testing

Once configured, test the form by:
1. Filling out the contact form on your portfolio
2. Clicking "Send Message"
3. Check your email inbox for the message

## Troubleshooting

- If you see "Failed to send message", check your EmailJS dashboard for error logs
- Make sure your email service is properly authenticated
- Verify that the template variables match the form field names
- Check browser console for any error messages
