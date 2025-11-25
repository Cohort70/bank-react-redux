import {useSelector} from "react-redux";
import Bank from "./Bank.jsx";
import {useMemo} from "react";
import {getRundomIndex, names} from "../utils/constants.js";

const Balance = () => {
    const balance = useSelector(state => state.balance)
    const quote = useSelector(state => state.quote)
    const index = getRundomIndex(names.length)
    const info = useMemo(() => ({name: names[index]}), [index])

    console.log(`Render Balance index: ${index}`)

    return (
        <div className={'text-center text-uppercase'}>
            <Bank info={info}/>
            <h3 className={'text-5xl text-[whitesmoke]'}>{quote}</h3>
            <h2 className={'text-7xl text-[firebrick]'}>Balance = {balance}</h2>
        </div>
    )
}

export default Balance;