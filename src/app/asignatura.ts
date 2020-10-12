import { Evaluacion } from './Clases/evualuacion';
import { Horario } from './Clases/horario';
import { Previa } from './Clases/previa';
import { UsuarioAsignatura } from './Clases/usuarioAsignatura';

export interface Asignatura {
    id:string;
    codigo: string;
    nombre: string;
    creditos: number;
    programa: string;
    apruebaPor: string;
    nombreDoc: string;
    correoDoc: string;
    fechaInscripcion:Date;
    horarios:Array<Horario>;
    previas:Array<Previa>;
    evaluaciones:Array<Evaluacion>;
    usuarioAsignaturas:Array<UsuarioAsignatura>;
  }
