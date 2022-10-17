export class Competitor{
    constructor(
    private id: string,
    private competition_name: string,
    private atleta: string,
    private value: number,
    private unidade: string
    ){}

    public getId = () => {
        return this.id
    }

    public getCompetitionName = () => {
        return this.competition_name
    }

    public getAtleta = () => {
        return this.atleta
    }

    public getValue = () => {
        return this.value
    }

    public getUnidade = () => {
        return this.unidade
    }

    public setValue = (newValue: number) => {
        return this.value = newValue
    }

    
}