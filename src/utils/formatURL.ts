export const formatURL = (url: string): string => {
  // https://github.com/astro/docs -> github.com/astro/docs

  url = url.replace(/(https?:\/\/)|(www\.)|(git:\/\/)/g, "");
  url = url.length > 30 ? url.slice(0, 28) + "..." : url;
  url = url.replace(/git\+/, "");
  url = url.replace(/\.git$/, "");

  return url;
};
