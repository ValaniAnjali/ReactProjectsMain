import { useRef, useState,useEffect,useCallback } from "react";

import Places from "./components/Places";
import { AVAILABLE_PLACES } from "./data";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./Ioc";


const storedIds=JSON.parse(localStorage.getItem('selectedPlaces'))||[];
const storedPlaces=storedIds.map(id=>AVAILABLE_PLACES.find((place)=>place.id===id));

function App() {
  const [modalIsOpen,setModalIsOpen]=useState(false);
  const selectedPlace = useRef();
  const [availblePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  // redudndant useeffect to remove this initialize pickedstate with stored places, and remove other useeffect code to top so it renders only once
  // useEffect(()=>{
  //   const storedIds=JSON.parse(localStorage.getItem('selectedPlaces'))||[];
  //   const storedPlaces=storedIds.map(id=>AVAILABLE_PLACES.find((place)=>place.id===id));
  //   setPickedPlaces(storedPlaces);
  // },[]);

  // ///////////////////////////use useeffect to get rid of this infinite loop problem of sideeffect
  // navigator.geolocation.getCurrentPosition((position) => {
  //   const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
  //   setAvailablePlaces(sortedPlaces)
  // });
////////////////////////////////////////////////////////////////////////////////////////////////

// solution : useeffect  !st param. sideeffect function, 2nd param. dependency array
useEffect(()=>{
 navigator.geolocation.getCurrentPosition((position) => {
    const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
    setAvailablePlaces(sortedPlaces)
  });
  
},[])

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    const storedIds=JSON.parse(localStorage.getItem('selectedPlaces'))||[];
    if(storedIds.indexOf(id)===-1){
      localStorage.setItem('selectedPlaces',JSON.stringify([id,...storedIds]));
    }
    
  }

  const handleRemovePlace=useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);
    const storedIds=JSON.parse(localStorage.getItem('selectedPlaces'))||[];
    localStorage.setItem('selectedPlaces',JSON.stringify(storedIds.filter((id)=>id!=selectedPlace.current)))
  },[])

  return (
    <>
      <Modal open={modalIsOpen}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availblePlaces}
          fallbackText={"Sorting places by distance..."}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
