import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstrucaoPage } from './instrucao.page';

describe('InstrucaoPage', () => {
  let component: InstrucaoPage;
  let fixture: ComponentFixture<InstrucaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrucaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstrucaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
