function isValidEmail(email: string) {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const sendEmail = async (email: string, token: string) => {
    let valid = true
    if (!isValidEmail(email)) {
        valid = false
    }

    if (valid) {
        try {
            const response = await fetch('/api/invitation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, token })
            })

            if (response.ok) {
                console.log('Email sent successfully')
            } else {
                console.error('Error sending email')
            }
        } catch (error) {
            console.error(error);
        }
    }
}