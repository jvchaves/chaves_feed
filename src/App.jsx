import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="JV Chaves"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies."
          />
          <Post 
            author="JV Chaves Moura"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies."
          />
        </main>
      </div>
    </div>
  )
}
