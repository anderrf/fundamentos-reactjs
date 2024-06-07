import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=500" 
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/anderrf.png"/>
                <strong>Anderson Farias</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}