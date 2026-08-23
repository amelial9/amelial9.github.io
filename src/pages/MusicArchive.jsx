import '../App.css'

import VerticalNav from '../components/VerticalNav'
import CoverFlow from '../sections/music/CoverFlow'

function MusicArchive() {
  return (
    <>
      <VerticalNav />

      <div className="main-content">
        <br></br>

        <section id="music-archive">
          <CoverFlow />
        </section>

        <br></br>
        <br></br>
        <br></br>

        <footer style={{ textAlign: 'center', padding: '10px', fontSize: '14px', color: '#473C35' }}>
          <p>© 2026 Amelia Li</p>
        </footer>
      </div>
    </>
  )
}

export default MusicArchive
