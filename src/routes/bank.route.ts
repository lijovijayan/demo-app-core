import { Router } from 'express';
import { BankController } from '@controllers';
import { BankService } from '@services';

const bank = Router();

// controller and service instances
const bankService = new BankService();
const bankController = new BankController(bankService);
// end - controller and service instances

bank.use('/', (req, res, next) => {
    next();
});

// routes
bank.get('/', bankController.getBanks);
bank.get('/:id', bankController.getBankById);
bank.post('/', bankController.createBank);
bank.put('/', bankController.updateBank);
bank.delete('/:id', bankController.deleteBank);
// end - routes

export default bank;
