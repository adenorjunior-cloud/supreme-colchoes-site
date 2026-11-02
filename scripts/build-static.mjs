import { spawnSync } from "node:child_process";

const result = spawnSync(process.execPath, ["node_modules/next/dist/bin/next", "build"], {
  env: {
    ...process.env,
    STATIC_EXPORT: "true",
    ...(process.argv.includes("--preview")
      ? { HOSTGATOR_PREVIEW_BASE_PATH: "/~adenor90/preview" }
      : {}),
  },
  stdio: "inherit",
});

process.exit(result.status ?? 1);
