import express,{json} from 'express';
import router from './routes/adminCert.js';

const app = express();
app.use(json())

app.use('/',router)

app.listen(8000,()=>{
    console.log("Suucessfully listening to port 8000");
    
})