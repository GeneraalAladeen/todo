import { OutlinedInput } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/appContext'
import { useStyles } from './styles'
import cross from '../../assets/images/icon-cross.svg'
import check from '../../assets/images/icon-check.svg'

const TodoListItem = ({ body , complete , editable = false , deleteTodo , updateTodo ,   todoRef, ...props}) => {
    const { theme } = useContext(AppContext)
    const [ show , setShow ] = useState(false)
    const classes = useStyles({theme , complete , show })

    
    return (
        <div ref={todoRef} className={classes.container} {...props} onMouseLeave={() => setShow(false)} onMouseEnter={() =>setShow(true)}>
            <div className={classes.checkBox} onClick={updateTodo}>
                {
                    complete && <img src={check}  alt="delete"  />
                }
            </div>
            <div className={classes.body} >
                {body}
            </div>

            <img src={cross} height="15px" alt="delete" className={classes.delete} onClick={deleteTodo} />
        </div>
    )
}

export default TodoListItem