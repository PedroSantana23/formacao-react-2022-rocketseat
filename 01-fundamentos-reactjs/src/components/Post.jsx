import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post} >
        <header>
            <div className={styles.author}>
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/123981868?v=4"/>
                <div className={styles.authorInfo}>
                    <strong>Pedro Henrique</strong>
                    <span>Front-End Developer</span>
                </div>
            </div>

            <time title="16 de Setembro às 21h" datetime="">Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href="">👉 {' '}jane.design/doctorcare</a></p>
            <p>
                <a href="">#nlw</a>{' '}
                <a href="">#novoprojeto</a>{' '}
                <a href="">#rocketseat</a>
            </p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder="Deixe um comentário" />

            <footer>
                <button type="submit">Comentar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
    </article>
  )
}