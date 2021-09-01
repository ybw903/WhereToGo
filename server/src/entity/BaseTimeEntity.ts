import { Column, CreateDateColumn, Generated, PrimaryColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseTimeEntity {
    @Generated("increment")
    @PrimaryColumn()
    id: number

    @CreateDateColumn({type:"timestamp"})
    createdAt: Date

    @UpdateDateColumn({type:"timestamp"})
    updatedAt: Date

    @Column({type:"timestamp", nullable:true})
    deletedAt?: Date | null;
}