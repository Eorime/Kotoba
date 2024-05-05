export const fetchData = async (url) => {
  const response = await fetch(url, {
    method: "GET",
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error("Couldn't fetch data");
};
