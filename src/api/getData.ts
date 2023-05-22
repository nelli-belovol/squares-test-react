import axios from 'axios';

export const getData = async () => {
  // const res = await axios.get('http://demo7919674.mockable.io/');

	
  return [
    {
      name: 'Easy',
      field: 5,
    },
    { name: 'Normal', field: 10 },
    { name: 'Hard', field: 15 },
  ];
};
