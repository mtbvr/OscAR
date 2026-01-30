import fs from 'fs/promises';
import path from 'path';
import { pool } from './database.js';

export async function runMigrations(): Promise<void> {
  const sqlPath = path.resolve(
    process.cwd(),
    'src',
    'common-lib',
    'config',
    'rights.sql'
  );

    const sql = await fs.readFile(sqlPath, 'utf8');
    if (!sql.trim()) {
      console.warn('[MIGRATION] rights.sql is empty, skipping');
      return;
    }
    // PostgreSQL accepts multiple statements in one query
    await pool.query(sql);
    console.log('[MIGRATION] rights.sql executed successfully');
}
