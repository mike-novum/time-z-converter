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
    <div
      style={{
        width: "300px",
        height: "300px",
        border: "6px solid #333",
        borderRadius: "50%",
        position: "relative",
        margin: "2rem auto",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {numbers.map((num) => {
        const angle = (num % 12) * 30;
        const rad = (angle * Math.PI) / 180;
        const radius = 120;
        const x = Math.sin(rad) * radius;
        const y = -Math.cos(rad) * radius;

        return (
          <div
            key={num}
            style={{
              position: "absolute",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#333",
              width: "24px",
              height: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: `translate(${x}px, ${y}px)`,
              userSelect: "none",
            }}
          >
            {num}
          </div>
        );
      })}

      {/* Hour arrow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "6px",
          height: "60px",
          backgroundColor: "#333",
          transformOrigin: "bottom center",
          transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
          borderRadius: "4px",
          zIndex: 2,
        }}
      ></div>

      {/* Minute arrow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "4px",
          height: "100px",
          backgroundColor: "#666",
          transformOrigin: "bottom center",
          transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
          borderRadius: "4px",
          zIndex: 1,
        }}
      ></div>

      {/* Центральная точка */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "12px",
          height: "12px",
          backgroundColor: "#000",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
        }}
      ></div>
    </div>
  );
}
