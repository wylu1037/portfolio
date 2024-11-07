interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default Toast;
