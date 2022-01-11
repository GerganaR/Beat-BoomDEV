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
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;

    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = "Ah";

    document.querySelector(".main").appendChild(message);

    this.emit(Application.events.READY);
    this.emit(Beat.events.BIT);
  }

  _create() {
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;

    for (let i = 0; i < lyrics.length; i++) {
      this._beat.on(Beat.events.BIT, (bit) => {
        const message = document.createElement("div");
        message.classList.add("message");
        message.innerText = lyrics[i];

        document.querySelector(".main").appendChild(message);
      });
    }
  }
}
