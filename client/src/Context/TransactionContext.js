
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utilz/Constants";

export const LandContext = React.createContext();

const { ethereum } = window;

  
const getEthereumcontract = () =>{ 
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner(); 
    const landContract = new ethers.Contract(contractAddress,contractABI,signer)
      
    console.log({ 
        provider,
        signer,
        landContract
    })
}

export const LandProvider = ({children})=> {   
    const [connectedAccount,setConnectedAccount] = useState(''); 
    const [currentAccount,setCurrentAccount] = useState('');  
    const [formData, setFormData] = useState({ 
        address : "", 
        url : ""

    }) 

    const handleChange = (e, name) => {
        setFormData((prevState)=>({ ...prevState,[name]: e.target.value}))
    }

    const propMint = () => { 

        try{

        }catch(err){ 
            console.log(err); 
            throw new Error("No ethereum object.")

        }

     }

    const checkIfWalletConnected = async () =>{ 
        
        try{

            if(accounts.length){ 
                setCurrentAccount(accounts[0]);  
            }

        }catch(err){
            console.log("Non accounts found")
            console.log(err); 
             throw new Error("No etherium object")
        }


        if(!ethereum) return alert("Please install metamask"); 
        const accounts = await ethereum.request({ method : 'eth_accounts'}); 
      
        console.log(accounts);  

    }  

    const connectWallet  =  async () =>{ 

        try{  

            if(!ethereum) return alert("Please install metamask"); 
            const account = await ethereum.request({ method : 'eth_requestAccounts'}); 
            setConnectedAccount(account[0])

        }catch(err){
           
             console.log(err); 
             throw new Error("No etherium object")
        }
       

    }
    
    useEffect(()=>{
        checkIfWalletConnected();
    },[])

    return ( 
        <LandContext.Provider  value={{connectWallet,currentAccount,formData,setFormData,handleChange}}>
       
            {children}
        </LandContext.Provider>
    )

}