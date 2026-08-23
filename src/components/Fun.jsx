import '../App.css'

import VerticalNav from './VerticalNav'
import Shelf from './shelf/Shelf'

function Fun() {
  return (
    <>
      <VerticalNav />

      <div className="main-content">
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
