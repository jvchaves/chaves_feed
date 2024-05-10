import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content }){
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

            <button title='Deletar Comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>{ content }</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}