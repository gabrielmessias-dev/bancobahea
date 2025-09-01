import leia = require('readline-sync');
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {

    let opcao: number;
    let continuar: boolean = true;

    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    
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
                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\nListar todas as Contas", colors.reset);
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nConsultar dados da Conta - por número", colors.reset);
                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\nAtualizar dados da Conta", colors.reset);
                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\nApagar uma Conta", colors.reset);
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