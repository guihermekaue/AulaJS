fetch("http://localhost:3000/usuarios").then(async res=>{
    if(!res.ok){
        throw new Error("Erro na requisição(buscar usúarios)");
    }
    return res.json();
}).then(usuarios =>{
    const listaUsuarios = document.getElementById("lista-usuarios");
    console.log(listaUsuarios);
    usuarios.forEach(usuario =>{
        console.log(usuario.nome);
        listaUsuarios.innerHTML += `<li class= "list-group-item"> ${usuario.nome}<li>`;

    })
})

.catch(err=>{
    console.error(err);
})

    
