import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/jvchaves.png",
      name: "JV Chaves",
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-05-09T19:41:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://img.freepik.com/fotos-premium/retrato-de-um-homem-idoso-vestindo-um-chapeu-enquanto-esta-de-pe-contra-as-plantas_1048944-13910660.jpg?size=626&ext=jpg&ga=GA1.1.1674548974.1715374276&semt=ais_user",
      name: "Xablau Mendes",
      role: 'CEO at Mundo'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋👋👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'paragraph', content: 'Pra Cima🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-05-19T19:41:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  )
}
