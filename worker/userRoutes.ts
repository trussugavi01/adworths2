import { Hono } from "hono";
import { Env } from './core-utils';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
    // Add more routes like this. **DO NOT MODIFY CORS OR OVERRIDE ERROR HANDLERS**
    app.get('/api/test', (c) => c.json({ success: true, data: { name: 'this works' }}));
    app.post('/api/contact', async (c) => {
        try {
            const body = await c.req.json();
            const submissionData = {
                id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
                receivedAt: new Date().toISOString(),
                formData: body,
            };
            // Simulate storing the submission in a database
            console.log('[DATABASE SIMULATION] Storing contact form submission:', JSON.stringify(submissionData, null, 2));
            const emailNotification = {
                to: 'info@adworths.ng',
                from: 'noreply@adworths-website.com',
                subject: `New Contact Form Submission: ${body.subject}`,
                body: `
                    You have received a new message from ${body.name} (${body.email}).
                    Message:
                    ${body.message}
                `,
                sentAt: new Date().toISOString(),
            };
            // Simulate sending an email notification
            console.log('[EMAIL SIMULATION] Sending notification:', JSON.stringify(emailNotification, null, 2));
            return c.json({ success: true, message: 'Message received successfully!' });
        } catch (error) {
            console.error('Error processing contact form:', error);
            return c.json({ success: false, message: 'Failed to process message.' }, 500);
        }
    });
}