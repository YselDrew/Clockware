import { Router } from 'express';
import { clientController } from './client.controller';

import { createValidator } from '../../common/middlewares/createValidator';
import { createClientDto, updateClientDto } from './client.dtos';

export const router: Router = Router();

router.get('/', clientController.findMany);
router.get('/:id', clientController.findOneById);

router.post('/', createValidator(createClientDto), clientController.createOne);

router.put('/:id', createValidator(updateClientDto), clientController.updateOne);

router.delete('/:id', clientController.deleteOne);
