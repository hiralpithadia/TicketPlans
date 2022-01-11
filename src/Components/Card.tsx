import { Ticket, Perks, CardProps } from "../Interfaces";

function Card(props: CardProps) {
  const ticket = props.ticket;
  const perks = props.perks;
  const totalCardColumns = props.totalCardColumns;
  const isMobile = props.isMobile;

  /**
   * Price Component which is used multiple time hence created a single component and reusing it.
   * @param ticket : Single ticket data
   * @returns Component of price which includes Currency, StrikeThroughPrice & Actual Price of Tickets
   */
  const Price = (ticket: Ticket) => {
    return (
      <p
        className={`text-center fs-5 mb-0 ${
          ticket.ticketHighlighted ? "text-danger" : ""
        }`}
      >
        {ticket.ticketHighlighted && (
          <span className="text-black-50 text-decoration-line-through fw-lighter">
            &euro; {ticket.ticketStrikethroughPrice}
          </span>
        )}{" "}
        <span className="fw-bold"> &euro; {ticket.ticketActualPrice}</span>
      </p>
    );
  };

  /**
   * Button Component which is used multiple time hence created a single component and reusing it.
   * @param ticket : Single ticket data
   * @returns Component of Button having button label.
   */
  const Button = (ticket: Ticket) => {
    return (
      <div className="text-center my-4">
        <a
          role="button"
          target="_blank"
          href={ticket.ticketButtonLink}
          className="mb-3 text-decoration-none rounded-pill registerBtn fw-bold text-uppercase"
        >
          {ticket.ticketButtonLabel}
        </a>
      </div>
    );
  };

  return (
    <div
      className={`col-xl-${totalCardColumns} col-lg-${totalCardColumns} m-0 p-0 ${
        isMobile
          ? "border my-3"
          : `border-end ticketColumn d-none d-lg-block`
      } ${ticket.ticketHighlighted ? "highlightTicket" : ""}`}
    >
      {ticket.ticketHighlighted ? (
        <p className="text-center fw-bold p-1 popularChoiceText">
          POPULAR CHOICE
        </p>
      ) : (
        <p className={`text-center ${!isMobile ? "ticketLabel" : ""}`}> </p>
      )}
      <div className="px-3 text-center">
        <p className="text-center fw-bold fs-5">{ticket.ticketName}</p>
        <p
          className={`text-secondary text-center ${
            !isMobile ? "ticketDescription" : ""
          }`}
        >
          {ticket.ticketDescription}
        </p>
        {Price(ticket)}
        <p className="text-black-50 mb-0 vatText">ex. 21% VAT</p>
        {Button(ticket)}
      </div>
      <ul className="list-group mb-3">
        {perks.map((perk: Perks) =>
          isMobile ? (
            <li key={perk.ticketPerk} className="list-group perkList py-2 px-3">
              <div className="flex">
                <span>{perk.col1}</span>
                {perk.perkActive === "1" ? (
                  <span className="text-success fw-bold float-end">
                    &#10003;
                  </span>
                ) : (
                  <span className="fw-bold float-end">&mdash;</span>
                )}
              </div>
            </li>
          ) : (
            <li
              key={perk.ticketPerk}
              className="list-group perkList text-center px-0 py-2"
            >
              {perk.perkActive === "1" ? (
                <span className="text-success fw-bold">&#10003;</span>
              ) : (
                <span className="fw-bold">&mdash;</span>
              )}
            </li>
          )
        )}
      </ul>
      {Price(ticket)}
      {Button(ticket)}
    </div>
  );
}

export default Card;
