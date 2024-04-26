import React from 'react';

export default function Faq() {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-600">
                        Our aim is to make reading affordable. Raising a reader isn’t easy, and we’re here to help parents by providing access to a wide variety of curated, age-appropriate books at affordable prices.
                    </p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is the purpose of DoodleDreams?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                Our aim is to make reading affordable. Raising a reader is worthwhile but not easy. We are here to help parents by providing access to a wide variety of curated, age-appropriate books at affordable prices.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is a Pre-loved Book?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                A pre-loved book is a pre-owned, used book in good condition. Our pre-loved books also include surplus books we acquire from the UK & USA.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What's Your Quality Promise?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                We sell both new and gently used books. All used books go through thorough quality checks before being listed on our website. Our new books are, of course, brand new! The pictures of the books on our website are ones that we shoot ourselves. Should you have any concerns, we stand by our promise. Reach out to us, and we will be happy to help.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How is it Possible for You to Sell at These Prices?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                Our effort is to make reading affordable. We pass on discounts that we get from our scale and efficiencies to you.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Where do You Source These Books From?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                We source our books from the UK, US & Canada.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What Payment Methods are Accepted?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                We accept all kinds of debit, credit cards, net transfer & UPI payment gateways. We also offer Cash on Delivery (COD) option.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Do You Ship Across India?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                Yes, we ship books across India.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Is There Free Shipping?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                We offer free shipping for orders above 599/-. Otherwise, a shipping fee of 60/- is applied. No additional COD charges.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Will I Get an Invoice for the Book Purchased?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                Yes, we will share the invoice via email. Should you need a physical copy, please write to us at info@bookzoo.in
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is the Return & Exchange Policy?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                Should you wish to return or exchange the book(s) for any reason, we will need to know within 2 days of you receiving the book(s). The book(s) that you intend to return or exchange will need to be in the same condition that it was sent in. Please write to us at info@bookzoo.infor return or exchange requests.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How do I Check the Order Status?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                Once an order is placed and dispatched, we will share the tracking details with you via email and/or SMS.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How Long Will it Take for Order to be Delivered?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                We will dispatch your order within 3 working days. Once dispatched, your order will reach you within a week’s time.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What if I am Not Available to Receive My Order?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                We will dispatch your order within 3 working days. If you would like to receive the order at a later date, please write to us at info@bookzoo.in Our delivery partner would return the order to us if undelivered. We will make another attempt to deliver once we hear from you.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How do I Cancel My Order?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                Orders can be canceled until they are dispatched, which normally takes up to 3 working days. If you have created your account with BookZoo, you will have an option to cancel the order in your account. If you don't have an account, please write to us at info@bookzoo.in
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Do I Need an Account to Place an Order?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                No, you can order with us without creating an account. If you do create an account, rest assured that your data is safe with us. Please refer to our Privacy Policy for more details.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Can I Delete My Account?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                Yes, at any point in time.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
}
