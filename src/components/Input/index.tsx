import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styles';
import Colors from '../../Configs/Colors';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({ name: fieldName, ref: inputRef.current, path: 'value' });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocus(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  return (
    <Container isErrored={!!error} isFocused={isFocus} isFilled={isFilled}>
      {Icon && <Icon size={24} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {/* {error && <span>{error}</span>} */}
      {/*     <Error title={error} className={`${fieldName}error`}> */}
      {error && (
        <Error title={error}>
          <FiAlertCircle color={Colors.error} size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
