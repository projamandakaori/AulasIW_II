function dados(){
    const ds = [
                    {id:1, login:"Paul", senha: "1234", email:"paul@gmail.com"},
                    {id:2, login:"Ringo", senha: "2222", email:"ringo@gmail.com"},
                    {id:3, login:"John", senha: "4444", email:"john@gmail.com"},
                    {id:4, login:"Jorge", senha: "3333", email:"jorge@gmail.com"}
               ]
    const json = JSON.stringify(ds) 

    //localStorage.setItem("banco", json)

    return ds
}

//Apagar - Delete
function deletar(){
    localStorage.removeItem("banco")
}


//Inserir - Insert
function inserir(){

    const ds = dados()
    let user = {id:5, login:"Michael", senha: "3333", email:"michael@gmail.com"}
    ds.push(user)
    console.log(ds)
}

console.log(inserir())

//Atualizar - Update
function atualizar(){

}

//ler - Select
function ler(){

}

function logon(user,pass){

    const ds = dados() 

    for(let i=0;i<ds.length;i++){
     if(user == ds[0].login && pass == ds[0].senha){
        console.log("Logado!")
        alert("Logado!")
        break
    }  
  }
}

function login(){
    let lg = document.getElementById("login").value
    let sn = document.getElementById("senha").value

    logon(lg,sn)

}

//localstorage aárecer no nav
console.log(dados())



