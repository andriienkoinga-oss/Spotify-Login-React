const providers = {
  apple: { label: "Apple", symbol: "●", className: "apple-icon" },
  google: { label: "Google", symbol: "G", className: "google-icon" },
  x: { label: "X", symbol: "𝕏", className: "x-icon" }
};

export default function SocialIcon({ provider, selected, onSelect }) {
  const item = providers[provider];

  return (
    <button
      className={`social-button ${selected ? "selected" : ""}`}
      type="button"
      aria-label={`Sign in with ${item.label}`}
      aria-pressed={selected}
      onClick={() => onSelect(provider)}
    >
      <span className={item.className} aria-hidden="true">
        {item.symbol}
      </span>
    </button>
  );
}
