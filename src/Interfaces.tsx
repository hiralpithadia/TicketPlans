export interface InitialProps {
  tickets: Array<Ticket>;
  perks: Array<Perks>;
  isMobile: boolean;
}
export interface CardProps{
  perks: Array<Perks>;
  isMobile: boolean;
  totalCardColumns: number;
  ticket: Ticket
}
export interface Ticket {
  ticketName: string;
  ticketHighlighted: boolean;
  ticketStrikethroughPrice: number;
  ticketActualPrice: number;
  ticketButtonLabel: string;
  ticketDescription: string;
  ticketButtonLink: string;
}
export interface Perks {
  ticketPerk: string;
  col1: string;
  perkActive: string;
}
