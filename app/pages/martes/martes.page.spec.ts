import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MartesPage } from './martes.page';

describe('MartesPage', () => {
  let component: MartesPage;
  let fixture: ComponentFixture<MartesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MartesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
