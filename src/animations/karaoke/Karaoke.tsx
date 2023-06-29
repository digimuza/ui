import React from 'react';

export const KaraokeText = ({
  children,
  activeClassName,
  progress,
  passiveClassName,
  className,
}: {
  children: React.ReactNode;
  progress: number;
  className?: string;
  activeClassName?: string;
  passiveClassName?: string;
}) => {
  const itemsList = React.Children.toArray(children).flatMap((node) => {
    if (typeof node === 'string') return node.split('');
    return node;
  });

  const takeUntil = Math.floor(itemsList.length * progress);
  const active = itemsList.slice(0, takeUntil);
  const passive = itemsList.slice(takeUntil);

  return (
    <span className={className}>
      {active.map((v) => (
        <span className={activeClassName}>{v}</span>
      ))}
      {passive.map((v) => (
        <span className={passiveClassName}>{v}</span>
      ))}
    </span>
  );
};
