import React from 'react'
import Admin from '../Admin'
import statisticscards from './statisticscards';
export default function Home() {
    return (
        <><div className="flex-1 p-4 overflow-y-auto">

            <h2 className="text-2xl font-semibold">Data</h2>
            <div className="grid grid-cols-2 gap-4">
                {statisticscards.map((card, index) => (
                    <div
                        key={index}
                        className={`p-4 bg-${card.color}-200 rounded-lg shadow-md`}
                    >
                        <card.icon className="w-8 h-8 text-gray-800" />
                        <div className="mt-2">
                            <p className="text-sm text-gray-600">{card.title}</p>
                            <p className="text-lg font-semibold">{card.value}</p>
                        </div>
                        <div className={`mt-2 text-sm ${card.footer.color}`}>
                            <span>{card.footer.value}</span> {card.footer.label}
                        </div>
                    </div>
                ))}
            </div></div></>
    )
}
