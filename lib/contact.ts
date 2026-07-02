export const TODO_WHATSAPP_NUMBER = "243891111125";

export const WHATSAPP_MESSAGE =
  "Bonjour, je souhaite avoir une démonstration de FlowSuite360 pour mon activité.";

export function getWhatsAppHref() {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  return TODO_WHATSAPP_NUMBER
    ? `https://wa.me/${TODO_WHATSAPP_NUMBER}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
}
