import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you with your real estate needs today?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
    };
    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you find your dream property. Could you tell me what area you're interested in?",
        "Our agents are experts in luxury properties. Would you like me to connect you with one of our specialists?",
        "We have several new listings that might interest you. Would you like to see our featured properties?",
        "Thank you for your interest! I'll have one of our agents contact you shortly to discuss your needs in detail.",
        "We offer virtual tours for many of our properties. Would you like to schedule one?",
      ];

      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        isBot: true,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-taupe text-white shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        data-oid="ex1arrf"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" data-oid="d_20u5k" />
        ) : (
          <ChatBubbleLeftRightIcon className="h-6 w-6" data-oid="c6-a_3d" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence data-oid="f3chiac">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-white dark:bg-brown-dark rounded-lg shadow-xl overflow-hidden"
            data-oid="spaqnr-"
          >
            {/* Chat Header */}
            <div
              className="bg-taupe text-white p-4 flex items-center justify-between"
              data-oid="wos9fec"
            >
              <div className="flex items-center" data-oid="_wrbegb">
                <div
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3"
                  data-oid="rum82mz"
                >
                  <ChatBubbleLeftRightIcon
                    className="h-5 w-5"
                    data-oid="mdqotb-"
                  />
                </div>
                <div data-oid="39ms-mu">
                  <h3 className="font-heading font-bold" data-oid="kqw:d-t">
                    UrbanEdge Assistant
                  </h3>
                  <p className="text-xs opacity-80" data-oid="ve4vkro">
                    Online | Typically replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:text-beige-light transition-colors"
                aria-label="Close chat"
                data-oid="7nlf8yt"
              >
                <XMarkIcon className="h-6 w-6" data-oid="0gg12ri" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="p-4 h-80 overflow-y-auto bg-beige-light/50 dark:bg-brown/50"
              data-oid="0b6izq_"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                  data-oid="9m9dc39"
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isBot
                        ? "bg-white dark:bg-brown-dark text-brown-dark dark:text-beige-light rounded-tl-none"
                        : "bg-taupe text-white rounded-tr-none"
                    }`}
                    data-oid="j:grixo"
                  >
                    <p className="text-sm" data-oid="di_sgf3">
                      {message.text}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="mb-4 flex justify-start" data-oid="o:lrp_o">
                  <div
                    className="bg-white dark:bg-brown-dark text-brown-dark dark:text-beige-light rounded-lg rounded-tl-none p-3"
                    data-oid="9_42o.4"
                  >
                    <div className="flex space-x-1" data-oid="o5hpytm">
                      <div
                        className="w-2 h-2 bg-taupe rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                        data-oid="mq9nd-q"
                      ></div>
                      <div
                        className="w-2 h-2 bg-taupe rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                        data-oid="49u:r2b"
                      ></div>
                      <div
                        className="w-2 h-2 bg-taupe rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                        data-oid="b0l6mlm"
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} data-oid="d.vste4" />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-beige-medium dark:border-brown"
              data-oid="vclrsmk"
            >
              <div className="flex items-center" data-oid="-.4rtvy">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-grow p-2 rounded-l-md border border-r-0 border-beige-medium dark:border-brown focus:outline-none focus:ring-1 focus:ring-taupe bg-white dark:bg-brown-dark text-brown-dark dark:text-beige-light"
                  data-oid="b_20hca"
                />

                <button
                  type="submit"
                  className="bg-taupe text-white p-2 rounded-r-md border border-taupe hover:bg-brown transition-colors"
                  aria-label="Send message"
                  data-oid="9rlnzk-"
                >
                  <PaperAirplaneIcon className="h-5 w-5" data-oid="wha28bf" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
