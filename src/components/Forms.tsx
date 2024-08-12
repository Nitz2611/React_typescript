
import React,{useState} from "react";

interface MyButtonProps {
    text: string | boolean | number;
    bookButton: string | boolean | number;
    onClick?: () => void; 
    something?: boolean;
}


const Forms: React.FC<MyButtonProps> = (props) => {
    const {text, onClick, bookButton} = props;
    const [value, setValue] = useState<string | undefined>(); 

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSbumit = (e:React.FormEvent<HTMLFormElement>) =>{
            e.preventDefault();
            console.log(e);
    }

    return (
        <div>
            <form onSubmit={handleSbumit}>


           <input onChange={handleNameChange} type="text" placeholder="Enter Your Name"
           value={value}/>
           <h1>{value}</h1>
           <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Forms;