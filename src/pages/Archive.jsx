import { Link } from 'react-router-dom'
import '../App.css'
import './Archive.css'

import VerticalNav from '../components/VerticalNav'

// ─────────────────────────────────────────────────────────────
//  EDIT ME: hidden pages listed on /archive. One line per entry.
//  `to` is an in-site route; use `href` instead for an external link.
// ─────────────────────────────────────────────────────────────
const entries = [
  { label: 'Research',      to: '/research' },
  { label: 'Music archive', to: '/archive/music' },
];

function Archive() {
  return (
    <>
      <VerticalNav />

      <div className="main-content">
        <div className="archive">
          <h2 className="section-title archive-title">Archive</h2>
          <ul className="archive-list">
            {entries.map((e) => (
              <li key={e.label}>
                {e.to
                  ? <Link to={e.to} className="archive-link">{e.label}</Link>
                  : <a href={e.href} className="archive-link" target="_blank" rel="noopener noreferrer">{e.label}</a>}
              </li>
            ))}
          </ul>
        </div>

        <footer style={{ textAlign: 'center', padding: '10px', fontSize: '14px', color: '#473C35' }}>
          <p>© 2026 Amelia Li</p>
        </footer>
      </div>
    </>
  )
}

export default Archive
