
export const WORKFLOW_1_PRIMARY_AGENT = {
  "name": "F.R.I.D.A.Y. V2 - Primary Agent",
  "nodes": [
    { "id": "1", "name": "Primary Agent Trigger", "type": "n8n-nodes-base.webhook", "typeVersion": 1, "position": [250, 300], "parameters": { "httpMethod": "POST", "path": "primary-agent-trigger", "options": {} } },
    { "id": "2", "name": "Log Interaction", "type": "n8n-nodes-base.noOp", "typeVersion": 1, "position": [450, 300], "parameters": {} },
    { "id": "3", "name": "LLM Orchestrator", "type": "n8n-nodes-base.basicAuth", "typeVersion": 1, "position": [650, 300], "parameters": {} }
  ],
  "connections": {
    "Primary Agent Trigger": { "main": [[ { "node": "Log Interaction", "type": "main", "index": 0 } ]] },
    "Log Interaction": { "main": [[ { "node": "LLM Orchestrator", "type": "main", "index": 0 } ]] }
  }
};

export const WORKFLOW_2_EVOLUTION_ENGINE = {
  "name": "F.R.I.D.A.Y. V2 - Evolution Engine",
  "nodes": [
    { "id": "1", "name": "Evolution Engine Trigger", "type": "n8n-nodes-base.webhook", "typeVersion": 1, "position": [250, 300], "parameters": { "httpMethod": "POST", "path": "evolution-engine-trigger", "options": {} } },
    { "id": "2", "name": "Log Analysis Node", "type": "n8n-nodes-base.code", "typeVersion": 1, "position": [450, 300], "parameters": { "jsCode": "// Analyze repository logs for structural improvements" } },
    { "id": "3", "name": "Output Patch", "type": "n8n-nodes-base.webhookResponse", "typeVersion": 1, "position": [650, 300], "parameters": { "responseBody": "{\"action\": \"refactor\", \"status\": \"ready\"}" } }
  ],
  "connections": {
    "Evolution Engine Trigger": { "main": [[ { "node": "Log Analysis Node", "type": "main", "index": 0 } ]] },
    "Log Analysis Node": { "main": [[ { "node": "Output Patch", "type": "main", "index": 0 } ]] }
  }
};
