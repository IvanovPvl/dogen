import * as Router from 'koa-router';
import * as genCtrl from '../controllers/gen';

const router = new Router();
router.post('/gen/:templateId', genCtrl.create);

export default router;
