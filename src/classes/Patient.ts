export type priorityColor = 'vermelho' | 'laranja' | 'amarelo' | 'verde' | 'azul'


export class Patient {
    name: string;
    birth: string;
    cpf: number;
    address: string;
    phone: number;
    sus: number;
    priority: priorityColor;
    arrivalTime: Date;
    status: 'Em_espera' | 'Em_atendimento' | 'Atendido' = 'Em_espera';

    constructor(name: string, birth: string, cpf: number, adress:string, phone: number, sus:number, priority: priorityColor) {
        this.name = name;
        this.birth = birth;
        this.cpf = cpf;
        this.address = adress;
        this.phone = phone;
        this.sus = sus;
        this.priority = priority;
        this.arrivalTime = new Date();
    }
}

