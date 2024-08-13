import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar (){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={styles.profile}>
                <img  className={styles.avatar} src="https://github.com/pauloosouza.png"  />

                <strong> Paulo Souza</strong>
                <span> Web Developer </span>
            </div>
            <footer>
                <a href="#"> 
                <PencilLine size={15}/>
                Editar seu perfil </a>
            </footer>

        </aside>
    );
}