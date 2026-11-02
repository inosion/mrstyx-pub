// Mic capture for listen mode: copies the input into 1024-sample chunks and posts each with
// the audio-clock time of its first sample. Analysis happens in Rust on the main thread.
// Nothing here leaves the browser.
const CHUNK = 1024;

class MrstyxCapture extends AudioWorkletProcessor {
  constructor() {
    super();
    this.buf = new Float32Array(CHUNK);
    this.n = 0;
    this.t = 0;
  }

  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (ch) {
      for (let i = 0; i < ch.length; i++) {
        if (this.n === 0) this.t = currentTime + i / sampleRate;
        this.buf[this.n++] = ch[i];
        if (this.n === CHUNK) {
          this.port.postMessage({ t: this.t, samples: this.buf }, [this.buf.buffer]);
          this.buf = new Float32Array(CHUNK);
          this.n = 0;
        }
      }
    }
    return true;
  }
}

registerProcessor('mrstyx-capture', MrstyxCapture);
