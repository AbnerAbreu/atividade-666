let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirm = document.querySelector("#confirm");
let senha = document.querySelector("#senha")
let naoSou = document.querySelector("a");
let botao = document.querySelector("button");
let texto = document.querySelector("p");
let form = document.querySelector("form");
let section = document.querySelector("section");
let texth3 = document.querySelector(".texth3");
let dados = document.querySelector("h1");



if (localStorage.email){
    form.style.display = "none";
    section.style.display = "block";
    texto.innerHTML = `Seja bem vindo ${localStorage.nome}`;
    naoSou.innerHTML = `Não sou ${localStorage.nome}`;
} else {
    function cadastrar(){
        form.style.display = "block";
        section.style.display = "none";
        acessar();
        if (localStorage.email) {
            form.style.display = "none";
            section.style.display = "block";
            texto.innerHTML = `Seja bem vindo ${localStorage.email}`;
            naoSou.innerHTML = `Não sou ${localStorage.email}!`;
        }
    }

}

function limpar() {
    localStorage.clear();
}
function acessar() {
    if(email.value === confirm.value){
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("senha", senha.value);
    }
}

botao.onclick = cadastrar;
naoSou.onclick = limpar;

