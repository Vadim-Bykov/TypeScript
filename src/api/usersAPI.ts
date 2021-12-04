export const getUsersAPI = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (response.ok) return Promise.resolve(response.json());
    if (!response.ok) return Promise.reject(response.json());
  } catch (error) {
    Promise.reject(error);
  }
};
