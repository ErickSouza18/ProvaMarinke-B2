import { Profile } from "../models/profile-models.js";
import { Contract } from "../models/contract-models.js";
import { Job } from "../models/job-models.js";
import { Deposit } from "../models/deposit-models.js";
import { Payment } from "../models/Payment-models.js";

export class DatabaseSeeder {
    public async createProfiles(): Promise<void> {
        const profiles = [
            { "firstName": "Amanda", "lastName": "Oliveira", "profession": "Médica", "balance": 8000, "type": "client" },
            { "firstName": "Bruno", "lastName": "Gomes", "profession": "Programador", "balance": 4500, "type": "contractor" },
            { "firstName": "Carolina", "lastName": "Fernandes", "profession": "Arquiteta", "balance": 6200, "type": "client" },
            { "firstName": "Diego", "lastName": "Vieira", "profession": "Designer", "balance": 3000, "type": "contractor" },
            { "firstName": "Elisa", "lastName": "Monteiro", "profession": "Psicóloga", "balance": 5000, "type": "client" },
            { "firstName": "Fábio", "lastName": "Castro", "profession": "Engenheiro de Produção", "balance": 7000, "type": "contractor" },
            { "firstName": "Gabriela", "lastName": "Santos", "profession": "Consultora Financeira", "balance": 7500, "type": "client" },
            { "firstName": "Henrique", "lastName": "Pires", "profession": "Analista de Sistemas", "balance": 4100, "type": "contractor" }
        ];

        await Profile.bulkCreate(profiles);
    }

    public async createContracts(): Promise<void> {
        const contracts = [
            { "terms": "Análise de Mercado", "clientId": 1, "contractorId": 2, "operationDate": new Date("2024-12-01"), "status": "ativo" },
            { "terms": "Planejamento de Projeto", "clientId": 3, "contractorId": 4, "operationDate": new Date("2024-12-03"), "status": "ativo" },
            { "terms": "Desenvolvimento de Software", "clientId": 5, "contractorId": 6, "operationDate": new Date("2024-12-05"), "status": "finalizado" },
            { "terms": "Consultoria Empresarial", "clientId": 7, "contractorId": 8, "operationDate": new Date("2024-12-07"), "status": "ativo" }
        ];

        await Contract.bulkCreate(contracts);
    }

    public async createJobs(): Promise<void> {
        const jobs = [
            { "contractId": 1, "description": "Análise de Requisitos", "operationDate": new Date("2024-12-02"), "paymentDate": null, "price": 3000, "paid": false },
            { "contractId": 2, "description": "Prototipagem", "operationDate": new Date("2024-12-04"), "paymentDate": null, "price": 2000, "paid": false },
            { "contractId": 3, "description": "Testes e QA", "operationDate": new Date("2024-12-06"), "paymentDate": null, "price": 4000, "paid": false },
            { "contractId": 4, "description": "Planejamento Estratégico", "operationDate": new Date("2024-12-08"), "paymentDate": null, "price": 2500, "paid": false }
        ];

        await Job.bulkCreate(jobs);
    }

    public async createDeposits(): Promise<void> {
        const deposits = [
            { "clientId": 1, "operationDate": new Date("2024-12-01"), "depositValue": 1000 },
            { "clientId": 3, "operationDate": new Date("2024-12-03"), "depositValue": 1500 },
            { "clientId": 5, "operationDate": new Date("2024-12-05"), "depositValue": 2000 },
            { "clientId": 7, "operationDate": new Date("2024-12-07"), "depositValue": 2500 }
        ];

        await Deposit.bulkCreate(deposits);
    }

    public async createPayments(): Promise<void> {
        const payments = [
            { "jobId": 1, "operationDate": new Date("2024-12-03"), "paymentValue": 3000 },
            { "jobId": 2, "operationDate": new Date("2024-12-05"), "paymentValue": 2000 },
            { "jobId": 3, "operationDate": new Date("2024-12-07"), "paymentValue": 4000 },
            { "jobId": 4, "operationDate": new Date("2024-12-09"), "paymentValue": 2500 }
        ];

        await Payment.bulkCreate(payments);
    }
}
