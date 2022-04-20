import Button from '../Button/Button'
import Input from '../Input/Input'

const List = ({ list , isDoneHandler, isDeleteHandler, swapItemsHandler, isEditingHandler, editingChangeHandler, cancelHandler, saveHandler }) => {
  const listItems = list.map((task,index)=>(
    <li className='todo_list' key={index}>
      {!task.isEditing && (
        <span>{task.item}</span>
      )}
      {task.isEditing && ( 
          <Input
             value={task.editingItem}
             inputChangeHandler={(event) => {editingChangeHandler(event, index)}}
          />)
          }
        <span className='button-icons'>
        
          {task.isDone ? 
            <Button 
              className = 'trashIcon'
              iconName = {"icon-trash" } 
              btnClickHandler = {()=>{isDeleteHandler(index)}}
            /> 
            : 
            <Button 
              className = 'checkIcon'
              iconName = {"icon-check" } 
              disabled = {task.isEditing}
              btnClickHandler = {()=>{isDoneHandler(index)}}      
            /> 
          }
          
          {!task.isDone && (
            <Button 
              className = 'editIcon'
              iconName = {"icon-edit" }
              btnClickHandler = {() => {isEditingHandler(index)}}
            />
          )}
          {task.isEditing && (
            <>
            <Button
            className='iconSave'
            iconName = {"icon-ok"}
            btnClickHandler={() => {saveHandler(index)}}
            disabled={task.editingItem.trim().length === 0}
            />
            <Button
              iconName={'icon-remove'}
              btnClickHandler={() => {cancelHandler(index)}}
            />
            </>
          )}
        {index !== 0 && (  
              <Button 
                className = 'levelUpIcon'
                iconName = {"icon-level-up" }
                btnClickHandler = {()=>{swapItemsHandler(index, index-1)}}
              />
              )
        }
        {index !== list.length-1 && (
          <Button 
            className = 'levelDownIcon'
            iconName = {"icon-level-down" }
            btnClickHandler = {()=>{swapItemsHandler(index, index+1)}} 
        />
        )}
        </span>
    </li>
  ))
  return (
    <div> 
      {listItems}
    </div>
  )
}

export default List;
