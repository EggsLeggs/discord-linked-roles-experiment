import axios from "axios";
import { User } from "../../database/schemas";
import { DISCORD_API_URL } from "../../utils/constants";
import { CaptchaResponse } from "../../utils/types";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("../../../config");

export async function verifyCaptchaService(id: string, captcha: string) {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return axios.get<CaptchaResponse>(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${captcha}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    }
  );
}

export async function updateUserMetadata(id: string) {
  // get user's access token from mongo
  const accessToken = await User
    .findById(id)
    .select("accessToken")
    .exec();
    if (!accessToken) throw new Error("User not found");
  //body = { "metadata": {"pending": true} }
  return axios.put<CaptchaResponse>(
    `${DISCORD_API_URL}/users/@me/applications/${config.DISCORD_CLIENT_ID}/role-connection`, 
    {
      "metadata": {
        "pending": true
    }},
  {headers: {
        "Authorization": `Bearer ${accessToken.accessToken}`
    }}
  );
}