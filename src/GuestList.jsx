export default function GuestList({ GUEST_DATA, setSelectedGuest }) {
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
          {GUEST_DATA.map((guest) => {
            console.log(guest);
            return (
              <tr key={guest.id} onClick={() => setSelectedGuest(guest)}>
                <td>{guest.name}</td>
                <td>{guest.email}</td>
                <td>{guest.phone}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="3">Testing</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
