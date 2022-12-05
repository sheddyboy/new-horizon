import { connect, MqttClient } from "mqtt";

let Wrapper: {
  client?: MqttClient;
  session_id: string;
  connect: (
    mqtt_server_address: string,
    session_id: string,
    username: string,
    password: string
  ) => void;
  unsubscribe: (topic: String) => void;
  subscribe: Function;
  send: Function;
  pre_disconnect: Function;
};

Wrapper = {
  client: undefined,
  session_id: "",
  connect: function (
    mqtt_server_address: string,
    session_id: string,
    username: string,
    password: string
  ) {
    this.client = connect(mqtt_server_address, { username, password });
    this.session_id = session_id;
    this.subscribe("timeout");
    this.send("connected", 1);
  },
  subscribe: function (topic: String) {
    this.client!.subscribe(`${this.session_id}/${topic}`);
  },
  unsubscribe: function (topic: String) {
    this.client!.unsubscribe(`${this.session_id}/${topic}`);
  },
  send: function (topic: String, payload: any) {
    this.client!.publish(`${this.session_id}/${topic}`, String(payload));
  },
  pre_disconnect: async function () {
    this.unsubscribe("timeout");
    await this.send("connected", 0);
  },
};

export default Wrapper;
