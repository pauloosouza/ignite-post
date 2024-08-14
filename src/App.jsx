import { Header } from "./componets/Header";
import {Post} from "./componets/Post";
import { Sidebar } from "./componets/Sidebar";

import styles from './App.module.css';

import './globo.css';

 export function App() {
  return (
    <div>
      <Header/>

    <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post author=" Paulo Souza" content=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quaerat beatae accusamus sapiente harum voluptate quasi molestias ab? Eum consequuntur ipsa, ab debitis repellat facere perferendis vitae eaque iste ea!"/>
        </main>
    </div>
    
    </div>
  )
}



