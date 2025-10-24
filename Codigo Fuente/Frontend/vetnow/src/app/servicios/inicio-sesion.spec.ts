import { TestBed } from '@angular/core/testing';

import { InicioSesion } from './inicio-sesion';

describe('InicioSesion', () => {
  let service: InicioSesion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioSesion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
