import instance from './http';

export const onAuthenticate = async (username, password) => {
  const payload = { password, username };
  const { data } = await instance.post('/login', payload);
  return data;
};
