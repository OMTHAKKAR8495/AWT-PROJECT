import { Router } from 'express';
import multer from 'multer';
import {
  parseResumeAndSave,
  getCandidates,
  getCandidateById,
  updateCandidate,
  deleteCandidate
} from '../controllers/candidateController.js';

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.post('/upload', upload.single('resume'), parseResumeAndSave);
router.get('/', getCandidates);
router.get('/:id', getCandidateById);
router.patch('/:id', updateCandidate);
router.delete('/:id', deleteCandidate);

export default router;
