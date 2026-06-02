export function FuturesChangeText({ value }: { value: string }) {
  const isPositive = value.startsWith('+');

  return (
    <span className={isPositive ? 'text-emerald-400' : 'text-red-400'}>
      {value}
    </span>
  );
}
