import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsIn,
  IsDateString,
} from 'class-validator';

export class RegisterAuthDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['Male', 'Female', 'Orther'])
  gender: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  birthday: Date;
}

export class LoginAuthDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
