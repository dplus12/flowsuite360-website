export const WHATSAPP_NUMBER = "243891111125";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Bonjour, je souhaite avoir une démonstration de FlowSuite360 pour mon activité.";

// Alias conservé temporairement pour éviter de casser un ancien import si un fichier l’utilise encore.
export const TODO_WHATSAPP_NUMBER = WHATSAPP_NUMBER;
export const WHATSAPP_MESSAGE = DEFAULT_WHATSAPP_MESSAGE;

export function getWhatsAppHref(message = DEFAULT_WHATSAPP_MESSAGE) {
  const encodedMessage = encodeURIComponent(message);

  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
}
