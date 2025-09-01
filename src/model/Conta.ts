import { colors } from "../util/Colors";

export class Conta {
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    public get numero(): number {
    return this._numero;
    }

    public set numero(numero: number) {
        this._numero = numero;
    }

    public get agencia(): number {
        return this._agencia;
    }

    public set agencia(agencia: number) {
        this._agencia = agencia;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get titular(): string {
        return this._titular;
    }

    public set titular(titular: string) {
        this._titular = titular;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public set saldo(saldo: number) {
        this._saldo = saldo;
    }

    public sacar(valor: number): boolean {
        if (this._saldo < valor) {
            console.log(colors.bg.black + colors.fg.blue + "Saldo insuficiente" + colors.reset);
            return false;
        } else {
            this._saldo -= valor;
            return true;
        }
    }

    public depositar(valor: number): void {
        this._saldo += valor;
    }

    public visualizar() {
        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupanca";
                break;
            default:
                tipo = "Conta inválida";
                break;
        }

        console.log(colors.bg.black + colors.fg.red + "\n*************************************" + colors.reset);
        console.log(colors.bg.black + colors.fg.blue + "Dados da conta:" + colors.reset);
        console.log(colors.bg.black + colors.fg.red + "*************************************" + colors.reset);

        console.log(colors.bg.black + colors.fg.blue + "Número da conta: " + colors.fg.red + this._numero + colors.reset);
        console.log(colors.bg.black + colors.fg.blue + "Agência: " + colors.fg.red + this._agencia + colors.reset);
        console.log(colors.bg.black + colors.fg.blue + "Tipo: " + colors.fg.red + this._tipo + colors.reset);
        console.log(colors.bg.black + colors.fg.blue + "Titular: " + colors.fg.red + this._titular + colors.reset);
        console.log(colors.bg.black + colors.fg.blue + "Saldo: " + colors.fg.red + this._saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + colors.reset);

        console.log(colors.bg.black + colors.fg.red + "*************************************" + colors.reset);

    }

    

}