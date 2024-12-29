import axios from "axios";
import { User } from "../../database/schemas";
import { DISCORD_API_URL } from "../../utils/constants";
import { UserType } from "../../utils/types";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("../../../config");

export async function getUserService(id: string) {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return axios.get<UserType>(`${DISCORD_API_URL}/users/@me`, {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  });
}
