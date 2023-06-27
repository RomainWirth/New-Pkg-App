import {
  ParkingSpotState,
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

const initialState: ParkingSpotState = {
  parkingSpots: [],
  loading: false,
  error: null,
};

const parkingSpotReducer = (state = initialState, action: any): ParkingSpotState => {
  switch (action.type) {
    case FETCH_PARKING_SPOTS_REQUEST:
    case ADD_PARKING_SPOT_REQUEST:
    case REMOVE_PARKING_SPOT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PARKING_SPOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        parkingSpots: action.payload,
      };
    case ADD_PARKING_SPOT_SUCCESS:
    case REMOVE_PARKING_SPOT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_PARKING_SPOTS_FAILURE:
    case ADD_PARKING_SPOT_FAILURE:
    case REMOVE_PARKING_SPOT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default parkingSpotReducer;

  