import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
  return(
    <div className={styles.comment}>
      <img src="https://github.com/jvchaves.png" />
      
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

          <p>Muito bom João, esta mandando Bem!</p>  
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