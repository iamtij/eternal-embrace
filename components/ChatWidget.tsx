import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const CHAT_URL = 'https://chty.lovable.app/chat/eternal-embrace';

export const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-3"
      aria-live="polite"
    >
      {open && (
        <div
          id="chty-chat-panel"
          className="relative w-[min(400px,calc(100vw-2rem))] h-[min(600px,70vh)] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] overflow-hidden bg-white"
          role="dialog"
          aria-label="Chat"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-600 shadow-md hover:bg-slate-50 hover:text-slate-900 transition-colors"
            aria-label="Close chat"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
          <iframe
            title="Eternal Embrace chat"
            src={CHAT_URL}
            className="h-full w-full border-0"
            allow="clipboard-write"
          />
        </div>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex max-w-[calc(100vw-2.5rem)] items-center gap-3 rounded-full border border-slate-200 bg-white py-3 pl-4 pr-5 text-left shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99] touch-manipulation"
          aria-haspopup="dialog"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white shadow-md">
            <MessageCircle size={22} strokeWidth={2} />
          </span>
          <span className="font-semibold text-slate-800 text-sm sm:text-base pr-1">
            Hi! How can I help you?
          </span>
        </button>
      )}
    </div>
  );
};
