function dados(){
    const ds = [
                    {id:1, login:"Paul", senha: "1234", email:"paul@gmail.com"},
                    {id:2, login:"Ringo", senha: "2222", email:"ringo@gmail.com"},
                    {id:3, login:"John", senha: "4444", email:"john@gmail.com"},
                    {id:4, login:"Jorge", senha: "3333", email:"jorge@gmail.com"}
               ]
const json = JSON.stringify(ds) 

localStorage.setItem("banco", json)

    return ds
}

//Apagar - Delete
function deletar(){
    localStorage.removeItem("banco")
}


//Inserir - Insert
function inserir(ids,lg,sn,ma){

    const ds = dados()

    let user = {id:ids,login:lg,senha:sn,email:ma}

    ds.push(user)

    const da = JSON.stringify(ds)

    
    localStorage.setItem("banco", da)

}

function insereNovo(){

    let cod = document.getElementById("id").value
    let log = document.getElementById("login").value
    let sen = document.getElementById("senha").value
    let ema = document.getElementById("email").value

    inserir(cod,log,sen,ema)
}

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

//localstorage aparecer no nav
console.log(dados())


