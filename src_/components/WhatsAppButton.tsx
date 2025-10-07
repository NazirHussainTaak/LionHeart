import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const phoneNumber = '971555589672'; // +971 55 558 9672 without + and spaces
  const message = encodeURIComponent('Hello! I would like to learn more about Lion Heart Computer System services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-[#25D366] hover:bg-[#20BA5A] text-white"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
