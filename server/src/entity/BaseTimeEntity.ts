import { Column, CreateDateColumn, Generated, PrimaryColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseTimeEntity {
    @Generated("increment")
    @PrimaryColumn()
    id: number

    @CreateDateColumn({type:"timestamptz"})
    createdAt: Date

    @UpdateDateColumn({type:"timestamptz"})
    updatedAt: Date

    @Column({type:"timestamptz", nullable:true})
    deletedAt?: Date | null;
}