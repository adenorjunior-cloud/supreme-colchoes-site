const staticBasePath = process.env.GITHUB_PAGES === "true"
  ? "/supreme-colchoes-site"
  : process.env.HOSTGATOR_PREVIEW_BASE_PATH?.replace(/\/$/, "") ?? "";

export function assetPath(path: string) {
  return `${staticBasePath}${path.startsWith("/") ? path : `/${path}`}`;
}
