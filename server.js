/* 
    Desenvolver uma aplicação servidora em que o 
    
    *livro*
    (isbn, titulo, data e autor(principal))
    
    possa ser
    resevado em
    
    *reserva* 
    (id_reserva, data_inicio_reserva, data_fim_reserva, isbn).

    Essa aplicação tem que atender as requisições CRUD oriundas de qualquer cliente-server por meio de uma API rest.
    Neste domínio, pode-se escolher uma das tabelas para a implementação das operações CRUD. De acordo a escolha
    da tabela, a data ou a data_inicio, tem que ser menor ou igual a data atual. Além dos end-points CRUD, implementar uma consulta diferente
    da do READ(CRUD). Usar ORM.

    um endpoint - 20%.
    três endpoints - 60%.
    crud completo - 90%.
    crud + consulta - 100%.
*/

const express = require('express');
const bodyParser = require('body-parser');
const livroRoutes = require('./routes/livroRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api/livros', livroRoutes);

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});