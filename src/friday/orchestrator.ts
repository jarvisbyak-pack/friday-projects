// Task Orchestrator for Friday V2
import { AgentTask } from '../core';

export const TaskOrchestrator = {
  queue: [] as AgentTask[],

  addTask(task: AgentTask) {
    this.queue.push({ ...task, status: 'pending' });
    console.log(`Task added: ${task.type}`);
  },

  async runNext() {
    const task = this.queue.shift();
    if (!task) return;
    
    task.status = 'executing';
    console.log(`Executing task: ${task.type}`);
    // Logic for routing to services goes here
    task.status = 'completed';
  }
};
