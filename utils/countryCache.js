import { Country } from "country-state-city";

let _normalizedCountries = null;

/**
 * Normalized, cached country list so we don't rebuild it on every render.
 * Shape:
 * - name: string
 * - isoCode: lowercased ISO (e.g. "ae")
 * - phoneCode: string (e.g. "+971")
 * - flagSmall: flagcdn 20px wide URL
 */
export function getNormalizedCountries() {
  if (_normalizedCountries) return _normalizedCountries;

  _normalizedCountries = Country.getAllCountries().map((c) => {
    const iso = (c?.isoCode || "").toLowerCase();
    return {
      name: c?.name || "",
      isoCode: iso,
      phoneCode: c?.phonecode ? `+${c.phonecode}` : "",
      flagSmall: iso ? `https://flagcdn.com/w20/${iso}.png` : "",
    };
  });

  return _normalizedCountries;
}

