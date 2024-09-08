function pesquisar(){

let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value

if (!campoPesquisa){
    section.innerHTML = "<p>Busca vazia</p>"
    return 
}

campoPesquisa = campoPesquisa.toLowerCase()

//console.log(campoPesquisa);

//console.log(section);

let resultados = "";
let titulo = "";
let descricao = "";
let ferramentas = "";
let tags = "";

    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        ferramentas = dado.ferramentas.toLowerCase()
        tags = dado.tags.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || ferramentas.includes(campoPesquisa) || tags.includes(campoPesquisa))
            {
            resultados += `

            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}
                    </a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="ferramentas-meta">${dado.ferramentas}</p>
            </div>
        `;
        }
    
    //    console.log(dado.titulo.includes(campoPesquisa))
    }
    if (!resultados){
        resultados = "<p>Nada foi encontrado!</p>"

    }

    section.innerHTML = resultados;

}