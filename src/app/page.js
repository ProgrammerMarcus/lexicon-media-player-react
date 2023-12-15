import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <nav className={styles["navbar"]}>
        <span className={styles["material-icons"]}>arrow_back_ios_new</span>
        <p>Playlist - Generic Playlist (3)</p>
        <span className={styles["material-icons"]}>more_vert</span>
      </nav><div className={styles["root"]}>
        <aside className={styles["tracks"]}>
          <div className={styles["info-item"]}>
            <img className={styles["info-image"]} src="/assets/cover/drums.jpg" alt="Album cover" />
            <div className={styles["info"]}>
              <p className={styles["info-artist"]}>Super Rockstar</p>
              <p className={styles["info-title"]}>Crowd Apocalypse</p>
            </div>
            <span className={styles["material-icons"]}>play_circle</span>
          </div>
          <div className={styles["info-item"]}>
            <img className={styles["info-image"]} src="/assets/cover/colorful.jpg" alt="Album cover" />
            <div className={styles["info"]}>
              <p className={styles["info-artist"]}>Colorful Musicman</p>
              <p className={styles["info-title"]}>The color of P.A.I.N.</p>
            </div>
            <span className={styles["material-icons"]}>play_circle</span>
          </div>
          <div className={styles["info-item"]}>
            <img className={styles["info-image"]} src="/assets/cover/demon.jpg" alt="Album cover" />
            <div className={styles["info"]}>
              <p className={styles["info-artist"]}>John Smith</p>
              <p className={styles["info-title"]}>Space Adventure</p>
            </div>
            <span className={styles["material-icons"]}>play_circle</span>
          </div>
          <div className={styles["info-item"]}>
            <img className={styles["info-image"]} src="/assets/cover/drums.jpg" alt="Album cover" />
            <div className={styles["info"]}>
              <p className={styles["info-artist"]}>Super Rockstar</p>
              <p className={styles["info-title"]}>Why is my face</p>
            </div>
            <span className={styles["material-icons"]}>play_circle</span>
          </div>
          <div className={styles["info-item"]}>
            <img className={styles["info-image"]} src="/assets/cover/future.jpg" alt="Album cover" />
            <div className={styles["info"]}>
              <p className={styles["info-artist"]}>Music Person 3</p>
              <p className={styles["info-title"]}>Giant Face</p>
            </div>
            <span className={styles["material-icons"]}>play_circle</span>
          </div>
          <div className={styles["info-item"]}>
            <img className={styles["info-image"]} src="/assets/cover/moon.jpg" alt="Album cover" />
            <div className={styles["info"]}>
              <p className={styles["info-artist"]}>Dr. Warewolf</p>
              <p className={styles["info-title"]}>Bright Moon</p>
            </div>
            <span className={styles["material-icons"]}>play_circle</span>
          </div>
          <div className={styles["info-item"]}>
            <img className={styles["info-image"]} src="/assets/cover/greyscale.jpg" alt="Album cover" />
            <div className={styles["info"]}>
              <p className={styles["info-artist"]}>Really old person</p>
              <p className={styles["info-title"]}>Like it used to be</p>
            </div>
            <span className={styles["material-icons"]}>play_circle</span>
          </div>
          <div className={styles["info-item"]}>
            <img className={styles["info-image"]} src="/assets/cover/colorful.jpg" alt="Album cover" />
            <div className={styles["info"]}>
              <p className={styles["info-artist"]}>Colorful Musicman</p>
              <p className={styles["info-title"]}>color (feat. Dr. Warewolf)</p>
            </div>
            <span className={styles["material-icons"]}>play_circle</span>
          </div>
          <div className={styles["info-item"]}>
            <img className={styles["info-image"]} src="/assets/cover/moon.jpg" alt="Album cover" />
            <div className={styles["info"]}>
              <p className={styles["info-artist"]}>Dr. Warewolf</p>
              <p className={styles["info-title"]}>Really bright moon II</p>
            </div>
            <span className={styles["material-icons"]}>play_circle</span>
          </div>
        </aside>
        <main className={styles["player"]}>
          <img className={styles["album-image"]} src="/assets/cover/drums.jpg" alt="A generic album cover" />
          <div className={styles["player-info"]}>
            <span className={styles["material-icons"]}>add_circle</span>
            <div>
              <p className={styles["info-artist"]}>Super Rockstar</p>
              <p className={styles["info-title"]}>Crowd Apocalypse</p>
            </div>
            <span className={styles["material-icons"]}>favorite</span>
          </div>
          <div className={styles["seekbar"]}>
            <p>0.40</p>
            <progress className={styles["bar"]} id="seekbar" max={100} value={30}>30%</progress>
            <p>3.42</p>
          </div>
          <div className={styles["controls"]}>
            <span className={styles["material-icons"]}>repeat</span>
            <div className={styles["center-buttons"]}>
              <span className={styles["material-icons"]}>fast_rewind</span>
              <span className={styles["material-icons"]}>play_circle</span>
              <span className={styles["material-icons"]}>fast_forward</span>
            </div>
            <span className={styles["material-icons"]}>shuffle</span>
          </div>
        </main>
      </div>
    </div>
  )
}
