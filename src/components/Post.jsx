import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { useState } from 'react';

import styles from './Post.module.css';


export function Post({ author, publishedAt, content}){

const [comments, setComments] = useState([
  'Rapaz, ta toop, so tem você aqui ein!?'
])

const [newCommentText, setNewCommentText] = useState('')

function handleNewCommentChange(){
  setNewCommentText(event.target.value)
}

const publishedAtDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
  locale: ptBR
})

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix: true
})

function handleCreateNewComment(){
  event.preventDefault()
  
  const newCommentText = event.target.comment.value

  setComments([...comments, newCommentText]);
  setNewCommentText('')
}

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>{ publishedDateRelativeToNow }</time>
      </header>

      <div className={styles.content}>
        {content.map(line =>{
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={ handleCreateNewComment } className={ styles.commentForm }>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          placeholder="Deixe um comentário"
          value={ newCommentText }
          onChange={ handleNewCommentChange }
        />

        <footer>
          <button type="submit">Enviar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment}content={comment}/>
        })}
      </div>
    </article>
  )
}