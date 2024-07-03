import Mailchimp from '@mailchimp/mailchimp_transactional'
import { NextRequest, NextResponse } from 'next/server'

let mailchimpClient: Mailchimp.ApiClient | undefined

async function getMailchimpClient(): Promise<Mailchimp.ApiClient> {
    if (mailchimpClient) {
        return mailchimpClient
    }

    mailchimpClient = Mailchimp(process.env.MANDRILL_API_KEY as string)

    return mailchimpClient
}

export async function POST(req: NextRequest, res: NextResponse) {

    if (req.method === 'POST') {
        const { email, username } = await req.json();
        console.log(email, username)

        // Create a transporter object

        try {
            // Send the email
            const mailchimpClient = await getMailchimpClient()

            console.log("mailchimpclient: ", mailchimpClient)

            const response = await mailchimpClient.messages.send({
                message: {
                    from_email: 'ai@lux.network',
                    subject: '[mailchimp] Please verify your email address',
                    text: '!!!Suprize!!!',
                    to: [
                        {
                            email,
                            type: 'to',
                        },
                    ],
                },
            })
            console.log('Mailchimp responded with:')
            console.log(response)
            return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
        } catch (error) {
            console.error(error);
            return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Method Not allowed' }, { status: 405 });
    }
}