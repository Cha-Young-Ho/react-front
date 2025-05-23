import React from 'react';

/**
 * 재사용 가능한 입력창 컴포넌트
 * @param {object} props - 컴포넌트 속성
 * @param {string} props.type - 입력창 타입 (text, password 등)
 * @param {string} props.value - 입력 값
 * @param {function} props.onChange - 값 변경 이벤트 핸들러
 * @param {string} props.placeholder - 힌트 텍스트
 */
function Input({ type = 'text', value, onChange, placeholder, ...rest }) {
  const inputStyle = {
    border: '1px solid #b3c6d7',
    borderRadius: '6px',
    padding: '8px',
    fontSize: '1em',
    marginBottom: '8px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border 0.2s',
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={inputStyle}
      {...rest}
    />
  );
}

export default Input;
