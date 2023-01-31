import React, { useContext, useState } from "react";

const OpenAdditionSection = React.createContext();
const AdditionSectionBtn = React.createContext();

export function useOpenState() {
  const setOpen = useContext(AdditionSectionBtn);
  const open = useContext(OpenAdditionSection);
  return [open, setOpen];
}
export default ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <OpenAdditionSection.Provider value={open}>
        <AdditionSectionBtn.Provider value={setOpen}>
          {children}
        </AdditionSectionBtn.Provider>
      </OpenAdditionSection.Provider>
    </>
  );
};
