import React, { useState } from 'react';
import { Maximize2, MessageCircle, Minimize2, X } from 'lucide-react';

const CHAT_URL = 'https://chty.lovable.app/chat/eternal-embrace';

export const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const closeChat = () => {
    setOpen(false);
    setFullscreen(false);
  };

  return (
    <div
      className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-3"
      aria-live="polite"
    >
      {open && (
        <div
          id="chty-chat-panel"
          className={
            fullscreen
              ? 'fixed inset-0 z-[10000] flex h-[100dvh] w-full flex-col overflow-hidden rounded-none bg-white shadow-none'
              : 'relative flex h-[min(600px,70vh)] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)]'
          }
          role="dialog"
          aria-label="Chat"
          aria-modal={fullscreen ? 'true' : undefined}
        >
          <div className="absolute top-2 right-2 z-10 flex items-center gap-1">
            <button
              type="button"
              onClick={() => setFullscreen((f) => !f)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-600 shadow-md transition-colors hover:bg-slate-50 hover:text-slate-900"
              aria-label={fullscreen ? 'Exit full screen' : 'Full screen'}
            >
              {fullscreen ? (
                <Minimize2 size={18} strokeWidth={2.5} />
              ) : (
                <Maximize2 size={18} strokeWidth={2.5} />
              )}
            </button>
            <button
              type="button"
              onClick={closeChat}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-600 shadow-md transition-colors hover:bg-slate-50 hover:text-slate-900"
              aria-label="Close chat"
            >
              <X size={18} strokeWidth={2.5} />
            </button>
          </div>
          <iframe
            title="Eternal Embrace chat"
            src={CHAT_URL}
            className="min-h-0 flex-1 w-full border-0"
            allow="clipboard-write"
          />
        </div>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setFullscreen(false);
          }}
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
