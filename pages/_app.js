import '@/styles/globals.css'
import { getInitialFirebase } from '@/firebase/config'
export default function App({ Component, pageProps }) {
  getInitialFirebase()
  if(Component.getLayout){
    return (
      <Component.getLayout>
        <Component {...pageProps} />
      </Component.getLayout>
    )
  }
  return <Component {...pageProps} />
}
