import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterPageComponent } from './twitter-page.component';

describe('TwitterPageComponent', () => {
  let component: TwitterPageComponent;
  let fixture: ComponentFixture<TwitterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
