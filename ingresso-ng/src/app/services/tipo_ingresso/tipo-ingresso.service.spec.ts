import { TestBed } from '@angular/core/testing';

import { TipoIngressoService } from './tipo-ingresso.service';

describe('TipoIngressoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoIngressoService = TestBed.get(TipoIngressoService);
    expect(service).toBeTruthy();
  });
});
