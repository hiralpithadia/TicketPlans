import { useEffect, useState } from "react";
import "./App.css";
import TicketView from "./Components/TicketView"; // Component of the main Tickets View Section

function App() {
  const [tickets, setTickets] = useState([]); // State for Tickets.
  const [perks, setPerks] = useState([]); // State for Tickets Perks.
  const [error, setError] = useState(""); // State for error message eg: API and connectivity issue & No data/item found after filtering the ticket group.
  const isMobile = window.screen.width <= 768; // To indicate the size of device/screen
  const ticketTitleGroup = "In-person + Digital";
  const apiURL = "https://next.tnw-staging.com/next-api/tickets.json";

  /**
   * Here fetch is used to get Tickets and Tickets Perks data from the API.
   */
  useEffect(() => {
    fetch(apiURL)
      .then((results) => results.json())
      .then((data) => {
        const filterData = data.data.filter(
          (item: any) => item.title === ticketTitleGroup
        );
        if (filterData.length > 0) {
          const ticketsArr = filterData[0].tickets;
          setTickets(ticketsArr);
          setPerks(ticketsArr[0].ticketPerks);
        } else {
          setError("No result found!");
        }
      })
      .catch((e) => {
        console.error(e, "API error found!");
        setError("Please check your internet connection.");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title fw-bold">TNW Tickets</p>
      </header>
      <div className="container">
        {!error ? (
          <TicketView tickets={tickets} perks={perks} isMobile={isMobile} />
        ) : (
          <div className={`row justify-content-center rowContent fs-4`}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
