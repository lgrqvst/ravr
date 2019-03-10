import { chunkSize } from '../data/levels';
import { timingSafeEqual } from 'crypto';

class Chunk {
  constructor(descriptor, x, y) {
    this.descriptor = descriptor;
    this.x = x;
    this.y = y;
    console.log(descriptor);
  }

  draw = ctx => {
    console.log('Drawing chunk');
  };
}

export default Chunk;
