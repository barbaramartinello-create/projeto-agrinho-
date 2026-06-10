// =============================
// LABORATÓRIO INTERATIVO
// =============================

const soloSelect = document.getElementById("soloSelect");
const resultadoSolo = document.getElementById("resultadoSolo");

const solos = {
    arenoso: {
        nome: "Solo Arenoso",
        descricao: "Possui partículas grandes e pouca retenção de água.",
        agua: "20%",
        fertilidade: "40%",
        drenagem: "95%",
        ph: "6.0"
    },

    argiloso: {
        nome: "Solo Argiloso",
        descricao: "Rico em nutrientes e com alta retenção de água.",
        agua: "85%",
        fertilidade: "80%",
        drenagem: "40%",
        ph: "6.5"
    },

    humoso: {
        nome: "Solo Humoso",
        descricao: "Muito fértil por conter grande quantidade de matéria orgânica.",
        agua: "75%",
        fertilidade: "95%",
        drenagem: "70%",
        ph: "6.8"
    },

    calcario: {
        nome: "Solo Calcário",
        descricao: "Rico em minerais e utilizado para corrigir a acidez do solo.",
        agua: "55%",
        fertilidade: "65%",
        drenagem: "60%",
        ph: "7.5"
    }
};

soloSelect.addEventListener("change", () => {

    const tipo = soloSelect.value;

    if (!tipo) {
        resultadoSolo.innerHTML = `
            <h3>Informações do Solo</h3>
            <p>Selecione um solo acima.</p>
        `;
        return;
    }

    const solo = solos[tipo];

    resultadoSolo.innerHTML = `
        <h3>${solo.nome}</h3>

        <p>${solo.descricao}</p>

        <br>

        <p><strong>💧 Retenção de Água:</strong> ${solo.agua}</p>

        <p><strong>🌱 Fertilidade:</strong> ${solo.fertilidade}</p>

        <p><strong>🚰 Drenagem:</strong> ${solo.drenagem}</p>

        <p><strong>⚗️ pH Médio:</strong> ${solo.ph}</p>
    `;
});

// =============================
// QUIZ
// =============================

function verificarResposta(resposta){

    const resultado = document.getElementById("resultadoQuiz");

    if(resposta === "b"){

        resultado.innerHTML =
        "✅ Correto! O solo humoso possui muita matéria orgânica e alta fertilidade.";

        resultado.style.color = "green";

    }else{

        resultado.innerHTML =
        "❌ Resposta incorreta. O solo humoso é o mais rico em matéria orgânica.";

        resultado.style.color = "red";
    }
}

// =============================
// ANIMAÇÃO AO ROLAR
// =============================

const elementos = document.querySelectorAll(
    ".card, .bloco, .quiz-box, #resultadoSolo"
);

function revelar(){

    elementos.forEach(item => {

        const topo = item.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
}

elementos.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revelar);

revelar();

// =============================
// CONTADOR ANIMADO
// =============================

const numeros = document.querySelectorAll(".numero");

function animarContador(){

    numeros.forEach(numero => {

        const texto = numero.innerText;
        const alvo = parseInt(texto);

        let atual = 0;

        const incremento = Math.ceil(alvo / 80);

        const timer = setInterval(() => {

            atual += incremento;

            if(atual >= alvo){

                numero.innerText = texto;
                clearInterval(timer);

            }else{

                numero.innerText = atual;
            }

        }, 25);

    });
}

let contadorExecutado = false;

window.addEventListener("scroll", () => {

    const secao = document.querySelector(".curiosidades");

    const posicao = secao.getBoundingClientRect().top;

    if(posicao < window.innerHeight && !contadorExecutado){

        animarContador();
        contadorExecutado = true;
    }
});
