import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SabadoPage } from './sabado.page';

describe('SabadoPage', () => {
  let component: SabadoPage;
  let fixture: ComponentFixture<SabadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SabadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
