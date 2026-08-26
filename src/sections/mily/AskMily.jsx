import { useState, useRef, useEffect } from 'react';
import { Client } from '@gradio/client';
import './AskMily.css';

// Public Hugging Face Space backing Mily. Endpoint /respond takes { message }
// and streams back the answer text.
const SPACE = 'amelial9/milybot';

// Keep these in sync with the `examples` list in the milybot Space's app.py.
const SUGGESTIONS = [
  'Who is Amelia?',
  'Where did Amelia work at?',
  'Any fun facts about Amelia?',
];

function AskMily() {
  const [messages, setMessages] = useState([]); // { role: 'user' | 'mily', text }
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const clientRef = useRef(null);
  const chatRef = useRef(null);

  // keep the chat scrolled to the newest message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  async function getClient() {
    if (!clientRef.current) {
      clientRef.current = await Client.connect(SPACE);
    }
    return clientRef.current;
  }

  async function send(text) {
    const q = (text ?? input).trim();
    if (!q || busy) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', text: q }, { role: 'mily', text: '' }]);
    setBusy(true);
    try {
      const client = await getClient();
      const submission = client.submit('/respond', { message: q });
      let got = '';
      for await (const ev of submission) {
        if (ev.type === 'data') {
          const ans = Array.isArray(ev.data) ? ev.data[0] : ev.data;
          got = String(ans ?? '');
          setMessages((m) => {
            const copy = [...m];
            copy[copy.length - 1] = { role: 'mily', text: got };
            return copy;
          });
        }
      }
      // stream ended but nothing came back (backend error / aborted GPU task)
      if (!got.trim()) {
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: 'mily',
            text: "hmm, i couldn't come up with a reply just then — mind trying again?",
          };
          return copy;
        });
      }
    } catch (e) {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: 'mily',
          text: "sorry — couldn't reach me just now. i might've been asleep; give it a few seconds and try again.",
        };
        return copy;
      });
    } finally {
      setBusy(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="mily-section">
      <div className="section-title-wrapper">
        <h2 className="section-title">Ask Mily</h2>
      </div>
      <p className="mily-sub">
        my little AI assistant; ask Mily about my work, projects, or what I'm into.
      </p>

      <div className="mily-window">
        <div className="mily-chat" ref={chatRef}>
          {messages.length === 0 && (
            <div className="mily-empty">
              👋 hi, i'm Mily. ask me anything about Amelia.
            </div>
          )}
          {messages.map((m, i) => {
            const isLast = i === messages.length - 1;
            const showTyping = m.role === 'mily' && m.text === '' && busy && isLast;
            return (
              <div key={i} className={`mily-msg mily-msg-${m.role}`}>
                {showTyping ? (
                  <span className="mily-typing"><i /><i /><i /></span>
                ) : (
                  m.text
                )}
              </div>
            );
          })}
        </div>

        <div className="mily-suggests">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              className="mily-chip"
              onClick={() => send(s)}
              disabled={busy}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mily-input-row">
          <input
            className="mily-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="ask Mily something..."
            aria-label="Ask Mily something"
          />
          <button
            className="mily-send"
            onClick={() => send()}
            disabled={busy || !input.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default AskMily;
