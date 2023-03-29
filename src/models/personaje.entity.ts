import { Schema, model } from 'mongoose';

const PersonajeSchema = new Schema({
  nombre: { type: String, require: true },
  alte: { type: String, require: true, unique: true },
  role: { type: String, require: true },
});

/* UserSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
   return user;
}; */

export const personajeRepository = model('Personaje', PersonajeSchema);
