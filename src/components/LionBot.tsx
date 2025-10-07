import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Phone, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const LionBot = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: i18n.language === "ar" 
        ? "مرحباً! أنا LionBot 🦁، مساعدك الذكي المدعوم بالذكاء الاصطناعي. كيف يمكنني مساعدتك اليوم؟"
        : "Hello! I'm LionBot 🦁, your AI-powered assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const quickActions = [
    {
      icon: MessageSquare,
      label: i18n.language === "ar" ? "طلب عرض أسعار" : "Request Quote",
      action: () => handleQuickAction(i18n.language === "ar" ? "أريد طلب عرض أسعار" : "I'd like to request a quote")
    },
    {
      icon: Phone,
      label: i18n.language === "ar" ? "التواصل عبر واتساب" : "Contact via WhatsApp",
      action: () => window.open("https://wa.me/971555589672", "_blank")
    },
    {
      icon: Calendar,
      label: i18n.language === "ar" ? "جدولة اجتماع" : "Schedule Meeting",
      action: () => handleQuickAction(i18n.language === "ar" ? "أريد جدولة اجتماع" : "I'd like to schedule a meeting")
    }
  ];

  const streamAIResponse = async (userMessage: string) => {
    const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-bot`;
    
    // Add user message
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsTyping(true);

    // Cancel any previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ 
          messages: [...messages, { role: "user", content: userMessage }],
          language: i18n.language 
        }),
        signal: abortControllerRef.current.signal,
      });

      if (resp.status === 429) {
        toast({
          title: i18n.language === "ar" ? "تم تجاوز الحد" : "Rate Limit",
          description: i18n.language === "ar" 
            ? "الرجاء المحاولة مرة أخرى لاحقاً"
            : "Please try again later",
          variant: "destructive",
        });
        setIsTyping(false);
        return;
      }

      if (resp.status === 402) {
        toast({
          title: i18n.language === "ar" ? "خدمة غير متاحة" : "Service Unavailable",
          description: i18n.language === "ar" 
            ? "الرجاء الاتصال بالدعم"
            : "Please contact support",
          variant: "destructive",
        });
        setIsTyping(false);
        return;
      }

      if (!resp.ok || !resp.body) {
        throw new Error("Failed to start stream");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;
      let assistantMessage = "";

      // Add empty assistant message
      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantMessage += content;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  role: "assistant",
                  content: assistantMessage
                };
                return newMessages;
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      setIsTyping(false);
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Request aborted');
        return;
      }
      console.error("Error streaming AI response:", error);
      toast({
        title: i18n.language === "ar" ? "خطأ" : "Error",
        description: i18n.language === "ar" 
          ? "فشل في الاتصال بالمساعد الذكي"
          : "Failed to connect to AI assistant",
        variant: "destructive",
      });
      setIsTyping(false);
    }
  };

  const handleQuickAction = (message: string) => {
    streamAIResponse(message);
  };

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    streamAIResponse(input.trim());
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)]"
          >
            <Card className="bg-card dark:bg-neutral-900 border-border shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center text-2xl">
                    🦁
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">LionBot</h3>
                    <p className="text-xs text-white/90">
                      {i18n.language === "ar" ? "متصل الآن" : "Online now"}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Messages */}
              <ScrollArea className="h-[400px] p-4 bg-background dark:bg-neutral-950" ref={scrollRef}>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-muted p-3 rounded-2xl">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>

              {/* Quick Actions */}
              <div className="p-3 bg-muted/30 border-t border-border">
                <div className="grid grid-cols-3 gap-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={action.action}
                      className="text-xs h-auto py-2 flex flex-col items-center gap-1"
                    >
                      <action.icon className="h-4 w-4" />
                      <span className="text-[10px] leading-tight text-center">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-background dark:bg-neutral-900">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder={i18n.language === "ar" ? "اكتب رسالتك..." : "Type your message..."}
                    className="flex-1"
                  />
                  <Button onClick={handleSend} size="icon" disabled={!input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-primary to-accent hover:shadow-primary/50 transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="h-6 w-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </>
  );
};

export default LionBot;
