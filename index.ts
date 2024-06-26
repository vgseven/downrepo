#!/usr/bin/env node

import { downloadDirectory } from "@/download-repo";
import * as color from "picocolors";
import { setTimeout } from "node:timers/promises";
import { repoInfo } from "@/repo-info";

async function main() {
	const gitPath = process.argv[2];
	const dirname = process.argv[3];

	const { owner, repo, subDir } = repoInfo(gitPath);

	try {
		await setTimeout(1000);
		await downloadDirectory(owner, repo, subDir, dirname);
		console.log("Downloaded successfully...");
		console.log(`Problems? ${color.underline(color.cyan("https://github.com/silver-radium/downrepo/issues"))}`);
	} catch (error) {
		console.log(
			`${color.red("Error while downloading, Provide path and folder name like https://github.com/silver-radium/templates/next/general general - so downrepo will downlaod repo or sub-dir to general folder..")}`
		);
		process.exit(1);
	}
}

main();
