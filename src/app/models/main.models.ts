export interface ReservationPayload {
  name: string;
  reservasion: string;
}
export interface ServiceTime {
  available: number;
  option: string;
  numMinutes: number;
  numDate: number;
  reverseUser: string;
  serviceTime: string;
}

export interface AppointmentsTime {
  day:string;
  startTime: string;
  endTime: string;
}
