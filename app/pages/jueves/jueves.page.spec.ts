import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JuevesPage } from './jueves.page';

describe('JuevesPage', () => {
  let component: JuevesPage;
  let fixture: ComponentFixture<JuevesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuevesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JuevesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
