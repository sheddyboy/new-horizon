import React, { createContext, useState } from "react";
interface CreateProps {
  vision: number;
  setVision: React.Dispatch<React.SetStateAction<number>>;
  action: number;
  setAction: React.Dispatch<React.SetStateAction<number>>;
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
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
};
export const CreateCtx = createContext<CreateProps>(defaultCreateValues);

const CreateProvider = ({ children }: CreateProviderProps) => {
  const [slider, setSlider] = useState(0);
  const [vision, setVision] = useState(0);
  const [action, setAction] = useState(0);

  return (
    <CreateCtx.Provider
      value={{ slider, vision, action, setAction, setSlider, setVision }}
    >
      {children}
    </CreateCtx.Provider>
  );
};

export default CreateProvider;
