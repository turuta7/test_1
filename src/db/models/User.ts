import mongoose, { Schema, Model } from 'mongoose';

// Interface Users
export interface IUser {
  name: string;
  level: number;
}

// Schema Users
const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true },
});

// Export model
const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
export default User;
