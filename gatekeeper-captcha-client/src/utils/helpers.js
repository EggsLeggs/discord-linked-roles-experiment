// validate cookies function for server side rendering
// return true if cookies are valid

export const validateCookies = (req) => {
  const sessonID = req.cookies["connect.sid"];
  return sessionID
    ? {
        Cookie: `connect.sid=${sessionID}`,
      }
    : false;
};
