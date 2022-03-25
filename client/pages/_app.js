import "../styles/globals.css";
import "../styles/MessageList.css";
import "../styles/Nav.css";
import "../styles/Chat.css";
import "../styles/Messenger.css";
import ErrorBoundary from "./components/Errorboundary";

export default function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
