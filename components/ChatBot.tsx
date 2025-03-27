"use client";

import { useState } from "react";
import { Send, MessageCircle, X } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // 애니메이션 시간과 동일하게 설정
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 사용자 메시지 추가
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // 여기에 챗봇 응답 로직 추가
    // 예시로 간단한 응답만 구현
    const botMessage: Message = {
      role: "bot",
      content: "봄봄 블로그에 오신 것을 환영해요! 무엇이든 물어보세요 ✨",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div
          className={`w-80 bg-white rounded-lg shadow-lg origin-bottom-right
            ${isClosing ? "animate-scale-down" : "animate-scale-up"}`}
        >
          <div className="p-4 border-b flex justify-between items-center bg-primary-light">
            <h3 className="text-lg font-semibold text-primary-foreground">
              무엇을 도와드릴까요? 😊
            </h3>
            <button
              onClick={handleClose}
              className="p-1 hover:bg-primary/10 rounded-full text-primary-foreground"
            >
              <X size={20} />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-primary text-white"
                      : "bg-primary-light text-primary-foreground"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="메시지를 입력하세요..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
