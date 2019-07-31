let nome = document.querySelector(".nome");
let email = document.querySelector(".email");
let confirm = document.querySelector(".confirm");
let naoSou = document.querySelector("a");
let botao = document.querySelector("button");
let texto = document.querySelector("p");

localStorage.setItem('email','w@gmail.com');

if(localStorage.email == confirm){
    form.style.display="none";
    section.style.display="initial";
    texto.innerHTML=`Seja bem vindo ${localStorage.email}`;
    naoSou.innerHTML=`Não sou ${localStorage.email};`
}
else{
    function acessar(){
        form.style.display="initial";
        localStorage.setItem("email", email.value);
        if(localStorage.nome){
            div.style.display="none";
            section.style.display="initial";
            texto.innerHTML=`Seja bem vindo ${localStorage.email}`;
            naoSou.innerHTML=`Não sou ${localStorage.email};`
        }
    }
}

function limpar(){
    localStorage.removeItem('email');
}

botao.onclick = acessar;
naoSou.onclick = limpar;