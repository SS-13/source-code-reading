let output = "";
// async function main() {
const dynamic = import("./data");
output = (await dynamic).default + "🏮";
// }

// main();

export { output };
