export function createWhatsAppUrl(phoneNumber: string, message: string): string {
  // Clean phone number: remove spaces, dashes, parentheses, plus
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export function openWhatsApp(phoneNumber: string, message: string): void {
  const url = createWhatsAppUrl(phoneNumber, message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
