export const METHODS = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
} as const;

export type METHOD = typeof METHODS[keyof typeof METHODS];
