import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'

const recentOrderData = [
	{
		id: '1',
		Stablecoin: 'USD Coin(USDC)',
		customer_id: '$4.28B',
		seven_change: '-5.80%',
		thiry_change: '-7.39%',
		Supply: '$25.01',
		tvl: '0.1713',
		last_update: '1 minute ago'
	},
	{
		id: '2',
		Stablecoin: 'Tether (USDT)',
		customer_id: '$2.01B',
		seven_change: '+3.98%',
		thiry_change: '+2.70%',
		Supply: '$39.21B',
		tvl: '0.0513',
		last_update: '1 minute ago'
	},
	{
		id: '3',
		Stablecoin: 'Dai (DAI)',
		customer_id: '$1.14B',
		seven_change: '-3.06%',
		thiry_change: '-10.47%',
		Supply: '$4.23B',
		tvl: '0.2703',
		last_update: '1 minute ago'
	},
	{
		id: '4',
		Stablecoin: 'USD Coin(USDC)',
		customer_id: '$4.28B',
		seven_change: '-5.80%',
		thiry_change: '-7.39%',
		Supply: '$25.01',
		tvl: 'PLACED',
		last_update: '1 minute ago'
	},
	{
		id: '5',
		Stablecoin: 'USD Coin(USDC)',
		customer_id: '$4.28B',
		seven_change: '-5.80%',
		thiry_change: '-7.39%',
		Supply: '$25.01',
		tvl: 'PLACED',
		last_update: '1 minute ago'
	},
	{
		id: '6',
		Stablecoin: 'USD Coin(USDC)',
		customer_id: '$4.28B',
		seven_change: '-5.80%',
		thiry_change: '-7.39%',
		Supply: '$25.01',
		tvl: 'PLACED',
		last_update: '1 minute ago'
	},
	{
		id: '7',
		Stablecoin: 'USD Coin(USDC)',
		customer_id: '$4.28B',
		seven_change: '-5.80%',
		thiry_change: '-7.39%',
		Supply: '$25.01',
		tvl: 'PLACED',
		last_update: '1 minute ago'
	},
	{
		id: '8',
		Stablecoin: 'USD Coin(USDC)',
		customer_id: '$4.28B',
		seven_change: '-5.80%',
		thiry_change: '-7.39%',
		Supply: '$25.01',
		tvl: 'PLACED',
		last_update: '1 minute ago'
	},
	
]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Top 10 stablecoin$</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Stablecoin</th>
							<th>TVL</th>
							<th>7D Change</th>
							<th>30D Change</th>
							<th>Supply</th>
							<th>TVL/Supply</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								<td>{order.id}</td>
								<td>
									<Link to={`/stablecoin${order.Stablecoin}`}>#{order.Stablecoin}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.seven_change}`}>{order.seven_change}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.thiry_change}`}>{order.thiry_change}</Link>
								</td>								
								<td>{order.Supply}</td>
								<td>{order.last_update}</td>
								<td>{order.tvl}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
