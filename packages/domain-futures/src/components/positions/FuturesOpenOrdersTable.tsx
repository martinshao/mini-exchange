import type { FuturesOpenOrder } from '../../types';

export function FuturesOpenOrdersTable({
  orders
}: {
  orders: FuturesOpenOrder[];
}) {
  return (
    <table className="w-full min-w-[760px] text-left text-xs">
      <thead className="text-slate-500">
        <tr>
          <th className="px-4 py-3 font-medium">合约</th>
          <th className="px-4 py-3 font-medium">方向</th>
          <th className="px-4 py-3 font-medium">类型</th>
          <th className="px-4 py-3 font-medium">价格</th>
          <th className="px-4 py-3 font-medium">数量</th>
          <th className="px-4 py-3 font-medium">成交</th>
          <th className="px-4 py-3 font-medium">只减仓</th>
          <th className="px-4 py-3 font-medium">状态</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800 text-slate-300">
        {orders.map((order) => (
          <tr key={`${order.symbol}-${order.price}`}>
            <td className="px-4 py-3 font-semibold text-slate-100">
              {order.symbol}
            </td>
            <td className="px-4 py-3">
              {order.side === 'long' ? '买入/做多' : '卖出/做空'}
            </td>
            <td className="px-4 py-3">{order.orderType}</td>
            <td className="px-4 py-3">{order.price}</td>
            <td className="px-4 py-3">{order.quantity}</td>
            <td className="px-4 py-3">{order.filled}</td>
            <td className="px-4 py-3">{order.reduceOnly ? '是' : '否'}</td>
            <td className="px-4 py-3">{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
