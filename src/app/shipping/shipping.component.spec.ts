import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ShippingComponent } from "./shipping.component";
import { CartComponent } from "../cart/cart.component";
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { ProductAlertsComponent } from "../product-alerts/product-alerts.component";

describe("ShippingComponent", () => {
  let component: ShippingComponent;
  let fixture: ComponentFixture<ShippingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShippingComponent,
        CartComponent,
        ProductListComponent,
        ProductDetailsComponent,
        ShippingComponent,
        ProductAlertsComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
