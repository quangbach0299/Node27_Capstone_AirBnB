import { IsNotEmpty } from 'class-validator'
export class UpdateLocationDTO {
  @IsNotEmpty()
  location_name: string
  @IsNotEmpty()
  province: string
  @IsNotEmpty()
  nation: string
  @IsNotEmpty()
  image: string
}
