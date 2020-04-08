import { TestBed, async, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import { from } from 'rxjs';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers:[]
  }));

  it('should be created', 
  // async(inject([HttpTestingController,CartService],(httpClient: HttpTestingController, service: CartService)
   ()=> {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
  
});
