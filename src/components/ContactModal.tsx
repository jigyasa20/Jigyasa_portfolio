import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, Mail, Send, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const emailAddress = 'jigyasa.eth@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#111113] border border-[#25282e] rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 text-[#D7E2EA]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-xs uppercase tracking-widest text-[#D7E2EA] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>Say Hello</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Let&apos;s Make Something Cool
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-light mt-2 leading-relaxed">
                Got a project, campaign, event or wild idea? Tell me what you&apos;re working on. I’ll bring the ideas, the content and probably a little chaos. Hit me up - I reply fast.
              </p>
            </div>

            {/* Direct Email Pill */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 mb-6">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-zinc-300 truncate">
                  {emailAddress}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white transition-colors shrink-0 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Form or Success message */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">Message Landed!</h4>
                <p className="text-sm text-zinc-400">Thanks for reaching out! I&apos;ll get back to you in no time.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                    What should I call you?
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-purple-500 focus:outline-none text-white text-sm placeholder-zinc-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-purple-500 focus:outline-none text-white text-sm placeholder-zinc-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                    What&apos;s on your mind?
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, campaign, or event..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-purple-500 focus:outline-none text-white text-sm placeholder-zinc-600 resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                    outline: '2px solid #FFFFFF',
                    outlineOffset: '-3px',
                  }}
                >
                  <span>Send It Over</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
