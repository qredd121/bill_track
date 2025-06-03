export function updateMonthly() {
  fetch(`http://localhost:3000/api/subscriptions/update-monthly`, {
    method: "POST",
  });
}

export function updateAnnual() {
  fetch(`http://localhost:3000/api/subscriptions/update-annual`, {
    method: "POST",
  });
}

module.exports = {
  updateMonthly,
  updateAnnual,
};
