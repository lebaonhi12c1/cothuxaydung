import React, { useEffect } from 'react';

function Notification({ message, isOpen }) {

    return (
        isOpen && <div className='flex fixed inset-0 items-center justify-center'>
            <div className='w-[400px] h-[200px] flex items-center justify-center gap-4 bg-black/50 text-white rounded-sm'>
                <img src="https://img.freepik.com/free-photo/check-mark-correct-approved-icon-symbol-white-background-3d-illustration_56104-1545.jpg?w=900&t=st=1683117352~exp=1683117952~hmac=c208d19123612f0b8c619741e37df47a8a2e5d2e86047af55155dacc746e69ff" alt="" className='w-[50px] h-[50px] rounded-full object-cover' />
                <span>{message}</span>
            </div>

        </div>
    );
}

export default Notification;