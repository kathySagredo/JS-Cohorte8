
//GET
fetch("https://pf-4-3-end-of-module-assessment-server.cohorte08js.repl.co/get_cheeps")
.then((respuesta => respuesta.json()))
.then(json => console.log(json))
.catch(err => console.log(err))

//POST

const prompt = require("prompt-sync")();

async function postTuit(){
await fetch("",{
    method: "POST",
    headers: {
        "Content-Type":"application/json",
    },
    body: JSON.stringify({
        message: "Nuevo mensaje"
    })
})
}


fetch("",{
    method: "POST",
    headers: {
        "Content-Type":"application/json",
    },
    body: JSON.stringify({
        message: "Nuevo Mensaje"
    })
})
