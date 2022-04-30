import instance from './http';

export const onSendValue = async (payload) => {
  const { data } = await instance.post('/wallet/send', payload);
  return data;
};
