export const getItems = async (text) => {
  const url = `http://localhost:3000/api/items?q=:${text}`;
  const response = await fetch(url);
  const {data} = await response.json();
  return data;
  //   const items = data.map((img) => {
  //     return {
  //       id: img.id,
  //       title: img.title,
  //       url: img.images?.downsized_medium.url,
  //     };
  //   });
  //   return gifs;
};
