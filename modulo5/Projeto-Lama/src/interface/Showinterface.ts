import { Show } from "../models/Show"

export interface IShowDB {
    id: string,
    band: string,
    starts_at: string
}

export interface ITicketDB {
    id: string,
    show_id: string,
    user_id: string
}

export interface ICreateShowInputDTO {
    token: string,
    band: string,
    starts_at: string,
}

export interface ICreateShowOutpuDTO {
    message: string,
    show: Show
}

export interface IGetShowsInputDTO {
    token: string
}

export interface IGetShowsOutputDTO {
    shows: Show[]
}

export interface IGetModelShowsOutputDTO {
    id: string,
    band: string,
    starts_at: Date,
    tickets: string
}

export interface IReservationShowInputDTO {
    id: string
    token: string
}

export interface IReservationShowOutputDTO {
    message: string
}

export interface IDeleteReservationShowInputDTO {
    id: string
    token: string
}

export interface IDeleteReservationShowOutpuDTO {
    message: string
}