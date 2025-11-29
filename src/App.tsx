import { useRef, useState, type ChangeEventHandler } from "react";
import { Clock } from "./Clock";
import { getTimePhrases } from "./wordForm";
import * as layoutStyles from "./styles/layouts.css";

import { motion } from "motion/react";
import * as ui from "./styles/ui.css";
import * as imagesStyles from "./styles/images.css";
import * as clockStyles from "./styles/clock.css";

export default function App() {
  const [time, setTime] = useState("18:45");
  const targetRef = useRef<HTMLDivElement>(null);

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTime(e.target.value);
  };

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className={layoutStyles.contentBody}>
        <motion.section
          className={layoutStyles.startSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
        >
          <div>
            <h1>Конвертор времени</h1>
            <p className={ui.secondaryText}>
              Не понимаешь миллениалов?
              <br />
              Твой батя говорит ребусами когда спрашиваешь у него время?
              <br /> Мы поможем тебе с этим.
            </p>
            <button onClick={scrollToTarget} className={ui.button}>
              Ближе к делу
            </button>
          </div>
          <motion.img
            className={imagesStyles.startImage}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            src="/images/cat-clock-meme.png"
            alt="clock cat meme"
          />
        </motion.section>
        <motion.section
          className={layoutStyles.infoSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.7,
          }}
        >
          <div className={`${layoutStyles.infoCard} ${layoutStyles.glass}`}>
            <p>
              Этот конвертор поможет тебе обсуждать время с миллениалами и
              бумерами, и выкупать за стрелки на генеральских котлах
            </p>
          </div>
          <div className={`${layoutStyles.infoCard} ${layoutStyles.glass}`}>
            <p>
              Введи часы и минуты и ультани коронной фразой в компании
              стрелкоебов. Слови респекты от своего бати или деда.
            </p>
          </div>
        </motion.section>
        <motion.div
          className={`${layoutStyles.converterSection} ${layoutStyles.glass}`}
          ref={targetRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
        >
          <input
            className={ui.timeInput}
            type="time"
            value={time}
            onChange={handleTimeChange}
          />
          <div>
            <Clock time={time} />
          </div>
          <div>
            <p className={clockStyles.timePhraseText}>
              {getTimePhrases(time).join(", ")}
            </p>
          </div>
        </motion.div>
      </main>
      <footer className={layoutStyles.footer}>
        <p>© mikenovum {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
