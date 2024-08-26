// from
// https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript
const formatSSN = (ssnString: string) => {
    var cleaned = ('' + ssnString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{2})(\d{4})$/)
    if (match) {
        return match[1] + '-' + match[2] + '-' + match[3]
    }
    return ssnString
}

export default formatSSN
