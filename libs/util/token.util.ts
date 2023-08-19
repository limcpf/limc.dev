import jwt from "jsonwebtoken";

export const validateToken = (accessToken: string) => {
  const key = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
  const fail = {
    ok: false,
    exp: null,
  };
  if (!key) return fail;

  try {
    const decode = jwt.verify(accessToken, key) as jwt.JwtPayload;

    if (decode.exp && Date.now() / 1000 > decode.exp) return fail;

    return {
      ok: true,
      exp: decode.exp,
    };
  } catch (e) {
    return fail;
  }
};
