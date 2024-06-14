class RemoteControl {
  constructor(protected device: Device) {}
  togglePower(): void {
    console.log(`Turning on the device`);
    this.device.togglePower();
  }
  setFirstChannel() {
    this.device.setChannel();
  }
}

class AdvancedRemote extends RemoteControl {
  mute(): void {
    if (this.device.isEnabled) {
      console.log(`Muting this device`);
    } else {
      console.log("Turn on the device first");
    }
  }
}

interface Device {
  isEnabled: boolean;
  togglePower(): void;
  setChannel(): void;
}
class Tv implements Device {
  isEnabled: boolean = false;
  togglePower(): void {
    this.isEnabled = !this.isEnabled;
  }
  setChannel(): void {
    if (this.isEnabled) {
      console.log(`Watching Fox News channel`);
    } else {
      console.log("Turn on the device first");
    }
  }
}

class Radio implements Device {
  isEnabled: boolean = false;
  togglePower(): void {
    this.isEnabled = !this.isEnabled;
  }
  setChannel(): void {
    if (this.isEnabled) {
      console.log(`Listening to the BBC1 radio channel`);
    } else {
      console.log("Turn on the device first");
    }
  }
}

export default class {
  static run() {
    let remote = new AdvancedRemote(new Tv());
    remote.mute();
    remote.togglePower();
    remote.setFirstChannel();
    remote.mute();
    console.log("");
    remote = new AdvancedRemote(new Radio());
    remote.setFirstChannel();
    remote.togglePower();
    remote.setFirstChannel();
  }
}
