import { IsEmail, IsString } from 'class-validator';

export class CreateStudioDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  googleId: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;

  @IsString()
  status: string;

  @IsString()
  location: string;

  @IsString()
  cep: string;
}
