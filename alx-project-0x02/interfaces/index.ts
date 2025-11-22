export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  label: string;
  onClick?: () => void;
}
// Keep CardProps here too
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
// + previous interfaces
export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}