import React , {useEffect,useState} from "React";
import {ethers} from 'ethers';

import { contractABI, contractAddress } from "../utils/constants";



export const TransactionContext = React.createContext();



export const TransactionProvider = ({children}) =>{
    const [currentAccount, setCurrentAccount] = useState();
    const [formData,setFormData] = useState({addressTo: ' ',amount: ' ',keyword: ' ',message: ' '});
    

    const handleChange = (e,name) =>{
      setFormData((prevState)=>({...prevState,[name]: e.target.value}));
    }
   
    const checkIfWalletIsConnected = async() =>{
        try {
            if(!ethereum ) return alert("Please install Metamask");

        const accounts = await ethereum.request({method : 'eth_accounts'});

        if(accounts.length){
            setCurrentAccount(accounts[0]);

        }
        else{
            console.log("No Account Found");
        }

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.")
        }
      
    }

     const connectWallet = async() =>{
        try {
            if(!ethereum ) return alert("Please install Metamask");
            const accounts = await ethereum.request({method : 'eth_requestAccounts'});

            setCurrentAccount(accounts[0]);

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.")
        }
     }

     const sendTransaction = async() =>{
        try {
            if(!ethereum ) return alert("Please install Metamask");

            const { addressTo, amount} = formData;
  const parsedAmount = ethers.parseEther(amount);

  await ethereum.request({
    method: 'eth_sendTransaction',
    params: [
      {
        from: currentAccount,
        to: addressTo,
        gas: '0x5208', // 21000 GWEI
        value: parsedAmount.toString(16), //0.00001
      },
    ],
  });
      
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.");
        }
     }
    
   useEffect(() => {
    checkIfWalletIsConnected();
   }, []);
   
   return ( 
    <TransactionContext.Provider value ={{ connectWallet ,currentAccount,formData,setFormData,handleChange,sendTransaction}}>
        {children}
    </TransactionContext.Provider>
   )
}