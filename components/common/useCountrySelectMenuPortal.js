import { useEffect, useState } from "react";

/**
 * Returns document.body after mount so react-select can portal its menu
 * without SSR/hydration mismatches (avoids modal overflow clipping too).
 */
export function useCountrySelectMenuPortal() {
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);

  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);

  return menuPortalTarget;
}
