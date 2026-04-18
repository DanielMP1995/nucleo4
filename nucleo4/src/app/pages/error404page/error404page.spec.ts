import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404page } from './error404page';

describe('Error404page', () => {
  let component: Error404page;
  let fixture: ComponentFixture<Error404page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error404page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error404page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
