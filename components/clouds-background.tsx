export function CloudsBackground() {
  // Nubes reacomodadas a los extremos para dejar el centro (contenido) libre y evitar que choquen
  const clouds = [
    // --- Lado Izquierdo ---
    { id: 1, type: "large", top: "1%", left: "-5%", opacity: 0.15, scale: 0.9 },
    { id: 2, type: "medium", top: "27%", left: "2%", opacity: 0.2, scale: 1.1 },
    { id: 3, type: "small", top: "55%", left: "-2%", opacity: 0.18, scale: 1 },
    { id: 4, type: "large", top: "65%", left: "5%", opacity: 0.15, scale: 0.8 },
    { id: 5, type: "medium", top: "85%", left: "-8%", opacity: 0.22, scale: 1.2 },
    { id: 13, type: "large", top: "13%", left: "-10%", opacity: 0.12, scale: 1.5 }, // Nube gigante de fondo

    // --- Lado Derecho ---
    { id: 6, type: "medium", top: "8%", right: "-2%", opacity: 0.18, scale: 1 },
    { id: 7, type: "large", top: "30%", right: "5%", opacity: 0.15, scale: 0.85 },
    { id: 8, type: "small", top: "50%", right: "-5%", opacity: 0.2, scale: 1.2 },
    { id: 9, type: "medium", top: "70%", right: "2%", opacity: 0.18, scale: 0.9 },
    { id: 10, type: "large", top: "90%", right: "-4%", opacity: 0.15, scale: 1.1 },
    { id: 14, type: "large", top: "75%", right: "-10%", opacity: 0.12, scale: 1.5 }, // Nube gigante de fondo

    // --- Detalles arriba y abajo (centro pero muy al borde) ---
    { id: 11, type: "small", top: "-2%", left: "30%", opacity: 0.15, scale: 1.3 },
    { id: 12, type: "small", bottom: "-2%", right: "30%", opacity: 0.15, scale: 1.4 },
  ];

  const renderCloudShape = (type: string) => {
    switch (type) {
      case "large":
        return (
          <svg viewBox="0 0 400 200" fill="none" className="w-96 h-48">
            <ellipse cx="300" cy="120" rx="100" ry="60" fill="#00AE44" />
            <ellipse cx="220" cy="130" rx="80" ry="50" fill="#00AE44" />
            <ellipse cx="340" cy="140" rx="60" ry="40" fill="#00AE44" />
            <ellipse cx="150" cy="140" rx="70" ry="45" fill="#00AE44" />
          </svg>
        );
      case "medium":
        return (
          <svg viewBox="0 0 300 150" fill="none" className="w-72 h-36">
            <ellipse cx="150" cy="90" rx="80" ry="50" fill="#00AE44" />
            <ellipse cx="80" cy="100" rx="60" ry="40" fill="#00AE44" />
            <ellipse cx="210" cy="100" rx="50" ry="35" fill="#00AE44" />
          </svg>
        );
      case "small":
      default:
        return (
          <svg viewBox="0 0 200 100" fill="none" className="w-48 h-24">
            <ellipse cx="100" cy="60" rx="60" ry="35" fill="#00AE44" />
            <ellipse cx="50" cy="65" rx="40" ry="25" fill="#00AE44" />
            <ellipse cx="140" cy="65" rx="35" ry="25" fill="#00AE44" />
          </svg>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute"
          style={{
            top: cloud.top,
            bottom: cloud.bottom,
            left: cloud.left,
            right: cloud.right,
            opacity: cloud.opacity,
            transform: `scale(${cloud.scale})`,
          }}
        >
          {renderCloudShape(cloud.type)}
        </div>
      ))}
    </div>
  );
}