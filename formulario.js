let usuarios=[
    {id:123456,nombre:"Juancho", apellido:"Polo", direccion:"calle 9",mail:"juancho@mial.com"},
    {id:456789,nombre:"Paula", apellido:"Grisales", direccion:"calle 23",mail:"Paula@mial.com"},
    {id:123789, nombre:"German", apellido:"Martínez", direccion:"calle 45",mail:"German@mial.com"}
]


const form = document.querySelectorAll(".needs-validation");

const listar = ()=>{
    let tbody = document.getElementById("ctabla")
    let contenido=""
    for (let i = 0; i < usuarios.length; i++) {
        contenido += "<tr><td>"+usuarios[i].id+"</td><td>"+usuarios[i].nombre+"</td><td>"+usuarios[i].apellido+"</td><td>"+usuarios[i].direccion+"</td><td>"+usuarios[i].mail+"</td></tr>"
    }
    tbody.innerHTML = contenido
}

const registrar=()=>{
    const id=document.getElementById("cedula").value.trim()
    const nombre=document.getElementById("nombre").value
    const apellido=document.getElementById("apellido").value
    const direccion=document.getElementById("direccion").value
    const mail=document.getElementById("mail").value.trim()
    let existe = false;

    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].id == id || usuarios[i].mail == mail){
            existe = true;
            console.log("Datos "+ usuarios[i].id + " - "+ id)
        }
    }    
    
    if (nombre.length == 0 || id.length == 0 || apellido.length == 0){
        alert("Rellene todos los datos")
    }else{
        if(existe){
            alert("Usuario ya registrado")
        }else{
            let tbody = document.getElementById("ctabla")
        
            const nuevo={
                id,nombre,apellido,direccion,mail
            }
            usuarios.push(nuevo)
            tbody.innerHTML +="<tr><td>"+id+"</td><td>"+nombre+"</td><td>"+apellido+"</td><td>"+direccion+"</td></td>"+"</td><td>"+mail+"</td></tr>"
        }
    }
    
}

// agregar validaciones
// agregar campo registrar
// 