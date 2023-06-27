import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ParkingSpot extends Document {
  @Prop({ default: false })
  isOccupied: boolean;
}

export const ParkingSpotSchema = SchemaFactory.createForClass(ParkingSpot);
