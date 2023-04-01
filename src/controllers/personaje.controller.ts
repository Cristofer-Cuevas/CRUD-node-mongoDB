import { Request, Response } from "express";
import { personajeRepository } from "../models/personaje.entity";

export const retrieve = async (req: Request, res: Response) => {
    const { role } = req.params;

    const personajes = role ? await personajeRepository.find({ role: role }) : await personajeRepository.find();

    res.json(personajes);
};

export const retrieveById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const personaje = await personajeRepository.findById(id);
    res.json(personaje);
};

export const create = async (req: Request, res: Response) => {
    const { nombre, alte, role } = req.body;

    const personaje = await personajeRepository.create({
        nombre,
        alte,
        role,
    });

    res.json(personaje);
};

export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, alte, role } = req.body;

    const newDataPersonaje = { nombre, alte, role };

    const updatedPersonaje = await personajeRepository.findByIdAndUpdate(id, newDataPersonaje);

    res.json(newDataPersonaje);
};

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const removedPersonaje = await personajeRepository.findByIdAndDelete(id);
    //const removedPersonaje = await  personajeModel.findByIdAndRemove(id);

    res.json(removedPersonaje);
};
