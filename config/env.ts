import dotenv from 'dotenv';

type Env = 'dev' | 'staging';

const env = (process.env.TEST_ENV || 'staging') as Env;

dotenv.config({ path: `.env.${env}` });

function required(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key} (TEST_ENV=${env})`);
  }
  return value;
}

export const config = {
    env,
    baseURL: required('BASE_URL'),
    auth: {
        authUser: required('AUTH_USER'),
        authPass: required('AUTH_PASS'),
    },
} as const;