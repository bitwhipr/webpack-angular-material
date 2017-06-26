import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import '../assets/css/deeppurple-amber.css';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent], imports:[MaterialModule]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('should have a title', ()=>{
    let fixture = TestBed.createComponent(AppComponent);

    expect(fixture.componentInstance.appTitle).toBeDefined('should be defined');
    expect(fixture.componentInstance.appTitle).not.toBeNull('should not be null');
  })
});
