import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiercolesPage } from './miercoles.page';

describe('MiercolesPage', () => {
  let component: MiercolesPage;
  let fixture: ComponentFixture<MiercolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiercolesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiercolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
