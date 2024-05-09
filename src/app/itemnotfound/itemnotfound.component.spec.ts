import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemnotfoundComponent } from './itemnotfound.component';

describe('ItemnotfoundComponent', () => {
  let component: ItemnotfoundComponent;
  let fixture: ComponentFixture<ItemnotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemnotfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
