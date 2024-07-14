interface ContactInfo {
  email: string
  phone?: string
}

type ContactInfoFields = keyof ContactInfo

export {
  type ContactInfo,
  type ContactInfoFields
}