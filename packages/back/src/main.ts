import 'dotenv/config';
import 'reflect-metadata';

import { bootstrapMaster } from './bootstrap';
import { Logger } from './util/logger';

bootstrapMaster().catch(Logger.error);
