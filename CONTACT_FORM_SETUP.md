# Contact Form Email Setup

## Option 1: Web3Forms (Recommended - Easiest)

1. **Get Your Access Key:**
   - Go to https://web3forms.com/
   - Enter your email: `shubhamv22199@gmail.com`
   - Click "Get Your Access Key"
   - Copy the access key

2. **Update Contact.js:**
   - Open `src/components/Contact.js`
   - Find: `formDataToSend.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key

3. **That's it!** The form will now send emails to shubhamv22199@gmail.com

## Option 2: EmailJS

1. **Create EmailJS Account:**
   - Go to https://www.emailjs.com/
   - Sign up for free account

2. **Setup:**
   - Create Email Service (Gmail)
   - Create Email Template
   - Get Service ID, Template ID, and Public Key

3. **Update Contact.js:**
   - Install: `npm install @emailjs/browser`
   - Update the EmailJS configuration in Contact.js

## Option 3: Formspree

1. Go to https://formspree.io/
2. Create account and form
3. Get form endpoint
4. Update handleSubmit to use fetch API

---

**Note:** Currently using Web3Forms. Just get your access key from web3forms.com and replace it in Contact.js!

