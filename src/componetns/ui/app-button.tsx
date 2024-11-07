import styles from "@/componetns/styles/app-button.module.css";

export function AppPrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.primaryButton}>
      {children}
    </div>
  );
}

export function AppSecondaryButton() {
  return (
    <div className={styles.secondaryButton}>
      Secondary
    </div>
  );
}