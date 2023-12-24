const error = async (url: string, status: number) => {
  const res = await fetch(url);

  return new Response(res.body, {
    headers: res.headers,
    status,
  });
}

export { error };
