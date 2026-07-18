let responseTime = 850;
let sla = 1000;
let status = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log(status); // Output: Within SLA
console.log(`Response Time: ${responseTime}ms, SLA: ${sla}ms, Status: ${status}`);
// Template literals allow for embedding expressions within string literals using backticks (`) and ${} syntax. In this case, we are using template literals to create a formatted string that includes the response time, SLA, and status.

console.log(`Response Time: ${responseTime}ms, SLA: ${sla}ms, Status: ${status}`);