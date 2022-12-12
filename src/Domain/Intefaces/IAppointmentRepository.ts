import {Appointment} from '../Entities/Appointment';
import {IAppointment} from './IAppointment';

export interface IAppointmentRepository {
  getAppointments(arg0: number): unknown;
  registerAppointment(newAppointment: Appointment): Promise<string>;
  getAppointment(dentistId: Number, date: Date): Promise<IAppointment | null>;
}
