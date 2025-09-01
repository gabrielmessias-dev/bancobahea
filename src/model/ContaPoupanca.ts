import { Conta } from "./Conta";
import { colors } from "../util/Colors";

export class ContaPoupanca extends Conta {

    private _aniversario: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversario: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._aniversario = aniversario;
    }

    public get aniversario() {
        return this._aniversario;
    }

    public set aniversario(aniversario: number) {
        this._aniversario = aniversario;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(colors.bg.black + colors.fg.blue + "Dia do Aniversário: " + colors.fg.red + this._aniversario + colors.reset);

    }
}