/**
 * n8n Workflow Definitions for F.R.I.D.A.Y. V2
 * These JSON structures represent the skeleton for the Primary Agent and Evolution Engine.
 */

export const WORKFLOW_1_PRIMARY_AGENT = {
  name: "F.R.I.D.A.Y. V2 - Primary Agent",
  nodes: [
    {
      name: "Webhook Trigger",
      type: "n8n-nodes-base.webhook",
      parameters: { httpMethod: "POST", path: "primary-agent-trigger" }
    },
    {
      name: "Log Interaction",
      type: "n8n-nodes-base.log",
      parameters: { message: "Primary Agent received task." }
    },
    {
      name: "LLM Orchestrator",
      type: "n8n-nodes-base.aiChain",
      parameters: { prompt: "Analyze the incoming task and route it." }
    }
  ]
};

export const WORKFLOW_2_EVOLUTION_ENGINE = {
  name: "F.R.I.D.A.Y. V2 - Evolution Engine",
  nodes: [
    {
      name: "Webhook Trigger",
      type: "n8n-nodes-base.webhook",
      parameters: { httpMethod: "POST", path: "evolution-engine-trigger" }
    },
    {
      name: "Log Analysis Node",
      type: "n8n-nodes-base.code",
      parameters: { jsCode: "// Analyze repository logs for structural improvements" }
    },
    {
      name: "Output Patch",
      type: "n8n-nodes-base.webhookResponse",
      parameters: { responseBody: "{\"action\": \"refactor\", \"status\": \"ready\"}" }
    }
  ]
};
