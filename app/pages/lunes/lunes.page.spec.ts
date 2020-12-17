import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LunesPage } from './lunes.page';

describe('LunesPage', () => {
  let component: LunesPage;
  let fixture: ComponentFixture<LunesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LunesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
