import { Patient } from "./classes/Patient";
import { QueuesPriority } from "./classes/QueuesPriority";

const hospital = new QueuesPriority();

hospital.insert_patient('Jorge', '12/03/2003', 7464167391, 'Rua Padre Cícero N800', 86999614414, 400289, 'laranja');
hospital.insert_patient('Rafael', '12/03/2003', 7464167391, 'Rua Padre Cícero N800', 86999614414, 400289, 'amarelo');

hospital.print_queues();
hospital.call_next();

hospital.insert_patient('Zé Ramalho', '12/03/2003', 7464167391, 'Rua Padre Cícero N800', 86999614414, 400289, 'vermelho');

hospital.mark_treated();
hospital.print_queues();
