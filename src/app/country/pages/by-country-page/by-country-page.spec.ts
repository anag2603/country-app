import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCpuntryPage } from './by-cpuntry-page';

describe('ByCpuntryPage', () => {
  let component: ByCpuntryPage;
  let fixture: ComponentFixture<ByCpuntryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByCpuntryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCpuntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
