import React from 'react';

/**
 * 재사용 가능한 버튼 컴포넌트
 * @param {object} props - 컴포넌트 속성
 * @param {string} props.type - 버튼 타입 (primary, danger, default)
 * @param {function} props.onClick - 클릭 이벤트 핸들러
 * @param {boolean} props.disabled - 비활성화 여부
 * @param {React.ReactNode} props.children - 버튼 내용
 */
function Button({ type = 'primary', onClick, disabled, children, ...rest }) {
  const getButtonStyle = () => {
    switch (type) {
      case 'primary':
        return {
          background: '#1890ff',
          color: '#fff',
        };
      case 'danger':
        return {
          background: '#ff4d4f',
          color: '#fff',
        };
      default:
        return {
          background: '#f0f0f0',
          color: '#000',
        };
    }
  };

  const buttonStyle = {
    ...getButtonStyle(),
    border: 'none',
    borderRadius: '6px',
    padding: '7px 18px',
    fontSize: '1em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    marginLeft: '4px',
    transition: 'background 0.2s',
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
