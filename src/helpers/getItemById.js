export const getItemById = async (id) => {
  const url = `http://localhost:3000/api/items/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
