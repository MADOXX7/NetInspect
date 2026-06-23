async function carregarIP() {

    try {

        const resposta =
            await fetch("https://api.ipify.org?format=json");

        const dados = await resposta.json();

        document.getElementById("ip").textContent =
            dados.ip;

    } catch {

        document.getElementById("ip").textContent =
            "Erro ao obter IP";
    }
}

function copiarIP() {

    const ip =
        document.getElementById("ip").textContent;

    navigator.clipboard.writeText(ip);

    alert("IP copiado!");
}

carregarIP();
