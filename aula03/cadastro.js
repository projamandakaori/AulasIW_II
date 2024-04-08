function addUsuario(){

    let id = document.getElementById("id").value
    let lg = document.getElementById("login").value
    let sn = document.getElementById("senha").value
    let mail = document.getElementById("email").value

    const addUser = {id:id, login:lg, senha:sn, email:mail}

    const bd = JSON.parse(localStorage.getItem("banco"))

    console.log(bd)

    return bd
}