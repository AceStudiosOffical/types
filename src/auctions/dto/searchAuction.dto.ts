import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";
import { AuctionTypeEnum } from "../../interfaces";

export class AuctionsSearchAuctionDto {
    @IsOptional()
    @IsEnum(AuctionTypeEnum)
    readonly type?: AuctionTypeEnum;

    @IsOptional()
    @IsNumber()
    readonly blookId?: number;

    @IsOptional()
    @IsNumber()
    readonly itemId?: number;

    @IsOptional()
    @IsNumber()
    readonly rarityId?: number;

    @IsOptional()
    @IsBoolean()
    readonly endingSoon?: boolean;

    @IsOptional()
    @IsBoolean()
    readonly buyItNow?: boolean;

    @IsOptional()
    @IsString()
    readonly sellerId?: string;
}

export default AuctionsSearchAuctionDto;
