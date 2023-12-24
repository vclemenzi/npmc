const error = async (status: number) => {
  return new Response("Error", {
    status,
  });
}

export { error };
