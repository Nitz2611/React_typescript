import React from "react";

interface MyButtonProps {
    text: string | boolean | number; //it can be different types either string or  boolean or number
    onClick?: () => void;  //by adding ? it becomes optional otherwise it will throw error
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    const {text, onClick} = props; // we can destructure and use it 
    //  return <button onClick={props.onClick}>{props.text}</button>
    return <button onClick={onClick}>{text}</button>
}

export default MyButton;