async function buscarPokemon() {
    const input = document.getElementById('pokemon-input');
    const pokemonBusca = input.value.toLowerCase().trim(); // A API exige nomes em minúsculo
    
    if (pokemonBusca === "") return; // Não faz nada se o campo estiver vazio

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonBusca}`;

    try {
        const resposta = await fetch(url);
        
        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado");
        }

        const dados = await resposta.json(); // Aqui estão os dados iguais ao seu JSON

        // Agora vamos "puxar" as informações específicas
        exibirPokemon(dados);

    } catch (erro) {
        alert(erro.message);
        document.getElementById('pokemon-card').style.display = 'none';
    }
}

function exibirPokemon(pokemon) {
    const card = document.getElementById('pokemon-card');
    const nome = document.getElementById('poke-name');
    const imagem = document.getElementById('poke-img');
    const tipo = document.getElementById('poke-type');
    const peso = document.getElementById('poke-weight');

    // Extraindo dados baseados na estrutura do seu JSON:
    nome.textContent = pokemon.name.toUpperCase();
    imagem.src = pokemon.sprites.front_default; // Pega o link da imagem
    peso.textContent = pokemon.weight;
    
    // Mapeia os tipos (pois pode ter mais de um)
    tipo.textContent = pokemon.types.map(t => t.type.name).join(', ');

    card.style.display = 'block'; // Mostra o card com os dados
}

// Variáveis globais para guardar os links e o estado atual
let urlNormal = "";
let urlShiny = "";
let estaMostrandoShiny = false;

async function buscarPokemon() {
    const input = document.getElementById('pokemon-input');
    const pokemonBusca = input.value.toLowerCase().trim();
    
    if (!pokemonBusca) return;

    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBusca}`);
        if (!resposta.ok) throw new Error("Pokémon não encontrado!");

        const dados = await resposta.json();

        // 1. Guardamos os links das imagens que vieram no seu JSON
        urlNormal = dados.sprites.front_default;
        urlShiny = dados.sprites.front_shiny;

        // 2. Resetamos para sempre começar mostrando o normal
        estaMostrandoShiny = false;
        
        exibirPokemon(dados);

    } catch (erro) {
        alert(erro.message);
    }
}

function exibirPokemon(pokemon) {
    const card = document.getElementById('pokemon-card');
    const imgElemento = document.getElementById('poke-img');
    const btnToggle = document.getElementById('btn-toggle');

    document.getElementById('poke-name').textContent = pokemon.name.toUpperCase();
    document.getElementById('poke-type').textContent = pokemon.types.map(t => t.type.name).join(', ');
    
    // Define a imagem inicial (normal)
    imgElemento.src = urlNormal;
    btnToggle.textContent = "Ver Versão Shiny";
    
    card.style.display = 'block';
}

// ESTA É A FUNÇÃO DO BOTÃO
function alternarShiny() {
    const imgElemento = document.getElementById('poke-img');
    const btnToggle = document.getElementById('btn-toggle');

    if (estaMostrandoShiny) {
        // Se estava shiny, volta para o normal
        imgElemento.src = urlNormal;
        btnToggle.textContent = "Ver Versão Shiny";
        estaMostrandoShiny = false;
    } else {
        // Se estava normal, muda para o shiny
        imgElemento.src = urlShiny;
        btnToggle.textContent = "Ver Versão Normal";
        estaMostrandoShiny = true;
    }
}