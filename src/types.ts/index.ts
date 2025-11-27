export interface AviationStackResponse {
  pagination: Pagination;
  data: FlightData[];
}

interface Pagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

interface FlightData {
  flight_date: string;
  flight_status: FlightStatus;
  departure: FlightEndpoint;
  arrival: FlightEndpoint;
  airline: AirlineInfo;
  flight: FlightInfo;
  aircraft: AircraftInfo | null;
  live: LiveInfo | null;
}

interface FlightEndpoint {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: string | null;
  gate: string | null;
  delay: number;
  scheduled: string;
  estimated: string | null;
  actual: string | null;
  estimated_runway: string | null;
  actual_runway: string | null;
  baggage: string | null;
}

interface AirlineInfo {
  id: string;
  fleet_average_age: number | null;
  airline_id: string | null;
  callsign: string;
  hub_code: string;
  iata_code: string;
  icao_code: string;
  country_iso2: string;
  date_founded: string | null;
  iata_prefix_accounting: string | null;
  airline_name: string;
  country_name: string;
  fleet_size: number | null;
  status: string;
  type: string;
}

interface FlightInfo {
  number: string;
  iata: string;
  icao: string;
  codeshared: Record<string, unknown> | null;
}

interface AircraftInfo {
  registration: string;
  iata: string;
  icao: string;
  icao24: string;
}

interface LiveInfo {
  updated: string;
  latitude: number;
  longitude: number;
  altitude: number;
  direction: number;
  speed_horizontal: number;
  speed_vertical: number;
  is_ground: boolean;
}
type FlightStatus =
  | "scheduled"
  | "active"
  | "landed"
  | "cancelled"
  | "incident"
  | "diverted";
