# EmailJS Setup Instructions

To enable email functionality in your Cook Store app, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## 3. Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Content:
**Subject:** New Order from {{customer_name}} - Cook Store

**Body:**
```
New Order Received!

Customer Information:
- Name: {{customer_name}}
- Email: {{customer_email}}
- Phone: {{customer_phone}}
- Address: {{customer_address}}

Order Details:
- Order Date: {{order_date}}
- Total Items: {{item_count}}
- Total Amount: {{order_total}}

Items Ordered:
{{order_items}}

Additional Notes:
{{customer_notes}}

Please contact the customer to confirm the order.
```

4. Save the template and note down your **Template ID**

## 4. Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key**

## 5. Update Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Setup
1. Restart your development server: `npm run dev`
2. Add items to cart and fill out the reservation form
3. Submit the form - you should receive an email at oussamasassour@gmail.com

## Troubleshooting
- Make sure your environment variables are correctly set
- Check the browser console for any error messages
- Verify your EmailJS account is properly configured
- Ensure your email service is active in EmailJS dashboard

## Note
The current setup sends emails to: **oussamasassour@gmail.com**
To change the recipient email, modify the `to_email` parameter in the `handleFormSubmit` function in `CartPage.tsx`.
