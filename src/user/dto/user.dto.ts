import { IsDateString, IsIn, IsString, IsEmail, IsNotEmpty } from 'class-validator'

export class CreateUserDTO {
  user_id: number

  @IsString()
  @IsEmail()
  email: string

  @IsString()
  name: string

  @IsString()
  password: string

  @IsDateString()
  birthday: Date

  @IsIn(['Male', 'Female', 'Other'])
  gender: string

  @IsString()
  phone: string

  @IsIn(['Customer', 'Admin'])
  role: string
}

export class UpdateUserDTOById {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsString()
  name: string

  @IsString()
  password: string

  @IsDateString()
  birthday: Date

  @IsIn(['Male', 'Female', 'Other'])
  gender: string

  @IsString()
  phone: string

  @IsIn(['Customer', 'Admin'])
  role: string
}
