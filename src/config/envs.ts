// import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    NEXT_PUBLIC_API_KEY: string;
    NEXT_PUBLIC_AUTH_DOMAIN: string;
    NEXT_PUBLIC_PROJECT_ID: string;
    NEXT_PUBLIC_STORAGE_BUCKET: string;
    NEXT_PUBLIC_MESSAGING_SENDER_ID: string;
    NEXT_PUBLIC_APP_ID: string;
}

const envsSchema = joi.object({
    NEXT_PUBLIC_API_KEY: joi.string().required(),
    NEXT_PUBLIC_AUTH_DOMAIN: joi.string().required(),
    NEXT_PUBLIC_PROJECT_ID: joi.string().required(),
    NEXT_PUBLIC_STORAGE_BUCKET: joi.string().required(),
    NEXT_PUBLIC_MESSAGING_SENDER_ID: joi.string().required(),
    NEXT_PUBLIC_APP_ID: joi.string().required(),
}).unknown(true);

const { error, value } = envsSchema.validate( process.env );

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    apiKey: envVars.NEXT_PUBLIC_API_KEY,
    authDomain: envVars.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: envVars.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: envVars.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: envVars.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: envVars.NEXT_PUBLIC_APP_ID,
}