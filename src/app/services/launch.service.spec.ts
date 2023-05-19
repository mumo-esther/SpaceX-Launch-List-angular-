import { TestBed } from '@angular/core/testing';

import { LaunchService } from './launch.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DEFAULT_PARAMS } from '@models/params.model';
import { Launch } from '@models/launch.model';
import { Utils } from './utils.service';
import { mockLaunches } from './launch.service.mock';

describe('LaunchService', () => {
  let launchService: LaunchService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        LaunchService,
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    launchService = TestBed.get(LaunchService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(launchService).toBeTruthy();
  });

  describe('getLaunches', () => {
    it('should return mock heroes', () => {
      launchService.getLaunches(DEFAULT_PARAMS).subscribe(
        launches => expect(launches.length).toEqual(mockLaunches.length),
        fail
      );
      // Receive GET request
      const queryString = Utils.getQueryString(DEFAULT_PARAMS);
      const req = httpTestingController.expectOne(`${launchService.launchesUrl}?${queryString}`);
      expect(req.request.method).toEqual('GET');
      // Respond with the mock heroes
      req.flush(mockLaunches);
    });
  });
});
