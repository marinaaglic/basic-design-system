import styles from './page.module.css';
import Text from '@/components/text/Text';

export default function Home() {
  return (
    <div className={styles.page}>
      <Text size="h1" component="h3">
        Home page
      </Text>
    </div>
  );
}
