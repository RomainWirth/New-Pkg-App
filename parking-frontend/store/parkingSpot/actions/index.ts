import { Dispatch, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../index';
import { ParkingSpot } from '../types';
import {
  FETCH_PARKING_SPOTS_REQUEST,
  FETCH_PARKING_SPOTS_SUCCESS,
  FETCH_PARKING_SPOTS_FAILURE,
  ADD_PARKING_SPOT_REQUEST,
  ADD_PARKING_SPOT_SUCCESS,
  ADD_PARKING_SPOT_FAILURE,
  REMOVE_PARKING_SPOT_REQUEST,
  REMOVE_PARKING_SPOT_SUCCESS,
  REMOVE_PARKING_SPOT_FAILURE,
} from '../types';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const fetchParkingSpots: () => ThunkAction<void, RootState, unknown, AnyAction> = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_PARKING_SPOTS_REQUEST });

  try {
    const response = await axios.get(`${API_BASE_URL}/parking-spots`);
    dispatch({ type: FETCH_PARKING_SPOTS_SUCCESS, payload: response.data });
  } catch (error: any) {
    dispatch({ type: FETCH_PARKING_SPOTS_FAILURE, payload: error.message });
  }
};

export const addParkingSpot: () => ThunkAction<void, RootState, unknown, AnyAction> = () => async (dispatch: Dispatch) => {
  dispatch({ type: ADD_PARKING_SPOT_REQUEST });

  try {
    await axios.post(`${API_BASE_URL}/parking-spots`);
    dispatch({ type: ADD_PARKING_SPOT_SUCCESS });
    dispatch<any>(fetchParkingSpots());
  } catch (error: any) {
    dispatch({ type: ADD_PARKING_SPOT_FAILURE, payload: error.message });
  }
};

export const removeParkingSpot: (id: string) => ThunkAction<void, RootState, unknown, AnyAction> = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: REMOVE_PARKING_SPOT_REQUEST });

  try {
    await axios.delete(`${API_BASE_URL}/parking-spots/${id}`);
    dispatch({ type: REMOVE_PARKING_SPOT_SUCCESS });
    dispatch<any>(fetchParkingSpots());
  } catch (error: any) {
    dispatch({ type: REMOVE_PARKING_SPOT_FAILURE, payload: error.message });
  }
};
