import React , {useContext} from "react";
import {TransactionContext} from '../context/Transactioncontext';
import { shortenAddress } from "../utils/shorterAddress";

const Transactions = () =>{
    const {currentAccount} = useContext(TransactionContext);
    return (
        <div className="flex w-full
         justify-center items-center 2xl:px-20 gradient-bg-transactions">
     <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
            <h3 className="text-white text-3xl text-center my-2">Your Account is Connected with <span  className="">{shortenAddress(currentAccount)}</span></h3>
        ) : 
        <h3 className="text-white text-3xl text-center my-2">Please Connect Your Account!</h3>}
     </div>
        </div>
    );
}

export default Transactions;