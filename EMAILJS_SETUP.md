# EmailJS Setup Instructions

✅ **Service ID and Public Key already configured!**

Your EmailJS credentials:
- **Service ID:** service_vuy35tq
- **Public Key:** suQmWAPtNlK9L0QAC

## Final Step - Create Email Template:

1. **Go to EmailJS Dashboard**
   - Visit https://dashboard.emailjs.com/admin/template
   - Click "Create New Template"

2. **Template Settings:**
   - **Template Name:** Portfolio Contact Form
   - **Subject:** New Message from Portfolio - {{from_name}}
   
3. **Template Content:**
   ```
   You have received a new message from your portfolio website.
   
   Name: {{from_name}}
   Email: {{from_email}}
   Reply To: {{reply_to}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio contact form.
   ```

4. **Email Settings:**
   - **To Email:** shubhamv22199@gmail.com
   - **From Name:** Portfolio Contact Form
   - **Reply To:** {{reply_to}}

5. **Copy Template ID:**
   - After creating the template, copy the Template ID
   - It will look like: `template_xxxxxxx`

6. **Update Contact.js:**
   - Open `src/components/Contact.js`
   - Find: `const templateId = 'template_xxxxxxx';`
   - Replace `template_xxxxxxx` with your actual Template ID

## Example Template Content:

**Subject:** New Contact Form Message from Portfolio

**Content:**
```
You have received a new message from your portfolio website.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

## Alternative: Using Formspree

If you prefer not to use EmailJS, you can use Formspree:
1. Go to https://formspree.io/
2. Create a free account
3. Create a new form
4. Get your form endpoint
5. Update the handleSubmit function to use fetch API

