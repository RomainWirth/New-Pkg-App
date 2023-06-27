import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParkingSpot, ParkingSpotSchema } from './parking-spot.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ParkingSpot.name, schema: ParkingSpotSchema },
    ]),
  ],
})
export class ParkingSpotModule {}