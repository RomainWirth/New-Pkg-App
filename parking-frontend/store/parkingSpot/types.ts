export interface ParkingSpot {
    _id: string;
    isOccupied: boolean;
  }
  
  export interface ParkingSpotState {
    parkingSpots: ParkingSpot[];
    loading: boolean;
    error: string | null;
  }
  
  export const FETCH_PARKING_SPOTS_REQUEST = 'FETCH_PARKING_SPOTS_REQUEST';
  export const FETCH_PARKING_SPOTS_SUCCESS = 'FETCH_PARKING_SPOTS_SUCCESS';
  export const FETCH_PARKING_SPOTS_FAILURE = 'FETCH_PARKING_SPOTS_FAILURE';
  
  export const ADD_PARKING_SPOT_REQUEST = 'ADD_PARKING_SPOT_REQUEST';
  export const ADD_PARKING_SPOT_SUCCESS = 'ADD_PARKING_SPOT_SUCCESS';
  export const ADD_PARKING_SPOT_FAILURE = 'ADD_PARKING_SPOT_FAILURE';
  
  export const REMOVE_PARKING_SPOT_REQUEST = 'REMOVE_PARKING_SPOT_REQUEST';
  export const REMOVE_PARKING_SPOT_SUCCESS = 'REMOVE_PARKING_SPOT_SUCCESS';
  export const REMOVE_PARKING_SPOT_FAILURE = 'REMOVE_PARKING_SPOT_FAILURE';
  