import { Router } from 'express';
import { cityController } from './city.controller';

import { createValidator } from '../../common/middlewares/createValidator';
import { createCityDto, updateCityDto, cityIdDto } from './city.dtos';

export const router: Router = Router();

router.get('/', cityController.findMany);
router.get('/:id', createValidator(cityIdDto, 'params'), cityController.findOneById);

router.post('/', createValidator(createCityDto), cityController.createOne);

router.put('/:id', createValidator(updateCityDto), cityController.updateOne);

router.delete('/:id', createValidator(cityIdDto, 'params'), cityController.deleteOne);
