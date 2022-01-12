import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._beat = new Beat();
    this._create();

    this.emit(Application.events.READY);
    this.emit(Beat.events.BIT);
  }

  _create() {
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
    // lyrics.forEach((bit) => console.log(bit));

    // for (let i = 0; i < lyrics.length; i++) {
    //   this._beat.on(Beat.events.BIT, (bit) => {
    //     const message = document.createElement("div");
    //     message.classList.add("message");
    //     message.innerText = lyrics[i];
    //     console.log(message);

    //     document.querySelector(".main").appendChild(message);
    //   });
    // }

    this._beat.on(Beat.events.BIT, (bit) => {
      lyrics.forEach((bit) => {
        const message = document.createElement("div");
        message.classList.add("message");
        message.innerText = bit;
        console.log(bit);

        document.querySelector(".main").appendChild(message);
      });
    });
  }
}
