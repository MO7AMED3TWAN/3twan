# Web3Forms Integration Setup Guide

This guide will help you integrate Web3Forms with your Consultation booking form.

## Step 1: Create a Web3Forms Account

1. Visit [https://web3forms.com](https://web3forms.com)
2. Click on "Sign Up" or "Get Started"
3. Create an account with your email

## Step 2: Get Your Access Key

1. After signing up, log in to your dashboard
2. You'll see your **Access Key** displayed on the dashboard
3. Copy this key (keep it safe and don't share it publicly)

## Step 3: Update Your Access Key in the Code

Open `src/App.tsx` and find the `handleSubmit` function in the `ContactSection` component.

Look for this line:
```javascript
formDataToSend.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY_HERE');
```

Replace `'YOUR_WEB3FORMS_ACCESS_KEY_HERE'` with your actual access key:
```javascript
formDataToSend.append('access_key', 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6');
```

## Step 4: Configure Email Notifications (Optional)

In the Web3Forms dashboard, you can also:

- Set up email notifications to receive submissions
- Configure auto-reply emails to users
- View submission history
- Export data

## Form Fields Being Sent

The form currently sends the following fields to Web3Forms:

- **name**: User's full name
- **email**: User's email address
- **project_type**: Type of service requested
- **preferred_date**: Preferred meeting date (optional)
- **message**: Project details and description
- **subject**: Email subject line
- **from_name**: Name displayed in emails

## Testing the Form

1. Fill out the consultation form on your website
2. Click "Schedule Consultation"
3. You should see a success message
4. Check your Web3Forms dashboard to verify the submission was received
5. Check your email for the notification (if configured)

## Environment Variable (Advanced)

For better security, consider using an environment variable instead of hardcoding the access key:

1. Create a `.env` file in the root of your project:
```
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

2. Update the form to use it:
```javascript
formDataToSend.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
```

**Note**: Make sure to add `.env` and `.env.local` to your `.gitignore` file to prevent accidentally committing sensitive keys.

## Troubleshooting

### Form submission not working?
- Verify your Access Key is correctly entered
- Check the browser console (F12) for error messages
- Make sure your internet connection is stable
- Verify the Access Key is active in your Web3Forms dashboard

### Not receiving emails?
- Check your Web3Forms dashboard email settings
- Verify the email address associated with your account
- Check spam/junk folder
- Make sure notifications are enabled in your dashboard

### CORS Issues?
Web3Forms handles CORS automatically, so you shouldn't encounter any issues.

## Additional Features

Web3Forms offers many features you can explore:
- Multi-language support
- File uploads
- Custom field mapping
- Webhooks for integrations
- Conditional logic
- And more!

For more information, visit [Web3Forms Documentation](https://docs.web3forms.com/)

## Support

If you need help:
- Contact Web3Forms support: [https://web3forms.com/contacts](https://web3forms.com/contacts)
- Check the email in your form submissions for confirmation
