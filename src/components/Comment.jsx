import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment}){

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1;
    })
  }

  function heandleDeleteComment(){
    onDeleteComment(content);
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/jvchaves.png" />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Victor Chaves</strong>
              <time title="05 de Maio ás 19:41" dateTime="09-05-2024">Cerca de 1h atrás</time>
            </div>

            <button onClick={heandleDeleteComment} title='Deletar Comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}