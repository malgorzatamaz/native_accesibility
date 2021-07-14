import React, {useState} from 'react';

export const AccessibilityModeContext = React.createContext({
  isAccesibilityModeOn: false,
  setIsAccesibilityModeOn: () => {},
});

const AccessibilityModeProvider = ({children}) => {
  const [isAccesibilityModeOn, setIsAccesibilityModeOn] = useState(false);

  const value = {isAccesibilityModeOn, setIsAccesibilityModeOn};

  return (
    <AccessibilityModeContext.Provider value={value}>
      {children}
    </AccessibilityModeContext.Provider>
  );
};

export default AccessibilityModeProvider;
