import { Transform, Type } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional } from "class-validator";
import { PaginationDto } from "src/common/dto/pagination.dto";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class ResidentFilterDto extends PaginationDto {
    @ApiPropertyOptional({
        description: 'Filter residents by approval status - true for pending residents, false for approved residents',
        type: Boolean,
        example: true,
    })
    @IsOptional()
    @Transform(({ value }) => value === "true")
    @IsBoolean()
    readonly pending?: boolean;
}