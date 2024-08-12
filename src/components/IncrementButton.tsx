import React,{useState} from "react";

interface MyButtonProps {
    text: string | boolean | number;
    bookButton: string | boolean | number;
    onClick?: () => void; 
    something?: boolean;
}
interface Book {
    name: string,
    price: number
}

const Increment: React.FC<MyButtonProps> = (props) => {
    const {text, onClick, bookButton} = props;
    const [value, setValue] = useState<number>(1); // we can explicitly define its type as number or anything

    const [book, setBook] = useState<Book>({
        name: 'one',
        price: 10
    });

    return (
        <div>
            <h3>{value}</h3>
            <button onClick={() => setValue(value + 1)}>{text}</button>
        
            <h3>Name {book.name} (Rs. {book.price})</h3>
            <button onClick={() => setBook({name: "Three", price: 30})}>{bookButton}</button>
        </div>
    )
}

export default Increment;