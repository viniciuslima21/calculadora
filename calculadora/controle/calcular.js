$(document).ready(function () {

    // Variáveis
    var iniciado = 0;
    var num1 = '';
    var num2 = '';
    var operador = '';

    // Funcões
    function zerar() {
        $('.visor p').empty();
        $('.visor p').append('0');
        iniciado = 0;
        botao = '';
        num1 = '';
        num2 = '';
        operador = '';
    }
    function posConta(num1) {
        $('.visor p').empty();
        $('.visor p').append(num1);
        num1 += '';
        num2 = '';
        operador = '';
    }

    // Quando clicar
    $('.botoes .col-3, .botoes .col-6').click(function () {
        // Tirar o 0
        if (iniciado == 0) {
            $('.visor p').empty();
            iniciado = 1;
        }

        // Receber o valor do click
        var botao = $(this).attr('id');

        // Definir ação / operador
        if (botao == 'clear') {
            zerar();
        } else if (botao == 'r') {
            zerar();
            alert('Não sei o que colocar aqui :(');
        } else if (botao == '+') {
            $('.visor p').append(botao);
            num2 = num1;
            num1 = '';
            operador = '+';
        } else if (botao == '-') {
            $('.visor p').append(botao);
            num2 = num1;
            num1 = '';
            operador = '-';
        } else if (botao == 'x') {
            $('.visor p').append(botao);
            num2 = num1;
            num1 = '';
            operador = 'x';
        } else if (botao == '/') {
            $('.visor p').append(botao);
            num2 = num1;
            num1 = '';
            operador = '/';
        } else if (botao == '%') {
            $('.visor p').append(botao);
            num2 = num1;
            num1 = '';
            operador = '%';
        } else if (botao == '=') {
            // Para não bugar
            if (operador == '' && iniciado == 1) {
                zerar();
                alert('ERRO: Nenhum operador aritmético foi definido, portanto, zeramos o visor!');
            } else {
                // Realizar as contas
                if (operador == '+') {
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);
                    num1 = num1 + num2;
                    posConta(num1);
                } else if (operador == '-') {
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);
                    num1 = num2 - num1;
                    posConta(num1);
                } else if (operador == 'x') {
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);
                    num1 = num1 * num2;
                    posConta(num1);
                } else if (operador == '/') {
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);
                    num1 = num2 / num1;
                    posConta(num1);
                } else if (operador == '%') {
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);
                    num1 = (num2 * num1) / 100;
                    posConta(num1);
                }
            }
        } else {
            // Adicionar botão no visor / variável
            $('.visor p').append(botao);
            num1 += '' + botao;
            botao = '';
        }
    })
})