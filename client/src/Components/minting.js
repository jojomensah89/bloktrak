// import React, {useState} from "react";
// import {pinJSONToIPFS} from '..utils/pinata'
// require('dotenv').config();
// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;

// const contractABI = require('./contractabi.json')
// const contractAddress = "0xf7cb97756F2280abD8bf939A8c3d52A332D9d28F"

// function Minting (){
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [url, setURL] = useState("");
//   const [walletAddress, setWalletAddress] = useState("");
//    const [status, setStatus] = useState("")
  



//  const Mint = async(url, name, description, walletAddress) => {
//   //error handling
//  if (url.trim() == "" || (name.trim() == "" || description.trim() == "")) {
//    return {
//     success: false,
//     status: "❗Please make sure all fields are completed before minting.",
//    }
//   }

//   //metadata that would be passed to IPFS
//   const metadata = new Object();
//   metadata.name = name;
//   metadata.image = url;
//   metadata.description = description;
//   metadata.walletAddress= walletAddress;
  
//   //make pinata call
//   const pinataResponse = await pinJSONToIPFS(metadata);
//   if (!pinataResponse.success) {
//       return {
//           success: false,
//           status: "😢 Something went wrong while uploading your tokenURI.",
//       }
//   }
//   const tokenURI = pinataResponse.pinataUrl;

  
// //sign the transaction via Metamask
//  try {
//     const txHash = await window.ethereum
//         .request({
//             method: 'eth_sendTransaction',
//             params: [transactionParameters],
//         });
//     return {
//         success: true,
//         status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
//     }
//  } catch (error) {
//     return {
//         success: false,
//         status: "😥 Something went wrong: " + error.message
//     }

//  }
 

// }

//   return (
//       <>
//         <p>Mint</p>
//         <form>
//       <input type="text"
//         placeholder="name"
//           onChange={(event) => setName(event.target.value)}>
//       </input>
//        <input type="text"
//         placeholder="NFT description"
//           onChange={(event) => setDescription(event.target.value)}>
//       </input>
//        <input type="text"
//         placeholder="NFT url"
//           onChange={(event) => setURL(event.target.value)}>
//       </input>
//       <input type="text"
//         placeholder="wallet address"
//           onChange={(event) => setWalletAddress(event.target.value)}>
//       </input>
//       <button id="mintbutton" >
//         UpLoad To Blockchain
//       </button>
//         </form>

//       </>
//   )
// }
// export {Minting}