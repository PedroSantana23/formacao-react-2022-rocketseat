import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment() {
  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/123981868?v=4"/>

        <div className={styles.commentBox} >
            <div className={styles.commentContent} >
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Pedro Henrique</strong>

                        <time title="16 de Setembro às 21h" datetime="">Cerca de 1h atrás</time>
                    </div>

                    <button title="Deletar comentário">
                        <Trash size={24}/>
                    </button>
                </header>

                <p>Muito bom Devon, parabéns!! 👏👏</p>
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