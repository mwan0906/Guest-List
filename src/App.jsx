import { useState, useEffect } from "react";
import Guest from "./Guest.jsx";
import GuestList from "./GuestList";
import { getGuests } from "./api/guests.js";

export default function App() {
  const [selectedGuest, setSelectedGuest] = useState();
  const [guestList, setGuestList] = useState();
  useEffect(() => {
    const fetchList = async () => {
      const data = await getGuests();
      setGuestList(data);
    };
    fetchList();
  }, []);

  if (!selectedGuest) {
    return (
      <GuestList guestList={guestList} setSelectedGuest={setSelectedGuest} />
    );
  } else {
    return <Guest guest={selectedGuest} setSelectedGuest={setSelectedGuest} />;
  }
}
