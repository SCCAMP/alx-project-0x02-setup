import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-blue-500 mb-4">{email}</p>
      <div className="text-gray-600">
         <p>{address.street}</p>
         <p>{address.city}, {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;