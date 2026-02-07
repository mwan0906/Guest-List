export default function Guest({ guest, setSelectedGuest }) {
  console.log(guest);
  return (
    <section id="guestDetails">
      <h1>
        {guest.name}, {guest.job}
      </h1>
      <p>Email: {guest.email}</p>
      <p>Phone: {guest.phone}</p>
      <p>{guest.bio}</p>
      <button onClick={() => setSelectedGuest(null)}>Back</button>
    </section>
  );
}
