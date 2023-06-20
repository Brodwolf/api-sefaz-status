import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { PostgreDefaultOptions } from './PostgreDefaultOptions';

export const AppDataSource = new DataSource(PostgreDefaultOptions);
