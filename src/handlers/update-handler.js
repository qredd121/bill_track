export function updateMonthly() {
  fetch(
    `http://${process.env.NEXT_PUBLIC_MAIN_HOSTNAME}/api/subscriptions/update-monthly`,
    {
      method: "POST",
    }
  );
}

export function updateAnnual() {
  fetch(
    `http://${process.env.NEXT_PUBLIC_MAIN_HOSTNAME}/api/subscriptions/update-annual`,
    {
      method: "POST",
    }
  );
}

module.exports = {
  updateMonthly,
  updateAnnual,
};
