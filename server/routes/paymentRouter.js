import express from 'express';
import { processPayment } from '../controllers/paymentController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { getPaymentDetails } from '../controllers/paymentController.js';

const paymentRouter = express.Router();

paymentRouter.post('/pay', protect, processPayment)
paymentRouter.get('/:id', protect, getPaymentDetails)


export default paymentRouter;