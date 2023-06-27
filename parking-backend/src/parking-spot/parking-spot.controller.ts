import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { ParkingSpotService } from './parking-spot.service';
import { ParkingSpot } from './parking-spot.model';

@Controller('parking-spots')
export class ParkingSpotController {
  constructor(private readonly parkingSpotService: ParkingSpotService) {}

  @Get()
  async findAll(): Promise<ParkingSpot[]> {
    return this.parkingSpotService.findAll();
  }

  @Post()
  async create(): Promise<ParkingSpot> {
    return this.parkingSpotService.create();
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.parkingSpotService.remove(id);
  }
}
