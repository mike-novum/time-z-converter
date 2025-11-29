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
        <section className={layoutStyles.startSection}>
          <div>
            <motion.h1
              initial={{ opacity: 0, translateX: "-50%" }}
              whileInView={{ opacity: 1, translateX: "0%" }}
              transition={{
                duration: 0.4,
              }}
              viewport={{ once: true }}
            >
              Конвертор времени
            </motion.h1>
            <motion.p
              className={ui.secondaryText}
              initial={{ opacity: 0, translateX: "-50%" }}
              whileInView={{ opacity: 1, translateX: "0%" }}
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
              viewport={{ once: true }}
            >
              Не понимаешь миллениалов?
              <br />
              Твой батя говорит ребусами когда спрашиваешь у него время?
              <br /> Мы поможем тебе с этим.
            </motion.p>
            <motion.button
              onClick={scrollToTarget}
              className={ui.button}
              initial={{ opacity: 0, translateX: "-50%" }}
              whileInView={{ opacity: 1, translateX: "0%" }}
              transition={{
                duration: 0.4,
                delay: 0.8,
              }}
              viewport={{ once: true }}
            >
              Ближе к делу
            </motion.button>
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
        </section>
        <motion.section
          className={layoutStyles.infoSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.7,
          }}
          viewport={{ once: true }}
        >
          <div className={layoutStyles.infoSectionLeftCell}>
            <motion.img
              className={imagesStyles.memeImage}
              src="/images/meme1.webp"
              initial={{ opacity: 0, translateX: "-50%" }}
              whileInView={{ opacity: 1, translateX: "0%" }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
            />
          </div>
          <div className={layoutStyles.infoSectionRightCell}>
            <motion.div
              className={`${layoutStyles.infoCard} ${layoutStyles.glass}`}
              initial={{ opacity: 0, translateX: "50%" }}
              whileInView={{ opacity: 1, translateX: "0%" }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
            >
              <p>
                Этот конвертор поможет тебе обсуждать время с миллениалами и
                бумерами, и выкупать за стрелки на генеральских котлах
              </p>
            </motion.div>
          </div>
          <div className={layoutStyles.infoSectionLeftCell}>
            <motion.div
              className={`${layoutStyles.infoCard} ${layoutStyles.glass}`}
              initial={{ opacity: 0, translateX: "-50%" }}
              whileInView={{ opacity: 1, translateX: "0%" }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              viewport={{ once: true }}
            >
              <p>
                Введи часы и минуты и ультани коронной фразой в компании
                стрелкоебов. Слови респекты от своего бати или деда.
              </p>
            </motion.div>
          </div>
          <div className={layoutStyles.infoSectionRightCell}>
            <motion.img
              className={imagesStyles.memeImage}
              src="/images/meme2.webp"
              initial={{ opacity: 0, translateX: "50%" }}
              whileInView={{ opacity: 1, translateX: "0%" }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              viewport={{ once: true }}
            />
          </div>
          <div className={layoutStyles.infoSectionLine} />
        </motion.section>
        <motion.div
          className={`${layoutStyles.converterSection} ${layoutStyles.glass}`}
          ref={targetRef}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
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
