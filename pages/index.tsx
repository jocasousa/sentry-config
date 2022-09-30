import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const boxStyles = { padding: '12px', border: '1px solid #eaeaea', borderRadius: '10px' };


const Home: NextPage = () => {
  return (
     <div>
      <h1 className={styles.title}>Sentry Config</h1>

      <button type="button" style={{
                    ...boxStyles,
                    backgroundColor: '#c73852',
                    borderRadius: '12px',
                    border: 'none'
                }} onClick={() => {
                    throw new Error("Sentry Frontend Error");
                }}>
                    Throw error
                </button>

     </div>
  )
}

export default Home
