import { Request, Response } from "express";
import { personajeModel } from "../models/personaje.entity";

export const retrieve = async (req: Request, res: Response) => {
    const { role } = req.params;

    const personajes = role ?
        await personajeModel.find({ role })
        : await personajeModel.find();

    res.json(personajes);
}

export const retrieveById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const personaje = await personajeModel.findById(id);
    res.json(personaje);
}

export const create = async (req: Request, res: Response) => {
    const { nombre, alte, role } = req.body;

    const personaje = await personajeModel.create({
        nombre,
        alte,
        role
    });

    res.json(personaje);
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, alte, role } = req.body;

    const newDataPersonaje = { nombre, alte, role };

    const updatedPersonaje = await personajeModel
        .findByIdAndUpdate(id, newDataPersonaje);

    res.json(newDataPersonaje);
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const removedPersonaje = await personajeModel.findByIdAndDelete(id);
    //const removedPersonaje = await  personajeModel.findByIdAndRemove(id);

    res.json(removedPersonaje);
}