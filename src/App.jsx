import { useState } from "react";
import Guest from "./Guest.jsx";
import GuestList from "./GuestList";

const GUEST_DATA = [
  { id: 1, name: "a", email: "a@amail.com", phone: 11, bio: "a", job: "a" },
  { id: 2, name: "b", email: "b@bmail.com", phone: 22, bio: "b", job: "b" },
  { id: 3, name: "c", email: "c@amail.com", phone: 33, bio: "c", job: "c" },
  { id: 4, name: "d", email: "d@amail.com", phone: 44, bio: "d", job: "d" },
  { id: 5, name: "e", email: "e@amail.com", phone: 55, bio: "e", job: "e" },
];

export default function App() {
  const [selectedGuest, setSelectedGuest] = useState(null);

  if (!selectedGuest) {
    return (
      <GuestList GUEST_DATA={GUEST_DATA} setSelectedGuest={setSelectedGuest} />
    );
  } else {
    return <Guest guest={selectedGuest} setSelectedGuest={setSelectedGuest} />;
  }
}
