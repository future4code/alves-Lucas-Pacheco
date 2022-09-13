export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;

    }

    public setCep(cep: string) {
        this.cep = cep
      }
  }