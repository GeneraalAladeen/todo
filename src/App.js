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
import {v4 as uuidv4} from 'uuid';

const mock = [

]


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getListStyle = (isDraggingOver, theme) => ({
  background: (theme && isDraggingOver) && "lightblue" 
});


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
    if(newTodo === "") return alert("you really want your todo to be nothing, lol")

    const todoArray = [...todo];
    todoArray.unshift({
      id:uuidv4(),
      content: newTodo,
      complete: false,
    })

    setTodo(todoArray)
    setFilteredTodos(todoArray)
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
    filterTodo(filter , updatedArray)
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
            <img className={classes.themeIcon} src={theme  ?  iconLight : iconDark } alt="moon logo" onClick={() => toggleTheme()}/>
          </div>

          <TodoListItem error={true} body="ndjciojmpijmpi" onChange={handleInputChange} editable addTodo={createTodo}/> 

          <div>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver , theme)}
                      className={classes.todoListSection}
                    >
                      {filteredTodos.map(({id , content , complete}, index) => (
                        <Draggable key={id} draggableId={`${id}`} index={index}>
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
                      color: filter === item && "#4074e1",
                    }} onClick={() => filterTodo(item , filteredTodos)}>{item}</p>)
                  }
                </div>
                <p onClick={clearCompletedTodos} className={classes.clear}>Clear completed</p>
              </div>
          </div>   

          <div className={classes.mobileFilter}>
                  {
                    filtersArray.map((item) => <p className={classes.filterOptions} style={{
                      color: filter === item && "#0a2d85",
                    }} onClick={() => filterTodo(item , filteredTodos)}>{item}</p>)
                  }
          </div> 
          <p>Drag and Drop to reorder list</p>
        </div>
      </div>
    </div>
  );
}

export default App;
