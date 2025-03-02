import { ArrayRepeat } from "../extensions/array";

export class Log {
  yellowLog: string = "";
  whiteLog: string = "";
  greenLog: string = "";
  constructor(yellowLog: string, whiteLog: string, greenLog: string) {
    this.yellowLog = yellowLog;
    this.whiteLog = whiteLog;
    this.greenLog = greenLog;
  }
}

export const logsFixture: Log[] = ArrayRepeat(
  [
    new Log(
      "Jan 01 08:38:47",
      "e05b7577-9888-43e4-aa2a-f38f404afb84",
      "discovery completed"
    ),
  ],
  100
);
