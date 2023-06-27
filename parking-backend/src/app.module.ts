import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParkingSpotModule } from './parking-spot/parking-spot.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/parking-app'),
    ParkingSpotModule,
  ],
})
export class AppModule {}
