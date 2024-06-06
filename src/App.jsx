import {Post} from './Post'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
        <Post author="Anderson Farias" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, laboriosam deserunt? Magni ipsam excepturi atque ducimus amet nulla quidem provident."/>
        <Post author="Angelo Marques" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, laboriosam deserunt? "/>
        </main>
      </div>
    </div>
  )
}
