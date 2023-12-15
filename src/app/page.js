import styles from './page.module.css'
import Image from 'next/image';
import { Favorite, FastRewind, PlayCircle, ArrowBackIos, MoreVert, AddCircle, FastForward} from '@mui/icons-material';

function getCover() {
  const covers = ["colorful", "demon", "drums", "future", "greyscale", "moon"];
  return "/cover/" + covers[Math.floor(Math.random() * covers.length)] + ".jpg"
}

function MusicItem() {
  const titles = ["Music", "Dream", "Epic", "Ballad", "Rock", "Classic", "Sky", "Future", "Apocalypse"];
  const artists = ["The Bugs", "Man", "Super", "Punks", "Cyborg", "Fire", "Devils", "Salt", "Phones"];
  

  const generatedTitle = titles[Math.floor(Math.random() * titles.length)] 
  + " " + titles[Math.floor(Math.random()*titles.length)];
  const generatedArtist = artists[Math.floor(Math.random() * artists.length)] 
  + " " + artists[Math.floor(Math.random() * artists.length)] 
  + " " + artists[Math.floor(Math.random() * artists.length)];
  return (
    <div className={styles["info-item"]}>
    <Image width={94} height={94} className={styles["info-image"]} src={getCover()} alt="A generic album cover" />
    <div className={styles["info"]}>
      <p className={styles["info-artist"]}>{generatedArtist}</p>
      <p className={styles["info-title"]}>{generatedTitle}</p>
    </div>
    <span className={styles["material-icons"]}><PlayCircle /></span>
  </div>
  )
}

export default function Home() {
  return (
    <div>
      <nav className={styles["navbar"]}>
        <span className={styles["material-icons"]}><ArrowBackIos /></span>
        <p>Playlist - Generic Playlist (3)</p>
        <span className={styles["material-icons"]}><MoreVert /></span>
      </nav><div className={styles["root"]}>
        <aside className={styles["tracks"]}>
            {Array(20).fill(1).map(key => (
            <MusicItem key={key}/>
          ))}
          
        </aside>
        <main className={styles["player"]}>
          <Image width={512} height={512} className={styles["album-image"]} src={getCover()} alt="A generic album cover" />
          <div className={styles["player-info"]}>
            <span className={styles["material-icons"]}><AddCircle /></span>
            <div>
              <p className={styles["info-artist"]}>Super Rockstar</p>
              <p className={styles["info-title"]}>Crowd Apocalypse</p>
            </div>
            <span className={styles["material-icons"]}><Favorite /></span>
          </div>
          <div className={styles["seekbar"]}>
            <p>0.40</p>
            <progress className={styles["bar"]} id="seekbar" max={100} value={30}>30%</progress>
            <p>3.42</p>
          </div>
          <div className={styles["controls"]}>
            <span className={styles["material-icons"]}><repeat /></span>
            <div className={styles["center-buttons"]}>
              <span className={styles["material-icons"]}><FastRewind /></span>
              <span className={styles["material-icons"] + " " + styles["play"] }><PlayCircle /></span>
              <span className={styles["material-icons"]}><FastForward /></span>
            </div>
            <span className={styles["material-icons"]}><shuffle /></span>
          </div>
        </main>
      </div>
    </div>
  )
}
