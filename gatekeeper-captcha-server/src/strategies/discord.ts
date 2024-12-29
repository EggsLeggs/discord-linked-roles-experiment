import passport from "passport";
import { Profile, Strategy } from "passport-discord";
import { VerifyCallback } from "passport-oauth2";
import { User } from "../database/schemas";
const config = require("../../config");

passport.serializeUser((user: any, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    return user ? done(null, user) : done(null, null);
  } catch (err) {
    console.log(err);
    return done(err, null);
  }
});

passport.use(
  new Strategy(
    {
      clientID: config.DISCORD_CLIENT_ID,
      clientSecret: config.DISCORD_CLIENT_SECRET,
      callbackURL: config.DISCORD_CALLBACK_URL,
      scope: ["identify", "role_connections.write"],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      const { id: discordId } = profile;
      try {
        const existingUser = await User.findOneAndUpdate(
          { discordId },
          { accessToken, refreshToken },
          { new: true }
        );
        if (existingUser) return done(null, existingUser);
        const newUser = new User({ discordId, accessToken, refreshToken });
        const savedUser = await newUser.save();
        return done(null, savedUser);
      } catch (err) {
        console.log(err);
        return done(err as any, undefined);
      }
    }
  )
);
