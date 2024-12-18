import { Request, Response } from "express";
import { PaymentService } from "../services/payment-service.js";

export class PaymentController {
    private paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    async createPayment(req: Request, res: Response) {
        try {
            const newPayment = await this.paymentService.createPayment(req.body);
            res.status(201).json(newPayment);
        } catch (error) {
            res.status(500).json({ message: "Falha ao criar pagamento", error: (error as Error).message });
        }
    }

    async getAllPayments(req: Request, res: Response) {
        try {
            const payments = await this.paymentService.getAllPayments();
            res.status(200).json(payments);
        } catch (error) {
            res.status(500).json({ message: "Falha ao recuperar pagamentos", error: (error as Error).message });
        }
    }

    async getPaymentById(req: Request, res: Response) {
        try {
            const payment = await this.paymentService.getPaymentById(Number(req.params.id));
            if (payment) {
                res.status(200).json(payment);
            } else {
                res.status(404).json({ message: "Pagamento não econtrado" });
            }
        } catch (error) {
            res.status(500).json({ message: "Falha ao recuperar pagamentos", error: (error as Error).message });
        }
    }

    async updatePayment(req: Request, res: Response) {
        try {
            const updatedPayment = await this.paymentService.updatePayment(Number(req.params.id), req.body);
            if (updatedPayment) {
                res.status(200).json(updatedPayment);
            } else {
                res.status(404).json({ message: "Pagamento não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: "Falha ao atualizar o pagamento", error: (error as Error).message });
        }
    }

    async deletePayment(req: Request, res: Response) {
        try {
            await this.paymentService.deletePayment(Number(req.params.id));
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: "Falha ao deletar o pagamento", error: (error as Error).message });
        }
    }
}
