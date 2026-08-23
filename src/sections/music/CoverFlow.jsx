import { useState, useRef, useEffect, useCallback } from 'react';
import './CoverFlow.css';
import { tracks, TOKENS } from './musicData';

function CoverFlow() {
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);
  const [center, setCenter] = useState(0);

  const recompute = useCallback(() => {
    const sc = scrollerRef.current;
    if (!sc) return;
    const mid = sc.scrollLeft + sc.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const c = el.offsetLeft + el.offsetWidth / 2;
      const d = Math.abs(c - mid);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    setCenter(best);
  }, []);

  useEffect(() => {
    const sc = scrollerRef.current;
    if (!sc) return;
    const onScroll = () => recompute();
    sc.addEventListener('scroll', onScroll, { passive: true });
    recompute();
    return () => sc.removeEventListener('scroll', onScroll);
  }, [recompute]);

  const scrollTo = (i) => {
    const el = cardRefs.current[i];
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const active = tracks[center] || {};

  return (
    <div className="cf-section" style={{ '--now': TOKENS[active.color] || TOKENS.sand }}>
      <div className="section-title-wrapper">
        <h2 className="section-title">On Repeat</h2>
      </div>

      <div className="cf-track" ref={scrollerRef}>
        {tracks.map((t, i) => {
          const d = i - center;
          const ad = Math.abs(d);
          const style = {
            '--accent': TOKENS[t.color] || TOKENS.sand,
            transform: `scale(${Math.max(0.72, 1 - ad * 0.14)}) rotateY(${Math.max(-26, Math.min(26, -d * 16))}deg)`,
            opacity: Math.max(0.35, 1 - ad * 0.32),
            zIndex: 100 - ad,
          };
          return (
            <button
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`cf-card ${i === center ? 'is-center' : ''}`}
              style={style}
              onClick={() => scrollTo(i)}
            >
              <span className="cf-art">
                {t.cover ? <img src={t.cover} alt={`${t.title} cover`} /> : <span className="cf-note">♪</span>}
              </span>
            </button>
          );
        })}
      </div>

      <div className="cf-meta">
        <div className="cf-title">{active.title}</div>
        <div className="cf-artist">{active.artist}</div>
      </div>
    </div>
  );
}

export default CoverFlow;
