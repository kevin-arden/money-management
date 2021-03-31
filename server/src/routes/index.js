const express = require("express");
const router = express.Router();
const {
  getBudget,
  postBudget,
  editBudget,
  deleteBudget,
} = require("../controllers/budgetcontroller");

router.get("/budget", getBudget);
router.post("/budget", postBudget);
router.patch("/budget/:id", editBudget);
router.delete("/budget/:id", deleteBudget);

module.exports = router;
