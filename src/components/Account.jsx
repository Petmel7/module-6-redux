import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from './AccountSlice';
import { useState } from "react";

export const Account = () => {
    const [value, setValue] = useState(0);
    const balance = useSelector(state => state.account.balance);
    const dispatch = useDispatch()

    return (
        <div>
            <div>Balance: {balance} credits</div>
            <input type="number" onChange={evt => setValue(Number(evt.target.value))}/>
            <button onClick={() => dispatch(deposit(value))}>Deposit</button>
            <button onClick={() => dispatch(withdraw(value))}>Withdraw</button>
        </div>
    )
}