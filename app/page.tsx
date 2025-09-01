import styles from './page.module.css';
import Text from '@/components/text/Text';
import Button from '@/components/button/Button';
import ToggleButton from '@/components/toggle-button/ToggleButton';

export default function Home() {
  return (
    <div className={styles.page}>
      <ToggleButton />
      <Text size="h1" component="h3">
        Home page
      </Text>
      <Button variant="primary" type="default" size="small">
        Primary Default
      </Button>
    </div>
  );
}
