import styles from './Sidebar.module.css';

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src='https://plus.unsplash.com/premium_photo-1679177183572-a4056053b8a2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    
      <div className={styles.profile}>
        <img className={styles.avatar} src='https://github.com/jvchaves.png' />

        <strong>João Victor Chaves</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>Editar Seu Perfil</a>
      </footer>
    </aside>
  );

}