export type priorityColor = 'vermelho' | 'laranja' | 'amarelo' | 'verde' | 'azul'

export class Patient {
    name: string;
    birth: string;
    cpf: number;
    adress: string;
    phone: number;
    sus: number;
    priority: priorityColor;

    constructor(name: string, birth: string, cpf: number, adress:string, phone: number, sus:number, priority: priorityColor) {
        this.name = name;
        this.birth = birth;
        this.cpf = cpf;
        this.adress = adress;
        this.phone = phone;
        this.sus = sus;
        this.priority = priority;
    }
}

