export interface Registry {
  db_name: string;
  engine: string;
  doc_count: number;
  doc_del_count: number;
  update_seq: number;
  purge_seq: number;
  compact_running: boolean;
  sizes: {
    active: number;
    external: number;
    file: number;
  };
  disk_size: number;
  data_size: number;
  other: {
    data_size: number;
  };
  instance_start_time: string;
  disk_format_version: number;
  committed_update_seq: number;
  compacted_seq: number;
  uuid: string;
}
