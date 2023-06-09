const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123123",
    database: "bdprogramas",
})

app.delete("/programas/:id", (req, res) =>{

    const { id } = req.params;
    console.log("informação: ", id)

    let SQL = "DELETE FROM listaprogramas WHERE (`id` = ?)";

    db.query(SQL, id, (err, result) => {
        console.log(err);
    })
})

// READ 
app.get("/programas", (req, res) =>{

    let SQL = "SELECT * FROM listaprogramas";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})


app.post("/programa", (req, res) =>{
    const { programas } = req.body;
    let SQL = "INSERT INTO Listaprogramas ( programas ) VALUES (?)";
    db.query(SQL, item, (err, result) => {
        console.log(err);
    })
})

app.listen(3001, () => {
    console.log("rodando servidor");
});