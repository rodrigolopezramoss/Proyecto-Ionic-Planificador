import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViernesPage } from './viernes.page';

describe('ViernesPage', () => {
  let component: ViernesPage;
  let fixture: ComponentFixture<ViernesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViernesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViernesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
