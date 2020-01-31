export type TMigration = {
  id: number;
  name: string;
  data: string;
};

const JOB_STATUS_RUNNING = "running"
const JOB_TYPE_MIGRATION = "migration"

export type TJob = {
  type: 'migration';
  status: "pending" | "running" | "failed" | "finished";
  migrationId: number;
  workerId: number;
}



export const runMigration = (parent: any, migration: TMigration): TJob => {
  console.log('running migration', migration)
  // TODO: add crispy running command
  return {
    type: JOB_TYPE_MIGRATION,
    status: JOB_STATUS_RUNNING,
    migrationId: migration.id,
    // TODO: should respond with current worker ID. It should be unique number through all workers
    workerId: 1,
  }
}

