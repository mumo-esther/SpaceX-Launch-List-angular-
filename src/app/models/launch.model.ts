class Links {
  presskit: string | null;
}

class Rocket {
  rocket_name: string;
}

export class Launch {
  details: string;
  flight_number: number;
  launch_year: string;
  links: Links;
  rocket: Rocket;
}
