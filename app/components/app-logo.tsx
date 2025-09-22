import { useState, useCallback } from "react";
import { Link } from "react-router";

export function AppLogo({ to }: { to: string }) {
  const [logoError, setLogoError] = useState(false);

  return (
    <Link
      to={to}
      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
        {!logoError ? (
          <img
            src="/assets/images/logo.webp"
            alt="Codeverd Logo"
            loading="lazy"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">C</span>
          </div>
        )}
      </div>
      <span className="text-lg font-bold text-foreground">Codeverd</span>
    </Link>
  );
}
