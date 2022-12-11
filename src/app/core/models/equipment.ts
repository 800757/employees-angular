import { Employee } from './employee';
export interface Equipment {
    id: number;
    type: string;
    name: string;
    employee: Employee;
}