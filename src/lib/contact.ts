export const contactEmail = 'bhargava.suryadevara@gmail.com'

export async function copyContactEmail(): Promise<string> {
  try {
    await navigator.clipboard.writeText(contactEmail)
    return 'Email copied'
  } catch {
    return 'Unable to copy. Please select and copy the email address manually.'
  }
}
