import React, { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface MqttProps {
  mqttServer: string;
  sessionId: string;
  user: string;
  password: string;
}
interface CreateProps {
  vision: number;
  setVision: React.Dispatch<React.SetStateAction<number>>;
  action: number;
  setAction: React.Dispatch<React.SetStateAction<number>>;
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
  mqttData: MqttProps;
  setMqttData: React.Dispatch<React.SetStateAction<MqttProps>>;
}

interface CreateProviderProps {
  children: React.ReactNode;
}

export const defaultCreateValues: CreateProps = {
  vision: 0,
  setVision: () => null,
  action: 0,
  setAction: () => null,
  slider: 0,
  setSlider: () => null,
  mqttData: { mqttServer: "", password: "", sessionId: "", user: "" },
  setMqttData: () => null,
};
export const CreateCtx = createContext<CreateProps>(defaultCreateValues);

const CreateProvider = ({ children }: CreateProviderProps) => {
  const [searchParams] = useSearchParams();

  const [slider, setSlider] = useState(0);
  const [vision, setVision] = useState(0);
  const [action, setAction] = useState(0);
  const [mqttData, setMqttData] = useState({
    mqttServer: searchParams.get("mqtt_server") ?? "",
    sessionId: searchParams.get("session_id") ?? "",
    user: searchParams.get("user") ?? "",
    password: searchParams.get("password") ?? "",
  });

  return (
    <CreateCtx.Provider
      value={{
        slider,
        vision,
        action,
        mqttData,
        setAction,
        setSlider,
        setVision,
        setMqttData,
      }}
    >
      {children}
    </CreateCtx.Provider>
  );
};

export default CreateProvider;
