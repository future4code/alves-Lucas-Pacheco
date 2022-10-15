
export class Show {
    constructor(
     private id: string,
     private band: string,
     private starts_at: string,
     private tickets: number = 5000
    ) {}

    public getId() {
        return this.id 
    }
    public getBand() {
        return this.band
    }
    public getstartAt() {
        return this.starts_at
    }
    public getTickets() {
        return this.tickets
    }
    public setTickets(newTickets: number) {
        return  this.tickets = newTickets
    }
}