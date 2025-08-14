import styles from './page.module.css'
import Text from '@/components/text/Text'

export default function Home() {
  return (
    <div className={styles.page}>
      <Text type="h1">Home page</Text>
    </div>
  )
}
