type ValidationErrors = {
  errorsKeys: string[];
  isValid: boolean;
};

type FieldsValidationResult = {
  fields: {
    [fieldName: string]: ValidationErrors;
  };
  isValid: boolean;
};

export type { ValidationErrors, FieldsValidationResult };
