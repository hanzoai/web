const nodemailer = require('nodemailer')
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {

    if (req.method === 'POST') {
        const { email, username } = await req.json();
        console.log(email, username)

        // Create a transporter object
        const transporter = nodemailer.createTransport({
            service: 'Mandrill',
            secure: false,
            auth: {
                user: 'Lux Partners Limited',
                pass: 'md-lTIQW-EUpF2pyssaOEesIA',
            },
        });

        // Define the email options
        const mailOptions = {
            from: 'ai@lux.network',
            to: 'musordmt@proton.me',
            subject: 'New message from HanzoAI',
            text: `Email: ${email}\nUsername: ${username}`,
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
        } catch (error) {
            console.error(error);
            return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Method Not allowed' }, { status: 405 });
    }
}