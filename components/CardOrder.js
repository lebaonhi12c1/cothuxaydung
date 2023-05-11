import React from 'react';

function CardOrder({ item }) {
    const getBgColor = value => {
        switch (value) {
            case 'pending':

                return 'bg-slate-400'
            case 'delivering':

                return 'bg-yellow-500'
            case 'completed':

                return 'bg-green-400'
            case 'canceled':

                return 'bg-red-400'

            default:
                break;
        }
    }
    return (
        <div className="" key={item._id}>
            <div className="grid grid-cols-3 border border-slate-400 rounded-sm p-4">
                <div className="flex flex-col gap-4">
                    {item.productid.map(item => (
                        <div className="flex gap-4" key={item?._id}>
                            <img src={item?.image} alt="" className="w-[100px] h-[80px] object-cover" />
                            <div className="flex flex-col  gap-2">
                                <span className="">Name: {item.name}</span>
                                <span className="">Quantity: {item.quantity}</span>
                                <span className="">Category: {item?.categoryid?.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-[24px] text-rose-500">Sumary: {item.sumary}</span>
                    <span className="text-orange-500">Vat: {item.vat}</span>
                    <span className="text-blue-500">Debt: {item.debt}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <div>Status:</div>
                    <div className={`py-2 h-fit text-center px-4 rounded-sm text-white  w-fit flex flex-col ${getBgColor(item.status)}`}>
                        {item.status}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardOrder;