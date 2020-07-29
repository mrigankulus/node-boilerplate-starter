/**
 * Knex.js database client and query builder for PostgreSQL.
 *
 * @see https://knexjs.org/
 * @copyright 2016-present Kriasoft (https://git.io/vMINh)
 */

import fs from "fs";
import knex from "knex";

const db = knex({
  client: "pg",

  connection: {
    ssl: (process.env.PGSSLMODE || "disable") !== "disable" && {
      rejectUnauthorized: false,
      cert: fs.readFileSync(String(process.env.PGSSLCERT), "utf8"),
      key: fs.readFileSync(String(process.env.PGSSLKEY), "utf8"),
      ca: fs.readFileSync(String(process.env.PGSSLROOTCERT), "utf8"),
    },
  },

  // Note that the max connection pool size must be set to 1
  // in a serverless environment.
  pool: {
    min: process.env.APP_ENV === "production" ? 1 : 0,
    max: 1,
  },

  debug: process.env.PGDEBUG === "true",
});

export default db;

// The TypeScript definitions below are automatically generated.
// Do not touch them, or risk, your modifications being lost.

export type CommentPoint = {
  comment_id: string;
  user_id: string;
};

export type Comment = {
  id: string;
  story_id: string;
  parent_id: string | null;
  author_id: string;
  text: string | null;
  created_at: Date;
  updated_at: Date;
};

export type Story = {
  id: string;
  author_id: string;
  slug: string;
  title: string;
  text: string | null;
  is_url: boolean;
  approved: boolean;
  created_at: Date;
  updated_at: Date;
};

export type StoryPoint = {
  story_id: string;
  user_id: string;
};

export type User = {
  id: string;
  username: string;
  email: string | null;
  display_name: string | null;
  photo: string | null;
  time_zone: string | null;
  claims: any;
  archived: boolean;
  created_at: Date;
  updated_at: Date;
  last_login_at: Date | null;
};
