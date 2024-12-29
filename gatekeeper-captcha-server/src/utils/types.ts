export type { RESTGetAPICurrentUserResult as UserType } from "discord-api-types/rest/v10";

/**
 * The structure of response from the CaptchaResponse API is
 * {
 *  "success": true|false,
 *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
 *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
 *  "error-codes": [...]        // optional
}
        */
export type CaptchaResponse = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  "error-codes": string[];
};
