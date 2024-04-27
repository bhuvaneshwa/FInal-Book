import { useState } from 'react';

function TrackOrder() {
    const [orderNumber, setOrderNumber] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [trackingNumber, setTrackingNumber] = useState('');
    const [activeTab, setActiveTab] = useState('order');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleOrderNumberChange = (event) => {
        setOrderNumber(event.target.value);
    };

    const handleEmailOrPhoneChange = (event) => {
        setEmailOrPhone(event.target.value);
    };

    const handleTrackingNumberChange = (event) => {
        setTrackingNumber(event.target.value);
    };

    const handleSubmit = () => {
        if (activeTab === 'order') {
            if (!orderNumber.trim() || !emailOrPhone.trim()) {
                alert('Order Number and Email or Phone Number are required');
                return;
            }
            console.log('Tracking order: ', orderNumber, emailOrPhone);
        } else {
            if (!trackingNumber.trim()) {
                alert('Tracking Number is required');
                return;
            }
            console.log('Tracking number: ', trackingNumber);
        }
    };

    return (
        <div className="container mx-auto px-4 lg:px-0 lg:pt-5 ">
            <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full lg:w-3/5 mx-auto bg-gray-100">
                <h1 className="text-xl font-bold mb-4 text-blue-950">Track Your Order</h1>
                <div className="flex flex-col lg:flex-row">
                    <div className="mb-4 w-full lg:w-1/2">
                        <button
                            className={`w-full p-2 text-center ${activeTab === 'order' ? 'bg-blue-950 text-white' : 'bg-gray-200'}`}
                            onClick={() => handleTabChange('order')}
                        >
                            Order Number
                        </button>
                    </div>
                    <div className="mb-4 w-full lg:w-1/2">
                        <button
                            className={`w-full p-2 text-center ${activeTab === 'tracking' ? 'bg-blue-950 text-white' : 'bg-gray-200'}`}
                            onClick={() => handleTabChange('tracking')}
                        >
                            Tracking Number
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="orderNumber" className="block text-gray-700 lg:mb-2">Order Number</label>
                    <input
                        id="orderNumber"
                        type="text"
                        className={`w-full border border-blue-950 rounded py-2 px-3 outline-none transition duration-200 ${activeTab === 'tracking' ? 'bg-white' : ''}`}
                        value={orderNumber}
                        onChange={handleOrderNumberChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="emailOrPhone" className="block text-gray-700 lg:mb-2">Email or Phone Number</label>
                    <input
                        id="emailOrPhone"
                        type="text"
                        className={`w-full border border-blue-950 rounded py-2 px-3 outline-none transition duration-200 ${activeTab === 'tracking' ? 'bg-white' : ''}`}
                        value={emailOrPhone}
                        onChange={handleEmailOrPhoneChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="trackingNumber" className="block text-gray-700 lg:mb-2">Tracking Number</label>
                    <input
                        id="trackingNumber"
                        type="text"
                        className={`w-full border border-blue-950 rounded py-2 px-3 outline-none transition duration-200 ${activeTab === 'order' ? 'bg-white' : ''}`}
                        value={trackingNumber}
                        onChange={handleTrackingNumberChange}
                    />
                </div>
                <button
                    type="button"
                    className="w-full p-2 lg:mt-5 bg-blue-950 hover:bg-blue-700 text-white font-bold rounded"
                    onClick={handleSubmit}
                >
                    Track Now
                </button>
            </div>
        </div>
    );
}

export default TrackOrder;
