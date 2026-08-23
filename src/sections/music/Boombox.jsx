import { useState, useRef, useEffect } from 'react';
import './Boombox.css';
import { musicTitle, tracks, TOKENS } from './musicData';

function Equalizer({ playing }) {
  return (
    <span className={`eq ${playing ? 'eq-on' : ''}`} aria-hidden="true">
      <span></span><span></span><span></span><span></span>
    </span>
  );
}

// icons
const IconPrev = () => (
  <svg viewBox="0 0 24 24" className="ctrl-icon"><path d="M7 5v14M20 5 9 12l11 7z" /></svg>
);
const IconNext = () => (
  <svg viewBox="0 0 24 24" className="ctrl-icon"><path d="M17 5v14M4 5l11 7L4 19z" /></svg>
);
const IconPlay = () => (
  <svg viewBox="0 0 24 24" className="ctrl-icon"><path d="M6 4l14 8L6 20z" /></svg>
);
const IconPause = () => (
  <svg viewBox="0 0 24 24" className="ctrl-icon"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
);

function Boombox() {
  const [current, setCurrent] = useState(null);   // no song selected initially
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const track = current != null ? tracks[current] : null;
  const glow = track ? (TOKENS[track.color] || TOKENS.sand) : TOKENS.stone;
  const hasSel = current != null;

  // drive the (optional) real audio element
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (hasSel && track?.src) {
      if (playing) a.play().catch(() => {});
      else a.pause();
    } else {
      a.pause();
    }
  }, [current, playing, hasSel, track]);

  const select = (i) => {
    setCurrent(i);
    setPlaying(true);
  };
  const togglePlay = () => { if (hasSel) setPlaying((p) => !p); };
  const step = (dir) => {
    if (!hasSel) return;
    setCurrent((c) => (c + dir + tracks.length) % tracks.length);
    setPlaying(true);
  };

  return (
    <div className="bb2-section" style={{ '--now': glow }}>
      <div className="section-title-wrapper">
        <h2 className="section-title">{musicTitle}</h2>
      </div>

      <div className="bb2-device">
        <div className="bb2-handle" />
        <div className="bb2-body">
          {/* screen: album art (left) + list (right) */}
          <div className="bb2-screen">
            <div className="bb2-art">
              {track?.cover ? (
                <img src={track.cover} alt={`${track.title} album art`} />
              ) : (
                <span className="bb2-art-empty" aria-hidden="true" />
              )}
            </div>
            <div className="bb2-screenmain">
            <div className="bb2-nowline">
              <Equalizer playing={playing && hasSel} />
              <span className="bb2-nowtext">
                {track ? (
                  <>
                    <strong>{track.title}</strong>
                    <em>{track.artist}</em>
                  </>
                ) : (
                  <strong className="bb2-idle">— nothing playing —</strong>
                )}
              </span>
            </div>
            <ul className="bb2-list">
              {tracks.map((t, i) => {
                const active = i === current;
                return (
                  <li key={i}>
                    <button
                      className={`bb2-row ${active ? 'is-active' : ''}`}
                      style={{ '--accent': TOKENS[t.color] || TOKENS.sand }}
                      onClick={() => select(i)}
                    >
                      <span className="bb2-row-icon">
                        {active ? <Equalizer playing={playing} /> : <span className="bb2-num">{i + 1}</span>}
                      </span>
                      <span className="bb2-row-meta">
                        <span className="bb2-row-title">{t.title}</span>
                        <span className="bb2-row-artist">{t.artist}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            </div>
          </div>

          {/* panel: speaker · controls · speaker */}
          <div className="bb2-panel">
            <span className="bb2-speaker" />
            <div className={`bb2-controls ${hasSel ? '' : 'is-disabled'}`}>
              <button className="ctrl" onClick={() => step(-1)} disabled={!hasSel} aria-label="Previous">
                <IconPrev />
              </button>
              <button className="ctrl ctrl-main" onClick={togglePlay} disabled={!hasSel}
                      aria-label={playing ? 'Pause' : 'Play'}>
                {playing && hasSel ? <IconPause /> : <IconPlay />}
              </button>
              <button className="ctrl" onClick={() => step(1)} disabled={!hasSel} aria-label="Next">
                <IconNext />
              </button>
            </div>
            <span className="bb2-speaker" />
          </div>
        </div>
        {track?.src && (
          <audio ref={audioRef} src={track.src} onEnded={() => setPlaying(false)} />
        )}
      </div>
    </div>
  );
}

export default Boombox;
