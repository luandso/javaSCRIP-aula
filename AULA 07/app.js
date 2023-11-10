/**************************************
* Objetivo: Criar uma API para responder dados de Estados e Cidades
* Data: 10/11/2023
* Autor: Luan
* Versão:1.0
***************************************/
/***************
 * Instalações para criações da API
 * express
 *   Dependencia do node para axiliar na criação de API
 * 
 * cors
 *   Dependencia para maniplar os recursos de acesso, permissões, etc da API
 * 
 * nody-parser
 *   Dependencia para auxiliar na chegada de dados na API
 * 
 */

//Import das bibliotes do projeto
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Cria um objeto tendo como referencia a classe do express
const app = express();

//Função para configrar as permissões do cors
app.use((request, response, next)=>{
    //Configura quem poderá fazr requisições na API
    response.header('Access-Controll-Allow-Origin', '*')

    response.header('Access-Controll-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

//EndPoints: Listar a sigla de todos os estados
app.get('/estados/sigla', cors(), async function(request, response, next){

    let controleListaEstados = require ('./modulo/funcoesEstado.js')
    
    let estados = controleListaEstados.getListaDeEstados();
    response.json(estados);
    response.status(200);
});

//Executa a API e faz
app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições')
})