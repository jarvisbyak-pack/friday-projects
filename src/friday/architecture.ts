/**
 * F.R.I.D.A.Y. Version 2 - Architecture Core
 * Dual-Loop System: 
 * 1. Primary Execution (Workflow 1)
 * 2. Background Evolution Engine (Workflow 2)
 */

export interface LongTermMemory {
  store(key: string, value: any): Promise<void>;
  retrieve(key: string): Promise<any>;
}

export interface EvolutionPatch {
  targetFile: string;
  patch: string;
  rationale: string;
}

export interface EvolutionEngine {
  analyzeLogs(logs: string[]): Promise<EvolutionPatch[]>;
  applyEvolution(patch: EvolutionPatch): Promise<void>;
}
