import { Patient } from "./classes/Patient";
import { QueuesPriority } from "./classes/QueuesPriority";

const hospital = new QueuesPriority();

hospital.insert_patient('Richard', '03/10/2004', 7464167391, 'Rua Padre Cícero N800', 86999614414, 400289, 'amarelo');
hospital.insert_patient('Rafael', '12/03/2003', 7464167391, 'Rua Padre Cícero N800', 86999614414, 400289, 'amarelo');

hospital.print_queues();