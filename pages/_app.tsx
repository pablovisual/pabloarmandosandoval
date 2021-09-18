import "react-vertical-timeline-component/style.min.css";
import "../styles/customVerticalTimelineCSS.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return (<Component {...pageProps} />)
}
export default MyApp
