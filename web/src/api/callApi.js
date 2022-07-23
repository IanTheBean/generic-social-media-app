export const call = async (url) => {
  return await fetch(`http://localhost:4000${url}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
