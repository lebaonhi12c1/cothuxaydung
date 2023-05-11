import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
function Register(props) {
    const [feedback, setFeedback] = useState({
        notification: false,
        message: ''
    })
    const [registerInfo, setRegisterInfo] = useState({
        name: '',
        username: '',
        password: '',
        repassword: '',
    })
    const handleSubmit = async () => {
        if (registerInfo.password === registerInfo.repassword) {
            try {
                const res = await fetch(`http://localhost:8080/user/create`, {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: registerInfo.name,
                        username: registerInfo.username,
                        password: registerInfo.password
                    })
                })
                const data = await res.json()
                console.log(data)
                setFeedback({ notification: true, message: 'Register success!' })
            } catch (error) {
                setFeedback({ notification: true, message: error.toString() })
                console.log(error)
            }
        }
        else {
            setFeedback({ notification: true, message: 'Password does not match!' })
        }
    }
    useEffect(() => {
        const notification = setTimeout(() => {
            feedback.notification && setFeedback({ ...feedback, notification: false })
        }, 2000);
        return () => clearTimeout(notification)
    }, [feedback.notification])
    console.log(registerInfo)
    return (
        <div className='relative z-10  '>
            <img src="https://i.pinimg.com/564x/a4/5b/0d/a45b0d2ef141863a4ff5ba03e56fdca5.jpg" className="h-screen w-screen object-cover filter blur-sm  " />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className='flex flex-col   absolute inset-0  items-center justify-center   '>
                <div className='text-[24px] font-bold text-gray-700'>Đăng ký</div>
                <form action="#" className="bg-white opacity-80 flex flex-col gap-4 w-[25%]  border border-gray-600 p-3 rounded-lg ">
                    <div className="flex flex-col gap-2">
                        <label htmlFor={'name'} className="">
                            Tên ngưởi dùng:
                        </label>
                        <input type={'text'} name={'name'} placeholder={'Enter your content...'} spellCheck={false} className='p-2 border border-gray-600 rounded-sm  bg-transparent' onChange={e => setRegisterInfo({ ...registerInfo, name: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor={'username'} className="">
                            Tên đăng nhập:
                        </label>
                        <input type={'text'} name={'username'} placeholder={'Enter your content...'} spellCheck={false} className='p-2 border border-gray-600 rounded-sm  bg-transparent' onChange={e => setRegisterInfo({ ...registerInfo, username: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor={'password'} className="">
                            Mật khẩu:
                        </label>
                        <input type={'password'} name={'password'} placeholder={'Enter your content...'} spellCheck={false} className='p-2 border border-gray-600 rounded-sm  bg-transparent' onChange={e => setRegisterInfo({ ...registerInfo, password: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor={'repassword'} className="">
                            Nhập lại mật khẩu:
                        </label>
                        <input type={'password'} name={'repassword'} placeholder={'Enter your content...'} spellCheck={false} className='p-2 border border-gray-600 rounded-sm  bg-transparent' onChange={e => setRegisterInfo({ ...registerInfo, repassword: e.target.value })}
                        />
                    </div>
                    <div className='p-2 text-center bg-gradient-to-r from-blue-900 to-cyan-500 text-white rounded-md  duration-200 cursor-pointer  active:scale-90 select-none' onClick={handleSubmit}>
                        Đăng ký
                    </div>
                    {feedback.notification && <div className='text-green-500'>{feedback.message}</div>}
                    <div className='flex items-center gap-2 text-[12px] '>
                        <div>Bạn đã có tài khoản ?</div>
                        <Link href={'/login'} className='text-gray-900 hover:underline'>Đăng nhập ngay ?</Link>
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