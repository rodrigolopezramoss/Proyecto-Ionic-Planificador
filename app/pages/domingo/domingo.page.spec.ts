import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DomingoPage } from './domingo.page';

describe('DomingoPage', () => {
  let component: DomingoPage;
  let fixture: ComponentFixture<DomingoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomingoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DomingoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
