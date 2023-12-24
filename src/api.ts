import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log('Subscribe', req.body);

  return res.json({});
});

router.delete('/', async (req, res) => {
  console.log('Unsubscribe', req.body);

  return res.json({});
});

router.get('/', async (req, res) => {
  console.log('Perform list', req.query, req.params);

  return res.json({
    event: 'PROPOSAL_CREATED',
    network: 'sn',
    space: '0x123',
    proposal: 1
  });
});

export default router;
