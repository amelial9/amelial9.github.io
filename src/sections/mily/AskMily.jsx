import { useState, useRef, useEffect } from 'react';
import { Client } from '@gradio/client';
import './AskMily.css';

// Public Hugging Face Space backing Mily. Endpoint /respond takes { message }
// and streams back the answer text.
const SPACE = 'amelial9/milybot';

// Keep these in sync with the `examples` list in the milybot Space's app.py.
// tiny cat face for Mily, drawn to match the cat cursor
function MilyFace({ size = 'sm' }) {
  return (
    <svg className={`mily-face mily-face-${size}`} viewBox="0 0 32 30" aria-hidden="true">
      <path
        className="mily-cat"
        d="M5 26 C2.5 22 2.5 17 4 13 L3.5 3.5 L11 8.5 C14 7.6 18 7.6 21 8.5 L28.5 3.5 L28 13 C29.5 17 29.5 22 27 26 C23 29 9 29 5 26 Z"
      />
      <g className="mily-eyes">
        <circle cx="11.5" cy="17" r="1.4" />
        <circle cx="20.5" cy="17" r="1.4" />
      </g>
      <path className="mily-line" d="M14 20.5 Q15 21.8 16 20.5 Q17 21.8 18 20.5" />
      <path className="mily-line" d="M1 17.5 L5.5 18.5 M1 21 L5.5 20.5 M31 17.5 L26.5 18.5 M31 21 L26.5 20.5" />
    </svg>
  );
}

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
        <div className="mily-head">
          <MilyFace />
          <span className="mily-name">Mily</span>
        </div>

        <div className="mily-chat" ref={chatRef}>
          {messages.length === 0 && (
            <div className="mily-empty">
              <MilyFace size="lg" />
              <span>hi, i&apos;m Mily! ask me anything about Amelia.</span>
            </div>
          )}
          {messages.map((m, i) => {
            const isLast = i === messages.length - 1;
            const showTyping = m.role === 'mily' && m.text === '' && busy && isLast;
            const bubble = (
              <div className={`mily-msg mily-msg-${m.role}`}>
                {showTyping ? (
                  <span className="mily-typing"><i /><i /><i /></span>
                ) : (
                  m.text
                )}
              </div>
            );
            return m.role === 'mily' ? (
              <div key={i} className="mily-row">
                <MilyFace />
                {bubble}
              </div>
            ) : (
              <div key={i} className="mily-row mily-row-user">{bubble}</div>
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
            aria-label="Send"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AskMily;
