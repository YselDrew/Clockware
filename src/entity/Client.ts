import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity({ name: 'clients' }) 
export class Client {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 25 })
    name!: string;

    @Column({ type: 'varchar', length: 50 })
    email!: string;

    @Column({ type: 'varchar', length: 25 })
    city!: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt!: Date;
}