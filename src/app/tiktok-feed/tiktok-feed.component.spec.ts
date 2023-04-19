import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokFeedComponent } from './tiktok-feed.component';

describe('TiktokFeedComponent', () => {
  let component: TiktokFeedComponent;
  let fixture: ComponentFixture<TiktokFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiktokFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiktokFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
