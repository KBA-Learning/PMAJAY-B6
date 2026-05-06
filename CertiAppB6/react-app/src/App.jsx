import './App.css';
import { createWalletClient,custom } from 'viem';
import {hoodi,hardhat} from 'viem/chains';
import {defineChain} from 'viem/utils'
import {writeContract,readContract} from 'viem/actions'
import { useState } from 'react';

function App(){

  const [account,setAccount] = useState("");
  const [formdata,setFormData] = useState({
    Id:0,
    cname:"",
    course:"",
    grade:"",
    date:""
  })

  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

  const abi= [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Certificates",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "course",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "grade",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "date",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_course",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_grade",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        }
      ],
      "name": "issue",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  // const hardhat = defineChain({
  //   id: 31337,
  //   name: 'Hardhat',
  //   network: 'hardhat',
  //   nativeCurrency: {
  //     decimals: 18,
  //     name: 'Hardhat',
  //     symbol: 'HTH',
  //   },
  //   rpcUrls: {
  //     default: {
  //       http: ['http://localhost:8545'],
  //     },
  //     public: {
  //       http: ['http://localhost:8545'],
  //     },
  //   },
  // });

  const client = createWalletClient({
    chain:hardhat,
    transport:custom(window.ethereum)
  })

  async function connectToMask(){

    // console.log("CLient",client);

    await window.ethereum.request({
      method:'eth_requestAccounts'
    })

    const Addr = await client.requestAddresses();
      console.log("Connected Account",Addr[0]);

      setAccount(Addr[0]);
      

  }

  function handleChange(e){
    
    const {name,value} = e.target;

    setFormData((preState)=>({
      ...preState,
      [name]:value
    }))
    
  }

  async function issueCertificate(){

    const response = await writeContract(client,{
      address:contractAddress,
      abi:abi,
      functionName:"issue",
      args:[formdata.Id,formdata.cname,formdata.course,formdata.grade,formdata.date],
      account:account
    })
    console.log("Transaction hash",response);
    

  }

  async function viewCertificate(){

    const Id = document.getElementById("cId").value;
    console.log("Certficatesssss Id",Id);
    
    const certDetails = await readContract(client,{
      address:contractAddress,
      abi:abi,
      functionName:"Certificates",
      args:[Id]
    })
    console.log("Certificate Details",certDetails);
    console.log("Enter any data");
    
    
  }
  

  return(
    <div className='m-4'>
    <div className='m-4 flex justify-end'>
      <input type='button' className=' border-2 bg-sky-500 rounded-full border-transparent p-3 ' onClick={connectToMask} value='Connect To Metamask' />
    </div>
    <div >
      <p className='font-bold m-4'>Enter Certicate Details</p>

      <div className='flex mb-2'>

      <p className='mr-2'>Certificate ID:</p>
      <input type='text'  className='border border-black' id='Id' name='Id' onChange={handleChange}/>
      </div>
      <div className='flex mb-2'>
        <p className='mr-2'>Candidate Name:</p>
      <input type='text'  className='border border-black' id='cname' name='cname' onChange={handleChange}/>
      </div>
      <div className='flex mb-2'>
        <p className='mr-2'>Course:</p>
        <input type='text'  className='border border-black' id='course' name='course' onChange={handleChange}/>
      </div>
      <div className='flex mb-2'>
        <p className='mr-2'>Grade:</p>
        <input type='text'  className='border border-black' id='grade' name='grade' onChange={handleChange}/>
      </div>
      <div className='flex mb-2'>
        <p className='mr-2'>Date:</p>
        <input type='date'  className='border border-black' id='date' name='date' onChange={handleChange}/>
      </div>
      <div className='flex justify-center'>
        <input type='button' className='bg-sky-500 rounded-full p-2' value='Issue Certificate' onClick={issueCertificate}/>
      </div>
      <p className='font-bold m-4'>
        Get Certificate
      </p>
      <div className='flex '>
        <p className='mr-2'>Enter Certificate Id:</p>
        <input type='text' className='border border-black m-4' id='cId' name='cId'/>
        <input type='button' className='bg-sky-500 rounded-full p-2' id='view' name='view' onClick={viewCertificate} value='Get Certificate'/>
      </div>
    </div>
    </div>
  )
}

export default App;