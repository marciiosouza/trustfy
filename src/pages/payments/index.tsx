export { PaymentsPage as PaymentsSection } from "./PaymentsPage";
import { PaymentsPage as PaymentsSection } from "./PaymentsPage";
export { default as FeaturesList } from "./FeaturesList";
export { default as FeatureItem } from "./FeatureItem";
export { default as NotificationCard } from "./NotificationCard";

export const PaymentsPage = () => {
  return (
    <main>
      <PaymentsSection />
    </main>
  );
};
