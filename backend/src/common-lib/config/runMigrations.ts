import { pool } from './database.js';
import { generateRightsSql } from './generateRightsSql.js';

export async function runMigrations(): Promise<void> {
  try {
    // Générer le SQL dynamiquement à partir de l'enum RoleEnum
    const sql = generateRightsSql();
    
    if (!sql.trim()) {
      console.warn('[MIGRATION] Generated SQL is empty, skipping');
      return;
    }
    
    // PostgreSQL accepts multiple statements in one query
    await pool.query(sql);
    console.log('[MIGRATION] rights.sql executed successfully');
  } catch (error) {
    console.error('[MIGRATION] Error running migrations:', error);
    throw error;
  }
}
