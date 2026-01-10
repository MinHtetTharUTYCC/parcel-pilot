import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateParcelDTo {
    @IsString()
    recipientId: string;

    @IsOptional()
    @IsString()
    orderId: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    note: string;


    @IsOptional()
    @IsString()
    imageUrl: string;

    @IsOptional()
    @IsString()
    imageKey: string;

    @IsOptional()
    @IsString()
    imageSize: number;

    @IsString()
    @IsOptional()
    courier: string;
}