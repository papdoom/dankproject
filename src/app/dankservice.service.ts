import { Injectable } from '@angular/core';

@Injectable()
export class DankserviceService {
  serviceproperty = "Dank Service Created";

  constructor() { }

  getMagicOne() {
    let magic = [{one:"☁️", two:"☁️☁️☁️", three:"☁️☁️☁️☁️☁️", four:"( ͡° ( ͡° ͜ʖ ( ͡° ͜ʖ ͡°) ʖ ͡°) ͡° )", five:"( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)"}];
    return magic;
  }

}
