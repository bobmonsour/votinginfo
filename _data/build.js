import { execSync } from "node:child_process";

export default function () {
	let lastUpdated;
	try {
		lastUpdated = execSync("git log -1 --format=%cs", { encoding: "utf8" }).trim();
	} catch {
		lastUpdated = new Date().toISOString().slice(0, 10);
	}
	return { lastUpdated };
}
