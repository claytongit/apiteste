const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
var app          = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/vennder', function(req, res) {
  var dados = [
    {
      "nomeEmpresa": "Cinndi",
      "Endereco": "Centro",
      "cidade": "São José dos Campos - SP",
      "whatsApp": "(12) 99123-4567",
      "categorias": [
        {
          "nomeCategoria": "Bebida",
          "produtos":[
            {
              "nomeProduto": "Coca-cola lata",
              "preco": 2,
              "status": "ativado",
              "min": 2,
              "max": 4,
              "foto": "https://argolaobebidas.com.br/wp-content/uploads/2021/03/coca_lt_350ml.png"
            },
            {
              "nomeProduto": "Fanta lata",
              "preco": 2,
              "status": "ativado",
              "min": 2,
              "max": 4,
              "foto": "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Imagem-Fanta-Laranja-PNG.png"
            }
          ]
        },
        {
          "nomeCategoria": "Pizza",
          "produtos":[
            {
              "nomeProduto": "Pizza Mussarela",
              "preco": 28,
              "status": "ativado",
              "min": 2,
              "max": 4,
              "foto": "https://www.didio.com.br/wp-content/uploads/2015/10/Mussarela2.png"
            }
          ]
        },
        {
          "nomeCategoria": "Lanche",
          "produtos":[
            {
              "nomeProduto": "X-Salada",
              "preco": 12,
              "status": "ativado",
              "min": 2,
              "max": 4,
              "foto": "https://2.bp.blogspot.com/-RYsrnDN4ui8/Vu3YrGO0SQI/AAAAAAAABkA/a10Szk00yGQ_8YF6AmbF083SAVsd1H31w/s640/dfhgad.png"
            },
            {
              "nomeProduto": "X-Salada Bacon",
              "preco": 14,
              "status": "ativado",
              "min": 2,
              "max": 4,
              "foto": "https://img.comunidades.net/pon/pontodeencontrorestaurant/calabreza_salada_bacom.png"
            }
          ]
        }
      ],
      "subprodutos":[
        {
          "nomeSub": "borda de catupiry",
          "preco": 2
        },
        {
          "nomeSub": "borda de cheddae",
          "preco": 2
        },
        {
          "nomeSub": "bacon",
          "preco": 3
        },
        {
          "nomeSub": "batata frita",
          "preco": 0
        }
      ]
    }
  ];

  res.send(dados);
});

app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000.');
});