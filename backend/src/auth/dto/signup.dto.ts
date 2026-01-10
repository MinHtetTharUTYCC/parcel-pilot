import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Type } from "class-transformer"

export class SignupDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsString()
    unitNumber: string;

    @IsOptional()
    @IsString()
    phone: string;

    @IsString()
    @MinLength(6)
    @MaxLength(30)
    password: string;
}