import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:i4aQ2cpvFVxw@ep-green-dew-a53kxwzr.us-east-2.aws.neon.tech/roommate-ai?sslmode=require',
  },
});
