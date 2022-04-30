import instance from './http';

export const contactsData = async () => {
  const { data } = await instance.get('/contacts');

  return data;
};
