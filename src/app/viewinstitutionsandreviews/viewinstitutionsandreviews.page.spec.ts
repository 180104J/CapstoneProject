import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewinstitutionsandreviewsPage } from './viewinstitutionsandreviews.page';

describe('ViewinstitutionsandreviewsPage', () => {
  let component: ViewinstitutionsandreviewsPage;
  let fixture: ComponentFixture<ViewinstitutionsandreviewsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewinstitutionsandreviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewinstitutionsandreviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
