import { Conta } from '../model/Conta';
import { colors } from '../util/Colors';
import { ContaRepository } from './../repository/ContaRepository';

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else {
            console.log(colors.fg.blue, colors.bg.red + `A conta ${numero} nao foi encontrada` + colors.reset);
        }
    }

    listarTodas(): void {
         for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.red, colors.bg.green + `A conta ${conta.numero} foi criada com sucesso` + colors.reset);
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.red, colors.bg.green + `A conta ${conta.numero} foi atualizada com sucesso` + colors.reset);
        } else {
            console.log(colors.fg.blue, colors.bg.red + `A conta ${conta.numero} nao foi encontrada` + colors.reset);
        }
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.red, colors.bg.green + `A conta ${buscaConta.numero} foi deletada com sucesso` + colors.reset);
        } else {
            console.log(colors.fg.blue, colors.bg.red + `A conta ${numero} nao foi encontrada` + colors.reset);
        }
    }
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            if (conta.sacar(valor)) {
                console.log(colors.fg.red, colors.bg.green + `Saque realizado com sucesso na conta ${numero}` + colors.reset);
            } else {
                console.log(colors.fg.red, colors.bg.red + `A conta ${numero} não foi encontrada no sistema` + colors.reset);
            }
        }
    }
    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log(colors.fg.red, colors.bg.green + `Deposito realizado com sucesso na conta ${numero}` + colors.reset);
        } else {
            console.log(colors.fg.red, colors.bg.red + `A conta ${numero} nao foi encontrada no sistema` + colors.reset);
        }
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor)) {
                contaDestino.depositar(valor);
                console.log(colors.fg.red, colors.bg.green + `Transferencia realizada com sucesso da conta ${numeroOrigem} para a conta ${numeroDestino}` + colors.reset);
            } else {
                console.log(colors.fg.red, colors.bg.red + `A conta ${numeroOrigem} e/ou ${numeroDestino} nao foram encontradas no sistema` + colors.reset);
            }
        }
    }
    
    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }


}