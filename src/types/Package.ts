export interface PackageGeneral {
  readme: string;
}

export interface PackageDetailed {
  name: string;
  version: string;
  description: string;
  keywords?: string[];
  license?: string;
  engines?: {
    node?: string;
  };
  author?: { name: string }[];
  maintainers?: {
    name: string;
  }[];
}
