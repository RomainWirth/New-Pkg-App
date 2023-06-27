import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ParkingSpot } from './parking-spot.model';

@Injectable()
export class ParkingSpotService {
  constructor(
    @InjectModel(ParkingSpot.name)
    private readonly parkingSpotModel: Model<ParkingSpot>,
  ) {}

  async findAll(): Promise<ParkingSpot[]> {
    return this.parkingSpotModel.find().exec();
  }

  async create(): Promise<ParkingSpot> {
    const spot = new this.parkingSpotModel();
    spot.isOccupied = true;
    return spot.save();
  }

  async remove(id: string): Promise<void> {
    await this.parkingSpotModel.findByIdAndRemove(id).exec();
  }
}
