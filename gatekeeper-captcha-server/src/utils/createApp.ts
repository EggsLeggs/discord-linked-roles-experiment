import { config } from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import routes from "../routes";
import store from "connect-mongo";

config();
require("../strategies/discord");

export function createApp(): Express {
  const app = express();
  // Enable passing Middleware for Requests
  app.use(express.json());
  app.use(express.urlencoded());

  // Enable CORS
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );

  // Enable Session (1 Hour)
  app.use(
    session({
      secret:
        "#Y9upbtXY3A6Z7Kk3iVYVP&C*BzR48jhwc6zenU5avDMvhhKL&5K6HxiTBC9BXCUPUH98rBduYMkc*PCCD5Xpa2vLifY#8Aaf*YCSdj362jgu!87&3Y3Dx2u^&T$WN*o",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 * 60 },
      store: store.create({
        mongoUrl: "mongodb://127.0.0.1/gatekeeper_captcha",
      }),
    })
  );

  // // Enable Passport
  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api", routes);

  return app;
}
