import styles from './page.module.css'
import Text from '@/components/text/Text'
import Grid from '@/components/grid/Grid'

export default function Home() {
  return (
    <div className={styles.page}>
      <Text size="h1" component='h3'>Home page</Text>
      <Grid size="center">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Grid>
    </div>
  )
}
