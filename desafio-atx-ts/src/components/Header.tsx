import styles from './Header.module.css';
import logo from '../assets/logo.svg';
import iconeCriar from '../assets/iconeCriar.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
interface Props {
  onAddTask: (taskTitle: string) => void;
}
export function Header({ onAddTask }: Props){
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  return(
      <header className={styles.header}>
        <img className={styles.imgToDo} src={logo} alt="logo to do"  />
        <form className={styles.newTaskForm} onSubmit={handleSubmit} >
          <input placeholder='Adicione uma nova tarefa' onChange={onChangeTitle} value={title}/>
          <button type='submit'>
            Criar
            <img src={iconeCriar} alt="" />
          </button>
        </form>
      </header>
    
  );
}