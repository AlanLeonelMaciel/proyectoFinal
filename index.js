import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import authRouter from './src/routes/authRoutes.js'
import productsRouter from "./src/routes/productsRoutes.js"
import authentication from "./src/middlewares/authentication.js"

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send({message:"Bienvenido a mi api",
        alumno:"Alan Leonel Maciel",
        Login: "Email: alanleonelmaciel@gmail.com Contraseña: 1234"
    })
})
app.use("/auth",authRouter);
app.use("/api",authentication,productsRouter);
app.use((req,res,next)=>{
    res.status(404).send("Error al acceder a la ruta, no existe.");
});

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`aplicacion corriendo en http://localhost:${PORT}`);
});