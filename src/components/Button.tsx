import React from 'react'

interface IButtonProps {
  text: string;
}

const Button: React.FC<IButtonProps> = ({text}) => {
    return (
      <button>
        {text}
      </button>
    );
}
export default Button