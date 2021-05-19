import { IRegistrationFormState } from 'components/molecules/Registration/Registration';
import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearForm: 'CLEAR FORM',
  consentToggle: 'CONSENT TOGGLE',
  throwError: 'THROW ERROR',
};

const reducer = (state: IRegistrationFormState, action: any) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearForm:
      return {
        ...action.initialState,
      };
    // case actionTypes.consentToggle:
    //   return {
    //     ...state,
    //     consent: !state.consent,
    //   };
    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

export const useRegistrationForm = (initialState: any) => {
  const [formValue, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      field: e.target.name,
      value: e.target.value,
      type: actionTypes.inputChange,
    });
  };

  const handleClearForm = () => {
    dispatch({ type: actionTypes.clearForm, initialState });
  };
  const handleThrowError = (errorMessage: string) => {
    dispatch({ type: actionTypes.throwError, errorValue: errorMessage });
  };
  const handleConsent = () => {
    dispatch({ type: actionTypes.consentToggle, initialState });
  };
  return { formValue, handleInputChange, handleClearForm, handleThrowError, handleConsent };
};

export default useRegistrationForm;
