import { Request, Response } from "express";
import { JobService } from "../services/job-service.js";

export class JobController {
    private jobService: JobService;

    constructor() {
        this.jobService = new JobService();
    }

    async createJob(req: Request, res: Response) {
        try {
            const newJob = await this.jobService.createJob(req.body);
            res.status(201).json(newJob);
        } catch (error) {
            res.status(500).json({ message: "Falha ao criar job", error: (error as Error).message });
        }
    }

    async getAllJobs(req: Request, res: Response) {
        try {
            const jobs = await this.jobService.getAllJobs();
            res.status(200).json(jobs);
        } catch (error) {
            res.status(500).json({ message: "Falha ao chamar jobs", error: (error as Error).message });
        }
    }

    async getJobById(req: Request, res: Response) {
        try {
            const job = await this.jobService.getJobById(Number(req.params.id));
            if (job) {
                res.status(200).json(job);
            } else {
                res.status(404).json({ message: "Job não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: "Falha ao chamar job", error: (error as Error).message });
        }
    }

    async updateJob(req: Request, res: Response) {
        try {
            const updatedJob = await this.jobService.updateJob(Number(req.params.id), req.body);
            if (updatedJob) {
                res.status(200).json(updatedJob);
            } else {
                res.status(404).json({ message: "Job não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: "Falha em atualizar job", error: (error as Error).message });
        }
    }

    async deleteJob(req: Request, res: Response) {
        try {
            await this.jobService.deleteJob(Number(req.params.id));
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: "Falha ao deletar job", error: (error as Error).message });
        }
    }

    async getUnpaidJobs(req: Request, res: Response) {
        try {
            const contractId = Number(req.params.contractId);
            const unpaidJobs = await this.jobService.getUnpaidJobs(contractId);
            res.status(200).json(unpaidJobs);
        } catch (error) {
            res.status(500).json({ 
                message: "Falha ao recuperar jobs não pagos integralmente", 
                error: (error as Error).message
            });
        }
    }
}
