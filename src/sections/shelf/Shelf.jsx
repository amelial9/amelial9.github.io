import './Shelf.css';
import friends from '../../assets/shelf/friends.jpeg';
import graysAnatomy from '../../assets/shelf/graysanatomy.jpg';
import himym from '../../assets/shelf/howimetyourmother.jpg';
import loki from '../../assets/shelf/loki.jpg';
import siliconValley from '../../assets/shelf/siliconvalley.jpg';
import sky from '../../assets/shelf/sky.jpg';
import honorOfKings from '../../assets/shelf/honorofkings.jpg';
import drawGuess from '../../assets/shelf/drawandguess.jpg';

export const showsLabel = "Shows I've spent the most time on";
export const gamesLabel = 'Games';

export const shows = [
  { title: 'How I Met Your Mother', color: 'sand', poster: himym },
  { title: 'Loki', color: 'mocha', poster: loki },
  { title: "Grey's Anatomy", color: 'fog', poster: graysAnatomy },
  { title: 'Friends', color: 'taupe', poster: friends },
  { title: 'Silicon Valley', color: 'cream', poster: siliconValley },
];

export const games = [
  { title: 'Sky', art: sky, fit: 'cover', body: '#E7DCC5' },
  { title: 'Honor of Kings', art: honorOfKings, fit: 'contain', iconBg: '#f3f1ec', body: '#EAD3B6' },
  { title: 'Draw & Guess', art: drawGuess, fit: 'cover', body: '#DFD6C8' },
];

function Cover({ item }) {
  const color = item.color || 'cream';
  return (
    <div className={`cover cover-${color}`} tabIndex={0}>
      <div className="cover-title">{item.title}</div>
      <div className="cover-art">
        {item.poster ? (
          <img src={item.poster} alt={`${item.title} poster`} loading="lazy" />
        ) : (
          <div className="cover-art-blank" />
        )}
      </div>
    </div>
  );
}

function ShelfRow({ label, items, kind }) {
  return (
    <div className={`shelf-row shelf-row-${kind}`}>
      <p className="shelf-label">{label}</p>
      <div className="shelf-items">
        {items.map((item, i) => (
          <Cover key={`${kind}-${i}`} item={item} />
        ))}
      </div>
      <div className="shelf-ledge" />
    </div>
  );
}

// pixel d-pad + buttons for the little section label
function ControllerIcon() {
  return (
    <svg className="games-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="3" width="2" height="6" />
      <rect x="7" y="5" width="6" height="2" />
      <rect x="15" y="4" width="2" height="2" />
      <rect x="18" y="7" width="2" height="2" />
      <rect x="15" y="10" width="2" height="2" />
      <rect x="12" y="7" width="2" height="2" />
      <rect x="3" y="13" width="18" height="8" rx="2" />
      <rect x="6" y="16" width="2" height="2" fill="var(--shelf-cream)" />
      <rect x="16" y="16" width="2" height="2" fill="var(--shelf-cream)" />
    </svg>
  );
}

// each game as its own horizontal handheld (d-pad · screen · buttons)
function Handheld({ item }) {
  return (
    <div className="gb-unit">
      <div className="gb" style={{ '--gb-body': item.body }} tabIndex={0}>
        <div className="gb-left" aria-hidden="true">
          <span className="gb-led" />
          <span className="gb-dpad" />
        </div>

        <span className="gb-screen">
          <span className="gb-iconwrap" style={{ '--icon-bg': item.iconBg || '#20242c' }}>
            <img
              className={`gb-icon fit-${item.fit || 'cover'}`}
              src={item.art}
              alt={`${item.title} icon`}
              loading="lazy"
            />
          </span>
        </span>

        <div className="gb-right" aria-hidden="true">
          <span className="gb-ab">
            <span className="gb-btn">B</span>
            <span className="gb-btn">A</span>
          </span>
          <span className="gb-speaker"><i /><i /><i /></span>
        </div>
      </div>
      <span className="gb-title">{item.title}</span>
    </div>
  );
}

function ConsolesBlock({ label, items }) {
  return (
    <div className="games-block">
      <p className="games-label">
        <ControllerIcon />
        {label}
      </p>
      <div className="consoles-grid">
        {items.map((item, i) => (
          <Handheld key={`game-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function Shelf() {
  return (
    <div className="shelf-section">
      <div className="section-title-wrapper">
        <h2 className="section-title">After Hours</h2>
      </div>
      <ShelfRow label={showsLabel} items={shows} kind="show" />
      <ConsolesBlock label={gamesLabel} items={games} />
    </div>
  );
}

export default Shelf;
