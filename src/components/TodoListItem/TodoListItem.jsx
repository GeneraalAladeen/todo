import { InputBase } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/appContext'
import { useStyles } from './styles'
import cross from '../../assets/images/icon-cross.svg'
import check from '../../assets/images/icon-check.svg'

const TodoListItem = ({ body , value, complete , editable = false , deleteTodo , error = false ,  onChange , addTodo, updateTodo ,   todoRef, ...props}) => {
    const { theme } = useContext(AppContext)
    const [ show , setShow ] = useState(false)
    const classes = useStyles({theme , complete , show , editable})


    return (
        <div ref={todoRef} className={classes.container} {...props} onMouseLeave={() => setShow(false)} onMouseOver={() =>setShow(true)}>
            <div className={classes.checkBox} onClick={updateTodo}>
                {
                    complete && <img src={check} height="8px" alt="check"  />
                }
            </div>
            {
                editable ? <InputBase value={value} placeholder='Create new todo...' name="todo" onChange={onChange} className={classes.input}/> :
                <p className={classes.body} >
                    {body}
                </p>
            }
            {
                editable ? <p className={classes.add} onClick={addTodo}>Add</p> :
            <img src={cross} height="20px" alt="delete" className={classes.delete} onClick={deleteTodo} />  
            }
        </div>
    )
}

export default TodoListItem