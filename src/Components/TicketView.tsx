import Card from "./Card"; // Component of Ticket Card
import { Perks, InitialProps, Ticket } from "../Interfaces";

function View(props: InitialProps) {
  const tickets = props.tickets;
  const perks = props.perks;
  const isMobile = props.isMobile;
  const totalCardColumns = 8 / props.tickets.length;
  return (
    <div
      className={`row justify-content-center ${
        !isMobile ? "rowContent" : "p-4"
      }`}
    >
      {!isMobile && (
        <div className="col-xl-4 col-lg-4 col-md-4 m-0 p-0 d-none d-lg-block">
          <div className="divHeight"></div>
          <ul className="list-group list-group-flush">
            {perks.map((perk: Perks) => (
              <li
                key={perk.ticketPerk}
                className="list-group perkList pr-0 py-2"
              >
                {perk.col1}
              </li>
            ))}
          </ul>
        </div>
      )}
      {tickets.map((ticket: Ticket) => (
        <Card
          key={ticket.ticketName}
          ticket={ticket}
          perks={perks}
          totalCardColumns={totalCardColumns}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}

export default View;
