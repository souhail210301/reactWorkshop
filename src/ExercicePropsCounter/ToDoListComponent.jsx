import { useState } from "react"

export default function ToDoListComponent(props) {
    const [tasks, setTasks] = useState(props.initialItems)
    const [nom, setNewItem] = useState('')
    const [priorite, setPriorite] = useState('Haute')
    const [search, setSearch] = useState('')
    
    
    const handleAdd = () => {
        if (nom) {
    setTasks([...tasks, {nom:nom, priorite:priorite, etat:false}])            
            console.log(tasks)
            setNewItem('')
}
    };

    const setAsDone = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                const newTask = {...task, etat: true};
                return newTask;
            } else {
                return task;
            }});
        
        setTasks(newTasks);}

    const filterTasks = tasks.filter(task => 
        task.nom.toLowerCase().includes(search.toLowerCase( ))
    )

    return (<>
        <h1>ToDoListComponent</h1>
        <h3>Chercher une tache</h3>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="chercher une tache" value={search}/>


                
        <ul>
            {(search ? filterTasks : tasks).map((task) => (
                <li style={{textDecoration: task.etat ? 'line-through' : 'none'}} key={task.nom}>
                    {task.nom} - {task.priorite}

                    <button onClick={() => setAsDone(tasks.indexOf(task))}>
                        Set As Done
                    </button>
                </li>
            ))}
        </ul>
        <div>
                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="Entrez un nouveau élément"
                    />
                    
                    <select value={priorite} onChange={(e) => setPriorite(e.target.value)}>
                        <option value="Haute">Haute</option>
                        <option value="Moyenne">Moyenne</option>
                        <option value="Basse">Basse</option>
                    </select>


                    <button onClick={handleAdd}>
                        Ajouter
                    </button>

               
                </div>
                
                    <p>Nombre total de tâches: {tasks.length}- 
                        Nombre des taches terminées:
                         {tasks.filter(t=>t.etat===true).length}
                         </p>

    </>

)

}