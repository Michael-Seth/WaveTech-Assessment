import { PropsWithChildren, Suspense } from "react";

import SplashScreen from "./SplashScreen";

function SuspensedWithFallback({ children }: PropsWithChildren) {
  return <Suspense fallback={<SplashScreen />}>{children}</Suspense>;
}

export default SuspensedWithFallback;
