import { motion } from "motion/react";
import * as styles from "./styles/clock.css";

interface ClockProps {
  time: string;
}

export function Clock({ time }: ClockProps) {
  const [hours, minutes] = time.split(":").map(Number);

  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  if (!time) {
    return <div>Введите время</div>;
  }

  return (
    <div className={styles.container}>
      {numbers.map((num) => {
        const angle = (num % 12) * 30;
        const rad = (angle * Math.PI) / 180;
        const radius = 120;
        const x = Math.sin(rad) * radius;
        const y = -Math.cos(rad) * radius;

        return (
          <div
            key={num}
            className={styles.hourNumber}
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {num}
          </div>
        );
      })}
      <motion.div
        transition={{
          duration: 0.5,
        }}
        animate={{ rotate: hourAngle, translateX: "-50%", translateY: "-100%" }}
        className={styles.hourArrow}
      />
      <motion.div
        transition={{
          duration: 0.5,
        }}
        animate={{
          rotate: minuteAngle,
          translateX: "-50%",
          translateY: "-100%",
        }}
        className={styles.minuteArrow}
      />
      <div className={styles.centralDot} />
    </div>
  );
}
