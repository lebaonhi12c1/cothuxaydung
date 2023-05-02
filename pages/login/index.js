import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='relative z-10  '>
      <img src="https://i.pinimg.com/564x/cd/1f/dd/cd1fdd6d1657e256142e68232c834a63.jpg" class="h-screen w-screen object-cover filter blur-sm  " />
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div className='flex flex-col   absolute inset-0  items-center justify-center   '>
        <div className='text-[24px] font-bold text-gray-700'>Đăng nhập</div>
        <form action="#" className=" bg-white opacity-80 flex flex-col gap-4 w-[25%]  border border-gray-600 p-3 rounded-lg" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="username"
              className="  "
            >
              Tên đăng nhập
            </label>
            <div className="flex flex-col gap-2">
              <input
                id="username"
                name="username"
                type="text"
                placeholder='Nhập tên đăng nhập của bạn...'

                autoComplete="username"
                required
                className="p-2 border border-gray-600 rounded-sm  bg-transparent text-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className=""
            >
              Mật khẩu
            </label>
            <div className="flex flex-col gap-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder='Nhập mật khẩu của bạn...'
                autoComplete="current-password"
                required
                className="p-2 border border-gray-600 rounded-sm  bg-transparent text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

         
          <div className='p-2 text-center bg-gradient-to-r from-blue-900 to-cyan-500 text-white rounded-md  duration-200 cursor-pointer  active:scale-90 select-none'>
                        Đăng nhập
                    </div>
                    <div className='flex items-center gap-2 text-[12px] '>
                        <div>Bạn chưa có tài khoản ?</div>
                        <Link href={'/auth/login'} className=' hover:underline'>Đăng ký ngay ?</Link>
                    </div>
                    <div className='flex flex-col gap-4 items-center'>
                        <div className='text-[14px] text-gray-900 '>Đăng nhập để sử dụng</div>
                        <button className='bg-gradient-to-r from-blue-600 to-cyan-400 text-white w-full p-2 rounded-md flex items-center gap-2 justify-center hover:brightness-110 active:scale-90 duration-200'>
                            <img src="https://freepngimg.com/thumb/facebook/62588-and-icons-facebook-computer-black-logo-white.png" alt="" className='w-[25px] object-cover rounded-lg invert' />
                            <span>Đăng nhập với Facebook</span>
                        </button>
                        <button className='bg-gradient-to-r from-red-600 to-orange-400 text-white w-full p-2 rounded-md flex items-center gap-2 justify-center hover:brightness-110 active:scale-90 duration-200'>
                            <img src="https://static-00.iconduck.com/assets.00/logo-google-icon-252x256-k4f340gy.png" alt="" className='w-[20px] object-cover rounded-lg invert' />
                            <span>Đăng nhập với Google</span>
                        </button>
                    </div>
        </form>

      </div>
    </div>
  );
}

export default Login;
