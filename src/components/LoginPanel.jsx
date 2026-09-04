import { useState } from "react";
import SocialIcon from "./SocialIcon";
import SpotifyLogo from "./SpotifyLogo";

const providers = ["apple", "google", "x"];

export default function LoginPanel() {
  const [selectedProvider, setSelectedProvider] = useState(null);

  return (
    <main className="login-page">
      <SpotifyLogo />

      <section className="login-content" aria-labelledby="page-title">
        <h1 id="page-title">LIFE IS WASTED ON THE LIVING</h1>
        <p className="sign-in-label">
          Sign in
          <br />
          with
        </p>

        <div className="provider-picker" aria-label="Choose a sign-in provider">
          {providers.map((provider) => (
            <SocialIcon
              key={provider}
              provider={provider}
              selected={selectedProvider === provider}
              onSelect={setSelectedProvider}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
