import { Header } from "./componets/Header";
import {Post} from "./componets/Post";

import styles from './App.module.css';

import './globo.css';
import { Sidebar } from "./componets/Sidebar";

 export function App() {
  return (
    <div>
      <Header/>

    <div className={styles.wrapper}>
        <Sidebar/>wha

        <main>
          <Post author=" Paulo Souza" content=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quaerat beatae accusamus sapiente harum voluptate quasi molestias ab? Eum consequuntur ipsa, ab debitis repellat facere perferendis vitae eaque iste ea!"/>
        </main>
    </div>
    
    </div>
  )
}



