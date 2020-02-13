type TRunMigrationInput = {
  migration: TMigration;
}

export type TMigration = {
  id: number;
  jobId: number;
  name: string;
  data: string;
};

const JOB_STATUS_RUNNING = "running"
const JOB_TYPE_MIGRATION = "migration"

export type TJob = {
  type: 'migration';
  status: "pending" | "running" | "failed" | "finished";
  migrationId: number;
  jobId: number;
  processId: number;
  workerId: number;
}


/*
  Route implementation should be used for all migrations running operation.
  Flow of communication:
  - select migration should be run
  - create job based on migration
  - send `runMigration` query with all required input data
  - worker runs crispy-cli to based on migration data received from api
  - worker sends processId to API
  - crispy-cli sends logs about execution based on the job ID and process ID.
  - crispy-cli notifies API about process finishing
*/
export const runMigration = (parent: any, { migration }: TRunMigrationInput): TJob => {
  console.log('running migration', migration)
  // TODO: add crispy running command
  return {
    type: JOB_TYPE_MIGRATION,
    status: JOB_STATUS_RUNNING,
    migrationId: migration.id,
    jobId: migration.jobId,
    // TODO: should respond with current worker ID. It should be unique number through all workers
    workerId: 1,
    // TODO: should be process ID from crispy-cli command
    processId: 2
  }
}

