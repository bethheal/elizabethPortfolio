import React from 'react';
import { reviewImg } from '../../assets';

const AvatarReview = () => {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
      <img
        className="w-15 h-15 border-3 border-white rounded-full dark:border-gray-800"
        src={reviewImg}
        alt=""
      />
      <img
        className="w-15 h-15 border-3 border-white rounded-full dark:border-gray-800"
        src={reviewImg}
        alt=""
      />
      <img
        className="w-15 h-15 border-3 border-white rounded-full dark:border-gray-800"
        src={reviewImg}
        alt=""
      />
      <img
        className="w-15 h-15 border-3 border-white rounded-full dark:border-gray-800"
        src={reviewImg}
        alt=""
      />
    </div>
  );
};

export default AvatarReview;
