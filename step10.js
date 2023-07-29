var tpl = [21, "uamir"];
console.log(tpl);
const failingResponse = ["Not Found", 404];
const passingResponse = ["{}", 200];
if (passingResponse[1] === 200) {
    const localInfo = JSON.parse(passingResponse[0]);
    console.log(localInfo);
}
passingResponse[1];
const staff = [
    [0, "Adankwo", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"],
];
console.log(staff);
const payStubs = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[0], 300, 300, 300],
];
console.log(payStubs);
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];
console.log(monthOnePayments);
console.log(monthTwoPayments);
console.log(monthThreePayments);
calculatePayForEmployee(staff[0][0], payStubs[0][1]);
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);
export {};
