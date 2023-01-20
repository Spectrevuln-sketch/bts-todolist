import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";


export class RegisterAuthDto {
  @Transform(({ value }) => String(value), { toClassOnly: true })
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  email: string;
  
  @Transform(({ value }) => String(value), { toClassOnly: true })
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @Matches(/^[a-zA-Z\w\d\s ,.()-_]*$/, { message: 'Nama Kpknl Hanya Di Perbolehkan Alphanumeric (,.-()_) Min 2' })
  username: string;
  
  @Transform(({ value }) => String(value), { toClassOnly: true })
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  password: string;




}
