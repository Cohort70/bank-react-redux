import {useSelector} from "react-redux";

const Balance = () => {
    const balance = useSelector(state => state.balance)

    return (
        <div className={'text-center text-uppercase'}>
            <h1 className={'font-bold text-8xl text-[gold]'}>Iron Bank of Braavos</h1>
            <h2 className={'text-7xl text-[firebrick]'}>Balance = {balance}</h2>
        </div>
    )
}

export default Balance;