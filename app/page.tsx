import styles from './page.module.css';
import Text from '@/components/text/Text';
import Button from '@/components/button/Button';

export default function Home() {
  return (
    <div className={styles.page}>
      <Text size="h1" component="h3">
        Home page
      </Text>
      <Button variant="primary" type="default" size="small">
        Primary Default
      </Button>
    </div>
  );
}
