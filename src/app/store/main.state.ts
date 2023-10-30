import { Injectable } from '@angular/core';
import {
  AppointmentsTime,
  ReservationPayload,
  ServiceTime,
} from '../models/main.models';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetAppointmentsTime, SetReservation, SetServiceTimeAvailable } from './main.actions';

export class MainStateModel {
  allData?: {
    reservation?: ReservationPayload;
    serviceTime?: ServiceTime;
    appointmentsTime?: AppointmentsTime;
  };
}

const defaults = {
  allData: {},
};

@State<MainStateModel>({
  name: 'leads',
  defaults,
})
@Injectable()
export class MainState {
  constructor() {}

  @Selector()
  static getAllData(state: MainStateModel): any {
    return state.allData;
  }

  @Action(SetServiceTimeAvailable)
  setServiceTimeAvailable(
    { getState, patchState }: StateContext<MainStateModel>,
    { payload }: SetServiceTimeAvailable
  ) {
    const state = getState();
    let tempData = state.allData;
    patchState({
      allData: { ...tempData, serviceTime: payload },
    });
  }

  @Action(SetReservation)
  setReservation(
    { getState, patchState }: StateContext<MainStateModel>,
    { payload }: SetReservation
  ) {
    const state = getState();
    let tempData = state.allData;
    patchState({
      allData: { ...tempData, reservation: payload },
    });
  }

  @Action(SetAppointmentsTime)
  setAppointmentsTime(
    { getState, patchState }: StateContext<MainStateModel>,
    { payload }: SetAppointmentsTime
  ) {
    const state = getState();
    let tempData = state.allData;
    patchState({
      allData: { ...tempData, appointmentsTime: payload },
    });

    
  }
}
