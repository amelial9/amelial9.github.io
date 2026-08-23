import './Shelf.css';
import friends from '../../assets/shelf/friends.jpeg';
import graysAnatomy from '../../assets/shelf/graysanatomy.jpg';
import himym from '../../assets/shelf/howimetyourmother.jpg';
import loki from '../../assets/shelf/loki.jpg';
import siliconValley from '../../assets/shelf/siliconvalley.jpg';
import missionImpossible4 from '../../assets/shelf/missionimpossible4.jpg';
import topGun2 from '../../assets/shelf/topgun2.jpeg';

export const showsLabel = "Shows I've spent the most time on";
export const moviesLabel = 'Movies I rewatch too much';

export const shows = [
  { title: 'How I Met Your Mother', color: 'sand', poster: himym },
  { title: 'Loki', color: 'mocha', poster: loki },
  { title: "Grey's Anatomy", color: 'fog', poster: graysAnatomy },
  { title: 'Friends', color: 'taupe', poster: friends },
  { title: 'Silicon Valley', color: 'cream', poster: siliconValley },
];

export const movies = [
  { title: 'Top Gun: Maverick', color: 'oat', poster: topGun2 },
  { title: 'Mission: Impossible – Ghost Protocol', color: 'cocoa', poster: missionImpossible4 },
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

function Shelf() {
  return (
    <div className="shelf-section">
      <div className="section-title-wrapper">
        <h2 className="section-title">After Hours</h2>
      </div>
      <ShelfRow label={showsLabel} items={shows} kind="show" />
      <ShelfRow label={moviesLabel} items={movies} kind="movie" />
    </div>
  );
}

export default Shelf;
