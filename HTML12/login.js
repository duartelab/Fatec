/*<!--
descricao: Exercicio aula 12.
nome_arquivo: login.html
nome_exercicio: Exercício 12 - Formulário de Login
nome_aluno: Raquel Duarte
email_aluno: raquel.duarte@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
-->*/

const name = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    let enviarForm = true;

        if (!name.value) {
	    console.log("O nome está vazio");
        enviarForm = false;
    }
        if (!password.value) {
        console.log("A senha está vazia");
        enviarForm = false;
    }
        if (password.value.length < 4 || password.value.length > 10) {
        console.log("A senha tem menos do que 4 ou mais do que 10 caracteres");
        enviarForm = false;
    }
        if (!enviarForm) {
        e.preventDefault();
    }
}   );