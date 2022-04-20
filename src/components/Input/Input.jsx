const Input = ({inputChangeHandler, keyUpHandler, value }) => (
  
  <input className='textbox ' 
    type="text" 
    onChange={inputChangeHandler} 
    onKeyUp={keyUpHandler}
    value={value}
    placeholder='✍️ Add Items …'>
  </input>

);

 export default Input; 
