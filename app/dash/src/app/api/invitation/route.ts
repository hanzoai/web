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
        const { email, token } = await req.json();

        // Create a transporter object
        console.log('email', email)
        console.log('token', token)

        try {
            // Send the email
            const mailchimpClient = await getMailchimpClient()

            const response = await mailchimpClient.messages.send({
                message: {
                    from_email: 'ai@hanzo.ai',
                    subject: '[mailchimp] Please verify your email address',
                    text: `!!!Suprize!!! \n Go to https://dash.hanzo.ai/?token=${token}`,
                    to: [
                        {
                            email: email,
                            type: 'to',
                        },
                    ],
                },
            })

            const response_status = JSON.parse(JSON.stringify(response)).length > 0 ?
                JSON.parse(JSON.stringify(response))[0].status : JSON.parse(JSON.stringify(response)).status

            console.log(response)

            if (response_status === 'sent')
                return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
            else
                return NextResponse.json({ message: 'Error sending email' }, { status: response_status })
        } catch (error) {
            console.error(error);
            return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Method Not allowed' }, { status: 405 });
    }
}