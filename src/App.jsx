import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';
export function App() {
  return (
    <div>
      <Header />
      <Post
        author="João Victor Chaves"
        content="loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."        
      />
      <Post
        author="Chavito"
        content="I am a New Post"        
      />
    </div>
  )
}
