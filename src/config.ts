export const environment = process.env.NODE_ENV;
export const port = process.env.PORT || 3000;
export const secret = process.env.JWT_SECRET || 'sample';
export const jwtExpiration = process.env.JWT_EXPIRATION_IN_MINUTES || "30";
export const Salt = process.env.salt || "$2b$10$zGJAs6cYFiJ6yLyT0IRSme"