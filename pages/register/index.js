import Link from 'next/link';
import React from 'react';
import { v4 as uuidv4 } from 'uuid'
function Register(props) {
    const controls = [
        {
            type: 'text',
            label: 'Tên tài khoản',
            placeholder: 'Nhập tên người dùng...',

        },
        {
            type: 'password',
            label: 'Mật khẩu',
            placeholder: 'Nhập mật khẩu của bạn...',
        },
        {
            type: 'password',
            label: 'Nhập lại mật khẩu',
            placeholder: 'Nhập mật khẩu trước của bạn...',
        },
    ]
    return (
        <div className='relative z-10  '>
            <img src="https://i.pinimg.com/564x/a4/5b/0d/a45b0d2ef141863a4ff5ba03e56fdca5.jpg" class="h-screen w-screen object-cover filter blur-sm  " />
            <div class="absolute inset-0 bg-black opacity-30"></div>
            <div className='flex flex-col   absolute inset-0  items-center justify-center   '>
                <div className='text-[24px] font-bold text-gray-700'>Đăng ký</div>
                <form action="#" className="bg-white opacity-80 flex flex-col gap-4 w-[25%]  border border-gray-600 p-3 rounded-lg ">
                    {controls.map(item => {
                        return (
                            <div className="flex flex-col gap-2" key={uuidv4()}>
                                <label htmlFor={item.type} className="">
                                    {item.label}
                                </label>
                                <input type={item.type} name={item.name} placeholder={item.placeholder} spellCheck={false} className='p-2 border border-gray-600 rounded-sm  bg-transparent  ' />
                            </div>
                        )
                    })}

                    <div className='p-2 text-center bg-gradient-to-r from-blue-900 to-cyan-500 text-white rounded-md  duration-200 cursor-pointer  active:scale-90 select-none'>
                        Đăng ký
                    </div>
                    <div className='flex items-center gap-2 text-[12px] '>
                        <div>Bạn đã có tài khoản ?</div>
                        <Link href={'/auth/login'} className='text-gray-900 hover:underline'>Đăng nhập ngay ?</Link>
                    </div>
                    <div className='flex flex-col gap-4 items-center'>
                        <div className='text-[14px] text-gray-4900 '>Đăng ký để sử dụng</div>
                        <button className='bg-gradient-to-r from-blue-600 to-cyan-400 text-white w-full p-2 rounded-md flex items-center gap-2 justify-center hover:brightness-110 active:scale-90 duration-200'>
                            <img src="https://freepngimg.com/thumb/facebook/62588-and-icons-facebook-computer-black-logo-white.png" alt="" className='w-[25px] object-cover rounded-lg invert' />
                            <span>Đăng ký với Facebook</span>
                        </button>
                        <button className='bg-gradient-to-r from-red-600 to-orange-400 text-white w-full p-2 rounded-md flex items-center gap-2 justify-center hover:brightness-110 active:scale-90 duration-200'>
                            <img src="https://static-00.iconduck.com/assets.00/logo-google-icon-252x256-k4f340gy.png" alt="" className='w-[20px] object-cover rounded-lg invert' />
                            <span>Đăng ký với Google</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;