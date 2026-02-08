export default function GuestList({ guestList, setSelectedGuest }) {
  return (
    <section>
      <h1>Guest List</h1>
      <table id="guestList">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guestList?.map((guest) => (
            <tr key={guest.id} onClick={() => setSelectedGuest(guest)}>
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Select a guest to see more details.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
