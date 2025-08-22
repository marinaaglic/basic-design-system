import styles from './page.module.css';
import Text from '@/components/text/Text';
import Button from '@/components/button/Button';

export default function Home() {
  return (
    <div className={styles.page}>
      <Text size="h1" component="h3">
        Home page
      </Text>
      <Button color="primary" type="default" size="small">
        Primary Default
      </Button>
      <Button color="secondary" type="default" size="medium">
        Primary Default
      </Button>
      <Button color="secondary" type="transparent" size="medium">
        Primary Default
      </Button>
      <Button color="secondary" type="default" size="medium" disabled={true}>
        Primary Default
      </Button>
    </div>
  );
}
