import md5 from 'react-native-md5';

const timeStamp = () => new Date().getTime();

const md5Hash = () =>
  md5.hex_md5(
    `${timeStamp()}1d5868baf589ddf3981e6f70a16d19ba3c5f9b887ba8793224474d90fc1052b5616844c6`
  );

const urlKey = () =>
  `ts=${timeStamp()}&apikey=7ba8793224474d90fc1052b5616844c6&hash=${md5Hash()}`;

export default {
  urlKey,
};
