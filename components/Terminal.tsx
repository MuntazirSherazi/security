import React, { useState, useRef, useEffect } from 'react';
import { generateSecurityResponse } from '../services/gemini';
import { ChatMessage } from '../types';
import { TerminalIcon, Activity } from './Icons';

export const Terminal: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: 'PENTEST_OS v4.0.2 [Secure Connection Established]\nAuthenticating User... Verified.\nAwaiting command inputs for threat analysis.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Format history for the service
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await generateSecurityResponse(history, userMsg.text);

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 font-mono relative group">
      {/* Decorative Border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      
      <div className="relative bg-black border border-red-900/50 rounded-lg overflow-hidden shadow-2xl shadow-red-900/20">
        {/* Header */}
        <div className="bg-red-950/20 border-b border-red-900/50 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-red-500">
            <TerminalIcon className="w-5 h-5" />
            <span className="text-sm font-bold tracking-widest">PENTEST_TERMINAL_ACCESS</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-600/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-600/50"></div>
          </div>
        </div>

        {/* Output Area */}
        <div 
          ref={scrollRef}
          className="h-[400px] overflow-y-auto p-4 space-y-4 bg-black/95 text-sm"
        >
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[80%] rounded p-3 border ${
                msg.role === 'user' 
                  ? 'bg-red-900/10 border-red-800 text-red-100' 
                  : 'bg-neutral-900 border-neutral-700 text-green-500'
              }`}>
                <div className="text-xs opacity-50 mb-1 mb-2 border-b border-dashed border-opacity-20 border-current pb-1">
                  {msg.role === 'user' ? '> OPERATOR' : '> PENTEST_AI'} [{msg.timestamp.toLocaleTimeString()}]
                </div>
                <pre className="whitespace-pre-wrap font-mono leading-relaxed">{msg.text}</pre>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-start">
               <div className="bg-neutral-900 border border-neutral-700 text-green-500 rounded p-3 flex items-center gap-2">
                 <Activity className="w-4 h-4 animate-spin" />
                 <span>Decrypting response...</span>
               </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="border-t border-red-900/50 bg-black p-4 flex gap-2">
          <span className="text-red-500 font-bold self-center">{'>'}</span>
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter command or query (e.g., 'Explain SQL Injection' or 'Check this code')"
            className="flex-1 bg-transparent border-none outline-none text-red-100 placeholder-red-900/50 font-mono"
            autoComplete="off"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="px-4 py-1 bg-red-900/30 text-red-500 border border-red-800 hover:bg-red-800 hover:text-red-100 transition-colors uppercase text-xs tracking-wider"
          >
            Execute
          </button>
        </form>
      </div>
    </div>
  );
};