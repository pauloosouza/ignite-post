import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment (){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/pauloosouza.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>

                        <div className={styles.authorAndTime}>
                            <strong> Paulo Souza </strong>
                            <time title='15 de Agosto às 08:00h' dateTime='2024-08-15 08:00:30'> Cerca de 1h atrás </time>
                        </div>

                        <button title='Deletar comentário '>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p> Muito bom Devon, parabéns!! 👏👏 </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span> 20 </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}