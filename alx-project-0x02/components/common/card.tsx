import React from "react";
import Link from 'next/link';
const Card: React.FC = () => {

 return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg ">
        <div className="h-[322px] w-[378.56px] bg-gray-200 rounded-t-lg">
        </div>
        <div className="h-[100px] w-[378.56px] bg-white rounded-b-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Card Title</h2>
            <p className="text-gray-600 mb-4">This is a brief description of the card content. It provides an overview of what the card is about.</p>
            <Link href="#" className="text-blue-500 hover:underline">Read More</Link>   
        </div>
    </div>
 );
}
const styles = {
    cardContainer: {
        border: '5px solid #ddd',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px, 0px',
        boxshadow: '0px 2px 4px rgba (0, 0, 0, 0.1)',
        backgroundColor: '#fff'
    },
    title: {
        margin: '0 0 8px 0',
        color: '#333'
  },
  content: {
    margin: '0',
    color: '#666'
  }
};
export default Card;