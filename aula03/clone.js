function dados(){

    const ds =  [
                {id:1, login:"amandak", senha: "12345", email: "amanda17@gmail.com"},
                {id:2, login:"amk", senha: "55555", email: "kaori17@gmail.com"},
                {id:3, login:"kaa", senha: "12333", email: "amandaka@gmail.com"}
               ]

    const dd = JSON.stringify(ds)
    
    localStorage.setItem("banco", dd)

    return ds

}

function removebd(){

    localStorage.removeItem("banco")
}