import { ReservationPayload, ServiceTime } from '../models/main.models';

export class SetServiceTimeAvailable {
  static readonly type = '[TimeAvailable] Set Time Available';
  constructor(public payload?: ServiceTime) {}
}

export class SetReservation {
  static readonly type = '[Reservation] Set Reservation';
  constructor(public payload: ReservationPayload) {}
}

export class SetAppointmentsTime {
  static readonly type = '[TimeAvailable] Set Appointments Time';
  constructor(public payload: any) {}
}
