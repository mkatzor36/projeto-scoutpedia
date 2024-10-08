let jogadores = [
    {
        nome: "Lionel Messi",
        link: "https://www.sofascore.com/player/lionel-messi/12994",
        equipe: "Inter Miami",
        liga: "Major League Soccer",
        valor: 33000000,
        idade: 37,
        pais: "Argentina",
        posicao: "SA",
        pePreferido: "Esquerdo",
        notaSofascore: 8.41,
        jogos: 12,
        minPorJogo: 86,
        gols: 12,
        xG: 8.30,
        assists: 9,
        xA: 3.59,
        cartaoAmar: 0,
        cartaoVerm: 0,
    },
    {
        nome: "Jonathan Calleri",
        link: "https://www.sofascore.com/player/jonathan-calleri/340519",
        equipe: "São Paulo",
        liga: "Brasileirão Série A",
        valor: 3700000,
        idade: 30,
        pais: "Argentina",
        posicao: "CA",
        pePreferido: "Direito",
        notaSofascore: 6.97,
        jogos: 21,
        minPorJogo: 76,
        gols: 5,
        xG: 4.34,
        assists: 2,
        xA: 1.11,
        cartaoAmar: 4,
        cartaoVerm: 0,
    },
    {
        nome: "Yuri Alberto",
        link: "https://www.sofascore.com/player/yuri-alberto/905463",
        equipe: "Corinthians",
        liga: "Brasileirão Série A",
        valor: 12400000,
        idade: 23,
        pais: "Brasil",
        posicao: "CA",
        pePreferido: "Direito",
        notaSofascore: 6.90,
        jogos: 19,
        minPorJogo: 75,
        gols: 4,
        xG: 4.23,
        assists: 3,
        xA: 0.81,
        cartaoAmar: 4,
        cartaoVerm: 1,
    },
    {
        nome: "Memphis Depay",
        link: "https://www.sofascore.com/player/memphis-depay/138833",
        equipe: "Corinthians",
        liga: "Brasileirão Série A",
        valor: 10000000,
        idade: 30,
        pais: "Holanda",
        posicao: "SA",
        pePreferido: "Direito",
        notaSofascore: 6.81,
        jogos: 23,
        minPorJogo: 39,
        gols: 5,
        xG: 5.76,
        assists: 1,
        xA: 1.61,
        cartaoAmar: 2,
        cartaoVerm: 0,
    },
    {
        nome: "Yannick Bolasie",
        link: "https://www.sofascore.com/player/yannick-bolasie/46620",
        equipe: "Criciúma",
        liga: "Brasileirão Série A",
        valor: 260000,
        idade: 35,
        pais: "RD Congo",
        posicao: "CA",
        pePreferido: "Ambos",
        notaSofascore: 7.08,
        jogos: 21,
        minPorJogo: 72,
        gols: 6,
        xG: 6.37,
        assists: 3,
        xA: 0.96,
        cartaoAmar: 2,
        cartaoVerm: 0,
    },
    {
        nome: "Robert Arboleda",
        link: "https://www.sofascore.com/player/robert-arboleda/338937",
        equipe: "São Paulo",
        liga: "Brasileirão Série A",
        valor: 1200000,
        idade: 32,
        pais: "Equador",
        posicao: "ZG",
        pePreferido: "Direito",
        notaSofascore: 7.01,
        jogos: 22,
        minPorJogo: 85,
        gols: 1,
        xG: 0.84,
        assists: 0,
        xA: 0.18,
        cartaoAmar: 2,
        cartaoVerm: 0,
    },
    {
        nome: "Luiz Henrique",
        link: "https://www.sofascore.com/player/luiz-henrique/1035995",
        equipe: "Botafogo",
        liga: "Brasileirão Série A",
        valor: 12600000,
        idade: 23,
        pais: "Brasil",
        posicao: "PD",
        pePreferido: "Esquerdo",
        notaSofascore: 7.06,
        jogos: 23,
        minPorJogo: 70,
        gols: 4,
        xG: 2.26,
        assists: 3,
        xA: 2.09,
        cartaoAmar: 3,
        cartaoVerm: 0,
    },
    {
        nome: "Marlon Freitas",
        link: "https://www.sofascore.com/player/marlon-freitas/840202",
        equipe: "Botafogo",
        liga: "Brasileirão Série A",
        valor: 3400000,
        idade: 29,
        pais: "Brasil",
        posicao: "MC",
        pePreferido: "Direito",
        notaSofascore: 7.20,
        jogos: 22,
        minPorJogo: 72,
        gols: 0,
        xG: 0.84,
        assists: 4,
        xA: 2.08,
        cartaoAmar: 5,
        cartaoVerm: 0,
    },
    {
        nome: "Bastos",
        link: "https://www.sofascore.com/player/bastos/215956",
        equipe: "Botafogo",
        liga: "Brasileirão Série A",
        valor: 720000,
        idade: 33,
        pais: "Angola",
        posicao: "ZG",
        pePreferido: "Direito",
        notaSofascore: 7.06,
        jogos: 23,
        minPorJogo: 86,
        gols: 3,
        xG: 1.06,
        assists: 0,
        xA: 0.24,
        cartaoAmar: 4,
        cartaoVerm: 0,
    },
    {
        nome: "Estevão",
        link: "https://www.sofascore.com/player/estevao/1597265",
        equipe: "Palmeiras",
        liga: "Brasileirão Série A",
        valor: 31000000,
        idade: 17,
        pais: "Brasil",
        posicao: "PD",
        pePreferido: "Esquerdo",
        notaSofascore: 7.21,
        jogos: 21,
        minPorJogo: 63,
        gols: 8,
        xG: 5.59,
        assists: 7,
        xA: 2.31,
        cartaoAmar: 2,
        cartaoVerm: 0,
    },
    {
        nome: "Rodrygo",
        link: "https://www.sofascore.com/player/rodrygo/910536",
        equipe: "Real Madrid",
        liga: "La Liga",
        valor: 117000000,
        idade: 23,
        pais: "Brasil",
        posicao: "PD",
        pePreferido: "Direito",
        notaSofascore: 7.31,
        jogos: 34,
        minPorJogo: 70,
        gols: 10,
        xG: 11.74,
        assists: 5,
        xA: 4.19,
        cartaoAmar: 2,
        cartaoVerm: 0,
    },
    {
        nome: "Piero Hincapié",
        link: "https://www.sofascore.com/player/piero-hincapie/1002837",
        equipe: "Bayer 04 Leverkusen",
        liga: "Bundesliga",
        valor: 37000000,
        idade: 22,
        pais: "Equador",
        posicao: "ZG",
        pePreferido: "Esquerdo",
        notaSofascore: 7.12,
        jogos: 26,
        minPorJogo: 58,
        gols: 1,
        xG: 1.95,
        assists: 2,
        xA: 0.87,
        cartaoAmar: 2,
        cartaoVerm: 0,
    },
    {
        nome: "Tim Kleindienst",
        link: "https://www.sofascore.com/player/tim-kleindienst/228981",
        equipe: "Borussia M'gladbach",
        liga: "Bundesliga",
        valor: 5800000,
        idade: 29,
        pais: "Alemanha",
        posicao: "CA",
        pePreferido: "Direito",
        notaSofascore: 7.05,
        jogos: 33,
        minPorJogo: 87,
        gols: 12,
        xG: 13.92,
        assists: 3,
        xA: 1.98,
        cartaoAmar: 6,
        cartaoVerm: 0,
    },
    {
        nome: "Marcos Acuña",
        link: "https://www.sofascore.com/player/marcos-acuna/578560",
        equipe: "River Plate",
        liga: "Liga Profesional",
        valor: 3600000,
        idade: 32,
        pais: "Argentina",
        posicao: "LE",
        pePreferido: "Esquerdo",
        notaSofascore: 6.91,
        jogos: 21,
        minPorJogo: 62,
        gols: 1,
        xG: 0.31,
        assists: 2,
        xA: 2.09,
        cartaoAmar: 7,
        cartaoVerm: 0,
    },
    {
        nome: "Claudio Aquino",
        link: "https://www.sofascore.com/player/claudio-aquino/340455",
        equipe: "Vélez Sarsfield",
        liga: "Liga Profesional",
        valor: 1600000,
        idade: 33,
        pais: "Argentina",
        posicao: "ME",
        pePreferido: "Direito",
        notaSofascore: 7.59,
        jogos: 13,
        minPorJogo: 75,
        gols: 7,
        xG: 3.64,
        assists: 3,
        xA: 2.16,
        cartaoAmar: 1,
        cartaoVerm: 0,
    },
    {
        nome: "Mathias Villasanti",
        link: "https://www.sofascore.com/player/mathias-villasanti/1139775",
        equipe: "Grêmio",
        liga: "Brasileirão Série A",
        valor: 10300000,
        idade: 27,
        pais: "Paraguai",
        posicao: "VL",
        pePreferido: "Direito",
        notaSofascore: 7.01,
        jogos: 14,
        minPorJogo: 90,
        gols: 1,
        xG: 0.52,
        assists: 1,
        xA: 1.22,
        cartaoAmar: 2,
        cartaoVerm: 0,
    },
    {
        nome: "Breno Lopes",
        link: "https://www.sofascore.com/player/breno-lopes/937552",
        equipe: "Fortaleza",
        liga: "Brasileirão Série A",
        valor: 1700000,
        idade: 28,
        pais: "Brasil",
        posicao: "PE",
        pePreferido: "Direito",
        notaSofascore: 7.07,
        jogos: 20,
        minPorJogo: 71,
        gols: 4,
        xG: 3.82,
        assists: 3,
        xA: 1.19,
        cartaoAmar: 5,
        cartaoVerm: 0,
    },
    {
        nome: "Pedro",
        link: "https://www.sofascore.com/player/pedro/840219",
        equipe: "Flamengo",
        liga: "Brasileirão Série A",
        valor: 22000000,
        idade: 27,
        pais: "Brasil",
        posicao: "CA",
        pePreferido: "Direito",
        notaSofascore: 7.25,
        jogos: 21,
        minPorJogo: 79,
        gols: 11,
        xG: 10.68,
        assists: 5,
        xA: 2.36,
        cartaoAmar: 3,
        cartaoVerm: 0,
    },
    {
        nome: "Giorgian De Arrascaeta",
        link: "https://www.sofascore.com/player/giorgian-de-arrascaeta/333587",
        equipe: "Flamengo",
        liga: "Brasileirão Série A",
        valor: 14500000,
        idade: 30,
        pais: "Uruguai",
        posicao: "MA",
        pePreferido: "Direito",
        notaSofascore: 7.61,
        jogos: 10,
        minPorJogo: 72,
        gols: 4,
        xG: 1.52,
        assists: 4,
        xA: 1.78,
        cartaoAmar: 1,
        cartaoVerm: 0,
    },
    {
        nome: "Matheus Pereira",
        link: "https://www.sofascore.com/player/matheus-pereira/377238",
        equipe: "Cruzeiro",
        liga: "Brasileirão Série A",
        valor: 6800000,
        idade: 28,
        pais: "Brasil",
        posicao: "MA",
        pePreferido: "Esquerdo",
        notaSofascore: 7.57,
        jogos: 23,
        minPorJogo: 87,
        gols: 6,
        xG: 3.71,
        assists: 5,
        xA: 3.81,
        cartaoAmar: 7,
        cartaoVerm: 0,
    }
]