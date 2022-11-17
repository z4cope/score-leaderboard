export const postMethod = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
    },
    redirect: 'follow',
    body: JSON.stringify(data),
  });

  return response.json();
};

export const getMethod = async (url = '') => {
  const response = await fetch(url);

  return response.json();
};
