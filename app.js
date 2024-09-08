function renderizarTabela() {
    // Seleciona o corpo da tabela (tbody) onde os dados serão inseridos
    const tabelaBody = document.getElementById('tabelaJogadores').querySelector('tbody');
    // Limpa o conteúdo anterior do tbody para evitar duplicação de dados
    tabelaBody.innerHTML = '';
    
    // Itera sobre cada jogador no array 'jogadores'
    jogadores.forEach(jogador => {
        // Cria uma nova linha (tr) na tabela
        const novaLinha = document.createElement('tr');
        // Cria o conteúdo da linha, inserindo os dados do jogador em cada célula (td)
        novaLinha.innerHTML = `
            <td><a href="${jogador.link}" target="_blank">${jogador.nome}</a></td>
            <td>${jogador.equipe}</td>
            <td>${jogador.valor/1000000}</td>
            <td>${jogador.idade}</td>
            <td>${jogador.pais}</td>
            <td>${jogador.posicao}</td>
            <td>${jogador.pePreferido}</td>
            <td>${jogador.notaSofascore}</td>
            <td>${jogador.jogos}</td>
            <td>${jogador.minPorJogo}</td>
            <td>${jogador.gols}</td>
            <td>${jogador.xG}</td>
            <td>${jogador.assists}</td>
            <td>${jogador.xA}</td>
            <td>${jogador.cartaoAmar}</td>
            <td>${jogador.cartaoVerm}</td>
            `;
        // Adiciona a nova linha ao corpo da tabela
        tabelaBody.appendChild(novaLinha);
    });
    }
    
    // Chama a função para renderizar a tabela inicialmente
    renderizarTabela();

    function pesquisar() {
        // Obtém o termo de pesquisa digitado pelo usuário e converte para minúsculas
        let termoPesquisa = document.getElementById("resultados-pequisa").value.toLowerCase(); 
        // Seleciona a seção onde os resultados da pesquisa serão exibidos
        let section = document.getElementById("resultados-pequisa");
        
        const tabelaBody = document.getElementById('tabelaJogadores').querySelector('tbody');

        let campoPesquisa = document.getElementById("campo-pesquisa");
        
        tabelaBody.innerHTML = "";
        
        // Itera sobre cada jogador
        jogadores.forEach(jogador => {
            if(dados.titulo.includes(campoPesquisa)) {
                if (jogador.nome.toLowerCase().includes(termoPesquisa)) {
                    // Se o jogador corresponder à pesquisa, cria o HTML da linha da tabela e adiciona à string 'resultados'
                    const novaLinha = document.createElement('tr');
                    novaLinha.innerHTML = `
                    <div class="tabela-container">
                    <table id="tabelaJogadores">
                        <thead>
                            <tr>
                                <td><a href="${jogador.link}" target="_blank">${jogador.nome}</a></td>
                                <td>${jogador.equipe}</td>
                                <td>${jogador.valor/1000000}</td>
                                <td>${jogador.idade}</td>
                                <td>${jogador.pais}</td>
                                <td>${jogador.posicao}</td>
                                <td>${jogador.pePreferido}</td>
                                <td>${jogador.notaSofascore}</td>
                                <td>${jogador.jogos}</td>
                                <td>${jogador.minPorJogo}</td>
                                <td>${jogador.gols}</td>
                                <td>${jogador.xG}</td>
                                <td>${jogador.assists}</td>
                                <td>${jogador.xA}</td>
                                <td>${jogador.cartaoAmar}</td>
                                <td>${jogador.cartaoVerm}</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                    </div>
                    `;
                    tabelaBody.appendChild(novaLinha);
                }
            }            
        });
    }