import {useSelector} from "react-redux";
import Bank from "./Bank.jsx";
import {useState} from "react";

const Balance = () => {
    const balance = useSelector(state => state.balance)
    const quote = useSelector(state => state.quote)
    // const info = {name: 'Braavos'}
    const [info] = useState({name: 'Braavos'})

    console.log('Render Balance')

    return (
        <div className={'text-center text-uppercase'}>
            <Bank info={info}/>
            <h3 className={'text-5xl text-[whitesmoke]'}>{quote}</h3>
            <h2 className={'text-7xl text-[firebrick]'}>Balance = {balance}</h2>
        </div>
    )
}

export default Balance;