import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesComponent } from './launches.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchService } from '@services/launch.service';
import { MockLaunchService } from '@services/launch.service.mock';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { DEFAULT_PARAMS } from '@app/models/params.model';

describe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LaunchesComponent,
      ],
      providers: [{
        provide: LaunchService,
        useClass: MockLaunchService
      }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it('should render 4 columns', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('th').length).toEqual(4);
  });

  it('should render rows equal to the params limit', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('tbody tr').length).toEqual(DEFAULT_PARAMS.limit);
  });

  it('should render 4 buttons in the table footer', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('tfoot .pagination button').length).toEqual(4);
  });
});
