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

export interface PackageSearch {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links: {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
  };
  author: {
    name: string;
    email: string;
  };
  publisher: {
    username: string;
    email: string;
  };
  maintainers: {
    username: string;
    email: string;
  }[];
}

interface Flags {
  insecure: number;
}

interface ScoreDetail {
  quality: number;
  popularity: number;
  maintenance: number;
}

interface Score {
  final: number;
  detail: ScoreDetail;
}

interface PackageData {
  package: Package;
  flags: Flags;
  score: Score;
  searchScore: number;
}
