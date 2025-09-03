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
      <Button variant="primary" type="default" size="medium" disabled>
        Primary Default Disabled
      </Button>
      <Button variant="primary" type="transparent" size="medium">
        Primary Transparent
      </Button>
      <Button variant="secondary" type="default" size="small">
        Secondary Default
      </Button>
      <Button variant="secondary" type="default" size="small" disabled>
        Secondary Default
      </Button>
      <Button variant="secondary" type="transparent" size="medium">
        Secondary Transparent
      </Button>
      <Button variant="secondary" type="transparent" size="small" disabled>
        Secondary Transparent Disabled
      </Button>
    </div>
  );
}
