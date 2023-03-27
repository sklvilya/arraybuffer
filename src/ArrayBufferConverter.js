/* eslint-disable no-plusplus */
import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  constructor() {
    this.data = [];
  }

  load() {
    this.data = getBuffer();
  }

  toString() {
    let text = '';
    const dataArray = new Uint16Array(this.data);
    for (let i = 0; i < dataArray.length; i++) {
      text += String.fromCharCode(dataArray[i]);
    }
    return text;
  }
}
