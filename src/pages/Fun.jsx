import '../App.css'

import VerticalNav from '../components/VerticalNav'
import AskMily from '../sections/mily/AskMily'
import Shelf from '../sections/shelf/Shelf'
import Boombox from '../sections/music/Boombox'

function Fun() {
  return (
    <>
      <VerticalNav />

      <div className="main-content">
        <br></br>

        <section id="mily">
          <AskMily />
        </section>

        <br></br>
        <br></br>
        <br></br>

        <section id="music">
          <Boombox />
        </section>

        <br></br>
        <br></br>
        <br></br>

        <section id="shelf">
          <Shelf />
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

export default Fun
