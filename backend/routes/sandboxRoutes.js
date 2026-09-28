import express from 'express';
import {
  startContainer,
  stopContainer,
  getContainerStatus,
  getContainerLogs,
  getSandboxEngineInfo,
  proxyContainerView,
} from '../controllers/sandboxController.js';

const router = express.Router({ mergeParams: true });

router.post('/start', startContainer);
router.post('/stop', stopContainer);
router.get('/status', getContainerStatus);
router.get('/logs', getContainerLogs);
router.get('/engine', getSandboxEngineInfo);
router.get('/proxy', proxyContainerView);
router.get('/proxy/*', proxyContainerView);

export default router;
