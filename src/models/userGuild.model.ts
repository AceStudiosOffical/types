import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Guild, GuildRole, User } from "./index";

@Table({ tableName: "user_guild" })
export class UserGuild extends Model<UserGuild> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => Guild)
    @Column({ type: DataType.INTEGER, allowNull: false })
    guildId: number;

    @BelongsTo(() => Guild)
    guild: Guild;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @BelongsTo(() => User)
    user: User;

	@Column({
        type: DataType.INTEGER,
        allowNull: false,
        validate: { isIn: { args: [Object.values(GuildRole)], msg: `userRole must be one of: ${Object.values(GuildRole).join(", ")}` } },
		defaultValue: GuildRole.MEMBER
    })
    userRole: GuildRole;
}
