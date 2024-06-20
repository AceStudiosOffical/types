import { IsOptional, Validate } from "class-validator";
import { ItemType } from "../..//models";

export class StaffAdminUpdateItemDto {
    @IsOptional()
    @Validate((value: string) => value.length > 0)
    readonly name?: string;

    @IsOptional()
    @Validate((value: string) => value.length > 0)
    readonly description?: string;

    @IsOptional()
    readonly rarityId?: number;

    @IsOptional()
    readonly imageId?: number;

    @IsOptional()
    readonly type?: ItemType;

    @IsOptional()
    readonly canUse?: boolean;

    @IsOptional()
    readonly canAuction?: boolean;

    @IsOptional()
    readonly canTrade?: boolean;

    @IsOptional()
    readonly boosterDuration?: number;
}

export default StaffAdminUpdateItemDto;
