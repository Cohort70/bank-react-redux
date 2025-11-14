import {useState} from "react";
import {deposit, withdraw} from "../actions/accountActions.js";
import {useDispatch} from "react-redux";
import {putQuote} from "../actions/quoteAction.js";

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    const fetchQuote = () => {
        dispatch(putQuote('Loading...'))
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => dispatch(putQuote(data.sentence)))
            .catch(() => dispatch(putQuote('Error fetching quote')))
    }

    return (
        <>
            <div className={'flex justify-center mt-10'}>
                <button
                    className={'bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg py-2 px-4'}
                    onClick={() => dispatch(withdraw(sum))}>Withdraw
                </button>
                <input
                    className={'text-center border rounded-lg text-lg font-bold mx-2 text-white'}
                    type="number"
                    value={sum}
                    onChange={e => setSum(Math.abs(+e.target.value))}
                />
                <button
                    className={'bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg py-2 px-4'}
                    onClick={() => dispatch(deposit(sum))}>Deposit
                </button>
            </div>
            <div className={'flex justify-center mt-5'}>
                <button
                    className={'bg-blue-300 hover:bg-blue-400 text-white font-bold rounded-lg py-2 px-4'}
                    onClick={fetchQuote}
                >Get Quote</button>
            </div>
        </>
    )
}

export default Operation;