
-- Obehi: Represents the user
CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  username    TEXT NOT NULL UNIQUE,
  password    TEXT NOT NULL,
  first_name  TEXT NOT NULL,
  last_name   TEXT NOT NULL,
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  age         INTEGER NOT NULL,
  zip_code    INTEGER NOT NULL,
  profile_pic TEXT,
  is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

--Obehi: Represents what the user enters into the sleep form ---> Is it a donation(unused) or a recycle(used)
CREATE TABLE sleep (
  id         SERIAL PRIMARY KEY,
  user_id    INTEGER REFERENCES users(id) ON DELETE CASCADE,
  start_time INTEGER NOT NULL,
  end_time   INTEGER NOT NULL,
  date       INTEGER NOT NULL,
  notes      TEXT,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

--Represent the example products we obtain as a recycle or a donation. On Home page it is split into two categories
CREATE TABLE recents (
  id            SERIAL PRIMARY KEY,
  category      TEXT NOT NULL DEFAULT 'misc',
  name          TEXT NOT NULL,
  description   TEXT NOT NULL
);