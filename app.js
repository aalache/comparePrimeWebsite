import express from "express"
import nodemailer from "nodemailer"
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path';

import { URL } from 'url';



dotenv.config();

const app = express();
const port = process.env.SERVER_PORT ;



app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ["GET","POST"],
    }
))

app.use(express.json());
app.use(express.urlencoded({ 
    extended: true ,
}));



const __dirname = new URL('.', import.meta.url).pathname;


app.use(express.static('./client/build'));

app.get("*",(req,res) => {
    res.sendFile('./client/build/index.html', {root: __dirname}); 
})

 

// {name,fullname,email,phone,anniversary,address,franchise,npa}

async function sendEmail(data){

    console.log('data:')
    console.log(data)

    const html = `
            <h2> Informations sur ${data.nom} ${data.prenom} </h2>

            <h4>Nom:  ${data.nom}</h4>
            <h4>Prenom: ${data.prenom} </h4>
            <h4>Email:  ${data.email} </h4>
            <h4>Telephone: ${data.phone} </h4>
            <h4>Date de Naissance : ${data.anniversary} </h4>
            <h4>Adresse: ${data.adresse}  </h4>
            <h4>Franchise: ${data.franchise}  </h4>
            <h4>NPA: ${data.npa}  </h4>
    `;
    
    const transporter = nodemailer.createTransport({
        host:process.env.TRANSPORTER_HOST,
        port:process.env.TRANSPORTER_PORT,
        secure:true,
        auth:{
            user:process.env.EMAIL_ADDRESS_DESTINATION,
            pass:process.env.EMAIL_ADDRESS_PASSWORD,
        }
    });

    const info = await transporter.sendMail({
        from: `${data.nom} ${data.prenom}  <${data.email}>`,
        to:process.env.EMAIL_ADDRESS_DESTINATION,
        subject:'Nouveau Client',
        html:html,
    });

    console.log("Message Sent: " + info.messageId);
    console.log("Rejected: " + info.rejected);

}



app.post("/send",(req,res) => {
    console.log("Message sent!")
    console.log(req.body)
    sendEmail(req.body)
      .then((response) => res.send(response.message))
      .catch((error) => res.status(500).send(error.message));
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});



















