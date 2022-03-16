import bgDark from './assets/images/bg-desktop-dark.jpg';
import bgMobileDark from './assets/images/bg-mobile-dark.jpg';
import bgLight from './assets/images/bg-desktop-light.jpg';
import bgMobileLight from './assets/images/bg-mobile-light.jpg';
import iconLight from './assets/images/icon-moon.svg';
import iconDark from './assets/images/icon-sun.svg';
import './App.css';
import TodoListItem from './components/TodoListItem/TodoListItem';
import { useStyles } from './styles';
import { useContext } from 'react';
import { AppContext } from './context/appContext';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const mock = [
    {
      id:1,
      content: "Item 1",
      complete: false
    },
    {
      id:2,
      content: "Item 2",
      complete: true
    },
    {
      id:3,
      content: "Item 3",
      complete: false
    },
    {
      id:4,
      content: "Item 4",
      complete: true
    },
    {
      id:5,
      content: "Item 5",
      complete: true
    },
    {
      id:6,
      content: "Item 6",
      complete: true
    },
]


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};



function App() {
  const { theme } = useContext(AppContext)
  const bg = theme ? bgDark : bgLight;
  const bgMobile = theme ? bgMobileDark : bgMobileLight;
  const classes = useStyles({theme ,bg ,bgMobile })
  const [ todo , setTodo ] = useState(mock)
  const [ filter , setFilter ] = useState("All")
  const [ filteredTodos , setFilteredTodos ] = useState(todo)
  const { toggleTheme } = useContext(AppContext)
  const [ newTodo , setNewTodo ] = useState("")

  const filtersArray  = ["All" , "Active" , "Completed"];

  const handleInputChange = (e) => {
      setNewTodo(e.target.value)
  }

  const onDragEnd = (result) =>  {
    if (!result.destination) return

    const items = reorder(
      filteredTodos,
      result.source.index,
      result.destination.index
    );

    setFilteredTodos(items)
  }

  const filterTodo = (value , data) => {
    setFilter(value)
    if(value === "All") return  setFilteredTodos(todo)
    const filters = {
      "Active": false,
      "Completed":true
    }
     const filteredData =  todo.filter((item) => item.complete === filters[value])
     setFilteredTodos(filteredData)
  }

  const createTodo = () => {
    const newTodos = [...todo];
    newTodos.unshift({
      id:todo.length + 1,
      content: newTodo,
      complete: false,
    })

    setTodo(newTodos)
    setFilteredTodos(newTodos)
  }

  const removeTodo = (id) => {
    const updatedArray = todo.filter((item) => item.id !== id);
    setTodo(updatedArray)
    setFilteredTodos(updatedArray)
  }

  const updateTodo = (id) => {
    const updatedArray = todo.map((todo) => {
      if (id === todo.id) {
        todo.complete = !todo.complete;
      }
      return todo;
    })
    setFilteredTodos(updatedArray)
    setTodo(updatedArray)
    
  }

  const getActiveTodos = () => {
      var count = 0;
      todo.forEach(({complete}) => (!complete && count++));
      return count;
  }

  const clearCompletedTodos = () => {
    const filteredTodos = todo.filter(({complete}) => !complete)
    setTodo(filteredTodos)
    setFilteredTodos(filteredTodos)
  }



  return (
    <div className="App">
      <div className={classes.container} >
        <div className={classes.todoSection}>
          <div className={classes.todoTitle}>
            <h1>TODO</h1>
            <img src={theme  ?  iconLight : iconDark } alt="moon logo" onClick={() => toggleTheme()}/>
          </div>

          <TodoListItem error={true} body="ndjciojmpijmpi" onChange={handleInputChange} editable addTodo={createTodo}/> 

          <div>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={classes.todoListSection}
                    >
                      {filteredTodos.map(({id , content , complete}, index) => (
                        <Draggable key={id} draggableId={content} index={index}>
                          {(provided, snapshot) => (
      
                            <TodoListItem  
                              todoRef={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              body={content} 
                              complete={complete}
                              updateTodo={() => updateTodo(id)}
                              deleteTodo={() => removeTodo(id)}
                            />

                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              <div className={classes.bottomSection}>
                <p>{getActiveTodos()} items left</p>
                <div className={classes.filter}>
                  {
                    filtersArray.map((item) => <p className={classes.filterOptions} style={{
                      color: filter === item && "#0a2d85",

                    }} onClick={() => filterTodo(item , filteredTodos)}>{item}</p>)
                  }
                </div>
                <p onClick={clearCompletedTodos} className={classes.clear}>Clear completed</p>
              </div>
          </div>    
          <p>Drag and Drop to reorder list</p>
        </div>
      </div>
    </div>
  );
}

export default App;
