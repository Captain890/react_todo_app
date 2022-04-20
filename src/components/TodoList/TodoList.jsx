import {useState, useEffect } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import List from '../List/List'


export default function TodoList() {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(()=>{
    const items = localStorage.getItem('todoList');
    if(items){
      setList(JSON.parse(items));
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todoList',JSON.stringify(list))
  },[list])

  const inputChangeHandler = (e)=>{
    const value = e.target.value;
    setInputText(value);
  } 
  
  const btnClickHandler = ()=>{
    if(inputText.trim()){
      const items = [...list];
      items.push({
        item: inputText,
        isDone: false,
        isEditing: false,
        editingItem: inputText
      })
      setList(items);
    } 
    setInputText('');
  }

  const keyUpHandler = (e)=>{
    if(e.keyCode === 13){
      btnClickHandler()
    }
  }

  const isDoneHandler = (itemIndex)=>{
    const items = [...list];
    items[itemIndex].isDone = true;
    setList(items)
  };

  const isDeleteHandler = (itemIndex)=>{
    const items = [...list];
    items.splice(itemIndex,1)
    setList(items)
  }

  const swapHandler = (initialIndex, finalIndex)=>{
    const items = [...list]
    const item = items[initialIndex]
    items[initialIndex] = items[finalIndex]
    items[finalIndex] = item;
    setList(items);
  }

  const isEditingHandler = (itemIndex)=>{
    const items = [...list];
    items[itemIndex].isEditing = true;
    setList(items);
};

  const editingChangeHandler = (event, itemIndex)=>{
    const value = event.target.value;
    const items = [...list];
    items[itemIndex].editingItem = value;
    setList(items);
  };

  const cancelHandler = (itemIndex)=>{
    const items = [...list];
    items[itemIndex].isEditing = false;
    items[itemIndex].editingItem = items[itemIndex].item;
    setList(items);
};

const saveHandler = (itemIndex)=>{
  const items = [...list];
  const value = items[itemIndex].editingItem.trim();
  if(value){
      items[itemIndex].item = value;
      items[itemIndex].editingItem = value;
      items[itemIndex].isEditing = false;
      setList(items);
  }
};
  
  return (
    <>
      <div className='input-field shadow-sm p-1'>
        <Input
          inputChangeHandler={inputChangeHandler}
          value={inputText}
          keyUpHandler={keyUpHandler}
           />
        <Button 
           className = 'plusIcon'
           btnClickHandler = {btnClickHandler}
           iconName = {"icon-plus-sign"}
         />
      </div>
      <div className='list-container'>
        <List 
          list = {list}
          isDoneHandler = {isDoneHandler}
          isDeleteHandler = {isDeleteHandler}
          swapItemsHandler = {swapHandler}
          isEditingHandler={isEditingHandler}
          editingChangeHandler={editingChangeHandler}
          cancelHandler={cancelHandler}
          saveHandler={saveHandler}
        />
      </div>  
    </>
  )
}
