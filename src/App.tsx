import {Post, PostType} from './components/Post'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import {} from './components/Post'


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/anderrf.png',
      name: 'Anderson Farias',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Olá!'},
      {type: 'paragraph', content: 'Segue abaixo artigo sobre iteração'},
      {type: 'link', content: 'https://github.com/anderrf'},
    ],
    publishedAt: new Date("2024-06-01T12:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/anderrf.png',
      name: 'Anderson Rocha',
      role: 'Fullstack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Olá!'},
      {type: 'paragraph', content: 'Segue abaixo artigo sobre iteração'},
      {type: 'link', content: 'https://github.com/anderrf'},
    ],
    publishedAt: new Date("2024-06-03T15:00:00")
  },
]

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
