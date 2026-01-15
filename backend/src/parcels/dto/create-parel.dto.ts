import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateParcelDto {
    @IsString()
    recipientId: string;
    @IsOptional()
    @IsString()
    orderId?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    note?: string;

    @IsOptional()
    @IsString()
    imageUrl?: string;

    @IsOptional()
    @IsString()
    imageKey?: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    imageSize?: number;

    @IsString()
    @IsOptional()
    courier: string;
}