export interface PackageGeneral {
  readme: string;
  error: string;
  versions: {
    [key: string]: PackageDetailed;
  }[];
  repository: {
    type: string;
    url: string;
  };
  time: {
    [key: string]: string;
  }
}

export interface PackageDetailed {
  name: string;
  version: string;
  description: string;
  keywords?: string[];
  license?: string;
  dependencies: { [key: string]: string };
  devDependencies: { [key: string]: string };
  engines?: {
    node?: string;
  };
  author?: {
    name: string
  };
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

export interface PackageDownloads {
  package: string;
  downloads: {
    day: string;
    downloads: number;
  }[];
}
