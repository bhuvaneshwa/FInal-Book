import React, { useState } from 'react';

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
            // Handle order tracking submission
            console.log('Tracking order: ', orderNumber, emailOrPhone);
        } else {
            if (!trackingNumber.trim()) {
                alert('Tracking Number is required');
                return;
            }
            // Handle tracking number submission
            console.log('Tracking number: ', trackingNumber);
        }
    };

    return (
        <div className="w-3/5 mx-auto">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-xl font-bold mb-4">Track Your Order</h1>
                <div>
                    <div className="mb-4">
                        <div id="track123_text_above" className="track123_tracking_above"></div>
                    </div>
                    <div>
                        <div className="flex mb-4">
                            {/* <button
                                className={`mr-2 p-2 flex-1 text-center ${activeTab === 'order' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => handleTabChange('order')}
                            >
                                Order Number
                            </button> */}
                            <button
                                className={`ml-2 p-2 flex-1 text-center ${activeTab === 'tracking' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => handleTabChange('tracking')}
                            >
                                Tracking Number
                            </button>
                        </div>
                        <div className="mb-4">
                            <div className="mb-4">
                                <div className="track123_input_container">
                                    <label htmlFor="track123_order_number" className="track123_form_label">Order Number</label>
                                    <br></br>
                                    <input
                                        id="track123_order_number"
                                        type="text"
                                        placeholder=""
                                        className={`track123_form_input track123_form_field track123_form_input1 form__input ${activeTab === 'tracking' ? 'border-2 rounded-xl bg-gray-300 text-black border-cyan-500' : ''}`}
                                        value={orderNumber}
                                        onChange={handleOrderNumberChange}
                                    />
                                </div>
                                <div className="track123_input_container">
                                    <label htmlFor="track123_order_email" className="track123_form_label">Email or Phone Number</label>
                                    <br></br>
                                    <input
                                        id="track123_order_email"
                                        type="text"
                                        placeholder=""
                                        className={`track123_form_input track123_form_field track123_form_input2 form__input ${activeTab === 'tracking' ? 'border-2 rounded-xl bg-gray-300 text-black border-cyan-500' : ''}`}
                                        value={emailOrPhone}
                                        onChange={handleEmailOrPhoneChange}
                                    />

                                </div>
                            </div>
                            <button
                                type="button"
                                id="track123_submit_button"
                                className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                                onClick={handleSubmit}
                            >
                                Track
                            </button>
                        </div>
                    </div>
                    {activeTab === 'order' && !orderNumber.trim() && !emailOrPhone.trim() && (
                        <div className="mb-4">
                            <div className="track123_tracking_line_center">
                                <div className="track123_tracking_line"></div>

                                <div className="track123_tracking_line"></div>
                            </div>
                        </div>
                    )}
                    {/* <div className={`mb-4 ${activeTab === 'order' ? 'hidden' : ''}`}>
                        <div className="track123_input_container">
                            <label htmlFor="track123_tracking_number" className="track123_form_label">Tracking Number</label>
                            <input
                                id="track123_tracking_number"
                                type="text"
                                placeholder=""
                                className={`track123_form_input track123_form_field track123_form_input1 form__input ${activeTab === 'order' ? 'border border-gray-300' : ''}`}
                                value={trackingNumber}
                                onChange={handleTrackingNumberChange}
                            />
                            {activeTab === 'tracking' && !trackingNumber.trim() && (
                                <div className="track123_form_error">
                                    Tracking Number is required
                                </div>
                            )}
                        </div>
                        <button
                            type="button"
                            id="track123_submit_button"
                            className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                            onClick={handleSubmit}
                        >
                            Track
                        </button>
                    </div> */}
                </div>
                <div className="mb-4">
                    <div id="track123_text_below" className="track123_tracking_below"></div>
                </div>
            </div>
        </div>
    );
}

export default TrackOrder;
