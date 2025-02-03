import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import './App.css'

import ClassComponent from './CourseComponents/Components/ClassComponent'

import FunctionalComponent from './CourseComponents/Components/FunctionalComponent'

import Methods from './CourseComponents/ClassComponentLifeCycle/Methods'

import Mounting from './CourseComponents/ClassComponentLifeCycle/Mounting'

import Update from './CourseComponents/ClassComponentLifeCycle/Update'

import Unmounting from './CourseComponents/ClassComponentLifeCycle/Unmounting'

import Counter from './ExercicePropsCounter/Counter'

import ListManager from './ExercicePropsCounter/ListManager'

import ToDoListComponent from './ExercicePropsCounter/ToDoListComponent'

import Events from './ComponentEvent/Events';





function App() {

 /*  const name = "4twin2"

  const etudiant ={

    nom : "mohamed",

    prenom : "ben ali",

    age :20

  }

  const tab= [1,2,5,9,89,76] */

  const [counter, setCounter] = useState(0);

  const [{color, backgroundColor}, setColor] = useState({color: 'black', backgroundColor: 'white'});

  useEffect(()=>{

    console.log("useEffect")

    return ()=>{console.log("return useEffect")}

  },[counter])

  

  const initialItems = ['React', 'Angular', 'VueJs'];

  const todoList =[ { nom: "tache1" , priorite:"Haute", etat:true}]
  

  return (

    <>

    {/*   <Counter step={5}/> */}

      

      { /*  

    <h1>Counter: {counter} et le Background: {backgroundColor} et la couleur {color}</h1>

    <button onClick={()=>setCounter(counter+1)}>Increment</button>

    <input type="text"  onChange={e=>{setColor(current=>({...current, color:e.target.value}))}}/> */}

  

    {/* <Methods />

    <Update />

    <Mounting />

    <Unmounting />

    <ClassComponent name="oumeima"/>

    <FunctionalComponent name="oumeima"/>

        <img src={reactLogo} alt="react logo" width="100" height="100"/>

      <h1>hello from {name}</h1>

       <p>le contenu de l'objet est = {etudiant.nom}</p>

       <ul>

        {tab.map( e=> {

          return <li>{e}</li>

        })}

       </ul> */}

<ToDoListComponent initialItems={todoList}  />

<Events eve/>





    </>

  )

}



export default App
