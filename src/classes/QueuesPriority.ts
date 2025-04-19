import { Patient, priorityColor } from "./Patient";

export class QueuesPriority {
    immediatequeue: Patient[] = [];
    orangequeue: Patient[] = [];
    yellowqueue: Patient[] = [];
    greenqueue: Patient[] = [];
    bluequeue: Patient[] = [];

    geralqueue: Patient[][] = [this.immediatequeue, this.orangequeue, this.yellowqueue, this.greenqueue, this.bluequeue]
    
    insert_patient(name: string, birth: string, cpf: number, adress: string, phone: number, sus: number, priority: priorityColor) :void {
        const patient = new Patient(name, birth, cpf, adress, phone, sus, priority);
        
        switch (patient.priority) {
            case 'vermelho':
                this.immediatequeue.push(patient);
                break;
            
            case 'laranja':
                this.orangequeue.push(patient);
                break;
            
            case 'amarelo':
                this.yellowqueue.push(patient);
                break;
            
            case 'verde':
                this.greenqueue.push(patient);
                break;
            
            case 'azul':
                this.bluequeue.push(patient);
        }
    }

    print_queues() :void {
        let list_colors: string[] = ['Imediata', 'Laranja', 'Amarelo', 'Verde', 'Azul'];

        for (let i: number = 0; i < this.geralqueue.length; i++) {
            console.log(`Lista ${list_colors[i]}: `)
            if (this.geralqueue[i].length === 0) {
                console.log(`Vazia.`);
            } 
            for (let j: number = 0; j < this.geralqueue[i].length; j++) {
                console.log(this.geralqueue[i][j]);
            }
            console.log();
        }
    }
}