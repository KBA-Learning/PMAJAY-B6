import { Router } from "express";
import client from "../app.js";
import cert from '../assets/cert.json' with {type:'json'}
import {readContract, writeContract} from 'viem/actions'

const router = Router();

router.get("/",(req,res)=>{
    res.send("Hello World")
})

router.post('/issueCertificate',async(req,res)=>{
    const {id,name,course,grade,date} = req.body;

    console.log("Contract Address",cert.contractAddress);
    
    const hash = await writeContract(client,{
        address:cert.contractAddress,
        abi:cert.abi,
        functionName:'issue',
        args:[id,name,course,grade,date]
    })

    console.log("Transaction Hash",hash);
    
    res.status(200).json({hash:hash})

})

router.get('/getCertificate/:id',async(req,res)=>{
    const id = req.params.id;

    const certDetails = await readContract(client,{
        address:cert.contractAddress,
        abi:cert.abi,
        functionName:'Certificates',
        args:[id]
    })

    console.log("Certificate Details",certDetails);
    
    res.status(200).json({CertificateDetails:certDetails})
})

export default router;