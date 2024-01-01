export default async (status: number) => {
  return new Response("Error", {
    status,
  });
};
