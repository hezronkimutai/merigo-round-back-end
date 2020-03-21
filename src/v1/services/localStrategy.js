import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";
import db from "../database/models";
import bcrypt from "bcrypt";

const { users } = db;
passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      try {
        const user = await users.findOne({ where: { email } });
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (!user) {
          return done(null, false);
        }
        if (!passwordsMatch) {
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;
