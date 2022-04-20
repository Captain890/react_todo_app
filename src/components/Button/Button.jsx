import Icon from "../Icon/Icon";

const Button = ({className, disabled, btnClickHandler, iconName})=> (
  <button className={className} onClick={btnClickHandler} disabled = {disabled} >
    <Icon 
      iconName={iconName}

    />
  </button> 
  );

export default Button
