import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchParkingSpots, addParkingSpot, removeParkingSpot } from '../store/parkingSpot/actions';

function App() {
  const dispatch = useDispatch();
  const parkingSpots = useSelector((state: RootState) => state.parkingSpot.parkingSpots);

  useEffect(() => {
    dispatch<any>(fetchParkingSpots());
  }, [dispatch]);

  const handleAddParkingSpot = () => {
    dispatch<any>(addParkingSpot());
  };

  const handleRemoveParkingSpot = (id: string) => {
    dispatch<any>(removeParkingSpot(id));
  };

  return (
    <div className="App">
      <h1>Parking Management</h1>
      <button onClick={handleAddParkingSpot}>Add Parking Spot</button>
      <ul>
        {parkingSpots.map((spot) => (
          <li key={spot._id}>
            Parking Spot {spot._id} - {spot.isOccupied ? 'Occupied' : 'Vacant'}
            {!spot.isOccupied && (
              <button onClick={() => handleRemoveParkingSpot(spot._id)}>Leave Parking Spot</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
