import styles from './page.module.css'
import Text from '@/components/text/Text'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home page</h1>
      <Text type="h1">Hej</Text>
    </div>
  )
}
