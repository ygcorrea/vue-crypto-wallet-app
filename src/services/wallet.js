import instance from './http';

export const walletData = async () => {
  const { data } = await instance.get('/wallet');
  return data;
};
