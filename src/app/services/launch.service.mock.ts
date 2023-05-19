import { Observable, of } from 'rxjs';

import { Launch } from '@models/launch.model';

export const mockLaunches: Launch[] = [{
  details: 'Details',
  flight_number: 1,
  launch_year: '2018',
  links: {
    presskit: 'Presskit',
  },
  rocket: {
    rocket_name: 'Jeff',
  },
}, {
  details: 'Further details',
  flight_number: 2,
  launch_year: '2019',
  links: {
    presskit: null,
  },
  rocket: {
    rocket_name: 'Steve',
  },
}];

export class MockLaunchService {
  getLaunches(): Observable<Launch[]> {
    return of(mockLaunches);
  }
}


