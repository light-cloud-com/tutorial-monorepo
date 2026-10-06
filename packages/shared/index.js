// Shared by apps/web and apps/api. Change it here, and both apps pick it up
// on their next build.
export const PRODUCT = "One repository, many apps";

export function formatVersion(number) {
  return `v${number}.1`;
}
