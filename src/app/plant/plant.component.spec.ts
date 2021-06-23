import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetails } from '../product/product-details';

import { PlantComponent } from './plant.component';

describe('PlantComponent', () => {
  let component: PlantComponent;
  let fixture: ComponentFixture<PlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get All plants from EndPoint', () => {
    let mockResponse : ProductDetails[] = [
     { commonName:'Rose',
      plantCost:100, 
      category:'Plant',
      rating:4,
      plantDescription:'Rose Plant',
      imagePath:''
    },


    ]
  })

});
