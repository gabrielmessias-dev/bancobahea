import leia = require('readline-sync');
import { colors } from './src/util/Colors';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main() {

    let contas: ContaController = new ContaController();
    
    let opcao: number, numero: number, agencia: number, tipo: number, saldo: number, limite: number, aniversario: number
    let titular: string;
    let continuar: boolean = true;

    const tiposContas = ["Conta Corrente", "Conta Poupanca"];

    console.log("\nCriar contas\n")
    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();

    do {
        console.log(colors.bg.black + colors.fg.blue + "\n*****************************************************");
        console.log("                                                     ");
        console.log(colors.bg.black + colors.fg.red + "                BANCO DO BAHEA                       ");
        console.log("                                                     ");
        console.log(colors.bg.black + colors.fg.blue + "*****************************************************");
        console.log(colors.bg.black + colors.fg.white + "                                                     ");
        console.log(colors.bg.black + colors.fg.red + "           1 - Criar Conta                           ");
        console.log("           2 - Listar todas as Contas                ");
        console.log("           3 - Buscar Conta por Numero               ");
        console.log("           4 - Atualizar Dados da Conta              ");
        console.log("           5 - Apagar Conta                          ");
        console.log("           6 - Sacar                                 ");
        console.log("           7 - Depositar                             ");
        console.log("           8 - Transferir valores entre Contas       ");
        console.log("           9 - Sair                                  ");
        console.log("                                                     ");
        console.log(colors.bg.black + colors.fg.blue + "*****************************************************");
        console.log("                                                     ");
        console.log(colors.reset + "Entre com a opção desejada: ");

        opcao = leia.questionInt();

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\nCriar Conta", colors.reset);

                console.log (colors.fg.whitestrong, "\nDigite o Numero da Agência: ", colors.reset);
                agencia = leia.questionInt();

                console.log (colors.fg.whitestrong, "\nDigite o nome do titular da Conta: ", colors.reset);
                titular = leia.question();

                console.log (colors.fg.whitestrong, "\nDigite o Tipo da Conta: ", colors.reset);
                tipo = leia.questionInt();

                console.log (colors.fg.whitestrong, "\nDigite o Saldo da Conta: ", colors.reset);
                saldo = leia.questionInt();

                    switch (tipo) {
                        case 1:
                            console.log (colors.fg.whitestrong, "\nDigite o Limite da Conta em R$: ", colors.reset);
                            limite = leia.questionFloat();
                            contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                            break;
                        
                        case 2:
                            console.log (colors.fg.whitestrong, "\nDigite o Aniversário da Conta: ", colors.reset);
                            aniversario = leia.questionInt();
                            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                            break;
                    }
                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\nListar todas as Contas", colors.reset);
                contas.listarTodas();
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nConsultar dados da Conta - por número", colors.reset);

                console.log (colors.fg.whitestrong, "\nDigite o Numero da Conta: ", colors.reset);
                numero = leia.questionInt();

                contas.procurarPorNumero(numero);

                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\nAtualizar dados da Conta", colors.reset);
                console.log (colors.fg.whitestrong, "\nDigite o Numero da Conta: ", colors.reset);
                numero = leia.questionInt();

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {
                    console.log (colors.fg.whitestrong, "\nDigite o Numero da Agência: ", colors.reset);
                    agencia = leia.questionInt();

                    console.log (colors.fg.whitestrong, "\nDigite o nome do titular da Conta: ", colors.reset);
                    titular = leia.question();

                    console.log (colors.fg.whitestrong, "\nDigite o Saldo da Conta: ", colors.reset);
                    saldo = leia.questionFloat();

                    tipo = conta.tipo;

                    switch(tipo) {
                        case 1:
                            console.log (colors.fg.whitestrong, "\nDigite o Limite da Conta em R$: ", colors.reset);
                            limite = leia.questionFloat();
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        
                        case 2:
                            console.log (colors.fg.whitestrong, "\nDigite o Aniversário da Conta: ", colors.reset);
                            aniversario = leia.questionInt();
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                    }
                } else {

                    console.log (colors.fg.whitestrong, `\nA conta numero ${numero} nao foi encontrada`, colors.reset);
                }

                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\nApagar uma Conta", colors.reset);

                console.log (colors.fg.whitestrong, "\nDigite o Numero da Conta: ", colors.reset);
                numero = leia.questionInt();

                contas.deletar(numero);

                keyPress();
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\nSaque", colors.reset);
                keyPress();
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\nDepósito", colors.reset);
                keyPress();
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\nTransferência entre Contas", colors.reset);
                keyPress();
                break;
            case 9:
                console.log(colors.bg.black + colors.fg.red +"Banco do Bahea" + colors.bg.black + colors.fg.white +" - " + colors.bg.black + colors.fg.blue + "O orgulho de ser Tricolor!");
                console.log(colors.reset, "");
                console.log(colors.bg.black + colors.fg.red +"*****************************************************");
                console.log(colors.bg.black + colors.fg.blue +"Projeto Desenvolvido por:");
                console.log(colors.bg.black + colors.fg.blue +"Gabriel Messias - gabrielmessias@outlook.com");
                console.log(colors.bg.black + colors.fg.blue +"github.com/gabrielmessias-dev");
                console.log(colors.bg.black + colors.fg.red +"*****************************************************");
                console.log(colors.reset, "");
                continuar = false;
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!", colors.reset);
                keyPress()
                break;
        }
    } while (continuar);
}

   export function sobre(): void {
                console.log(colors.bg.black + colors.fg.red + "\n******************************************************");
                console.log(colors.bg.black + colors.fg.blue + "Projeto Desenvolvido por:");
                console.log(colors.bg.black + colors.fg.red + "Gabriel Messias - gabrielmessias@outlook.com");
                console.log(colors.bg.black + colors.fg.blue + "github.com/gabrielmessias-dev");
                console.log(colors.bg.black + colors.fg.red + "\n******************************************************");
                console.log(colors.reset, "");
        
    }

    export function keyPress(): void {
            console.log(colors.reset, "");
            console.log("\nPressione enter para continuar...");
            leia.prompt();
    }

    main();