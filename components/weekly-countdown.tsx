"use client";

import { useEffect, useState } from "react";

function getNextMondayMidnight(): number {
  const now = new Date();
  const next = new Date(now);
  // Days until next Monday (1 = Monday)
  const daysUntilMonday = (1 + 7 - now.getDay()) % 7 || 7;
  next.setDate(now.getDate() + daysUntilMonday);
  next.setHours(0, 0, 0, 0);
  return next.getTime();
}

function formatRemaining(ms: number) {
  if (ms < 0) ms = 0;
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export function WeeklyCountdown() {
  const [target, setTarget] = useState<number | null>(null);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const t = getNextMondayMidnight();
    setTarget(t);
    const tick = () => setTime(formatRemaining(t - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!target) {
    return (
      <section className="py-12 bg-[var(--color-bg-elev)] border-y border-[var(--color-line)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-[80px]" />
      </section>
    );
  }

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Min" },
    { value: time.seconds, label: "Sec" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[var(--color-bg-elev)] border-y border-[var(--color-line)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="eyebrow text-[var(--color-saffron)] mb-2">
              ⟢ Next Refresh
            </p>
            <p className="display text-[1.5rem] lg:text-[2rem] leading-tight">
              New deals drop Monday morning.
            </p>
          </div>
          <div className="flex items-end gap-3 lg:gap-5">
            {units.map((u) => (
              <div
                key={u.label}
                className="flex flex-col items-center bg-[var(--color-bg)] border border-[var(--color-line)] rounded-sm w-16 lg:w-20 py-3"
              >
                <span className="price display text-[2rem] lg:text-[2.5rem] leading-none text-[var(--color-saffron)] tabular-nums">
                  {String(u.value).padStart(2, "0")}
                </span>
                <span className="eyebrow text-[9px] text-[var(--color-ink-muted)] mt-1.5">
                  {u.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
