import { useEffect } from "react";

export function useScrollRestoration() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    } catch (e) {
      // ignore
    }

    const originalPush = history.pushState;
    const originalReplace = history.replaceState;

    const save = () => {
      try {
        const state = history.state || {};
        const scroll = { x: window.scrollX, y: window.scrollY };
        history.replaceState({ ...state, __scroll: scroll }, document.title);
      } catch (e) {
        // ignore
      }
    };

    const wrappedPush = function (
      this: any,
      state: any,
      title: string,
      url?: string | null,
    ) {
      save();
      return originalPush.apply(this, [state, title, url]);
    };

    const wrappedReplace = function (
      this: any,
      state: any,
      title: string,
      url?: string | null,
    ) {
      save();
      return originalReplace.apply(this, [state, title, url]);
    };

    (history as any).pushState = wrappedPush;
    (history as any).replaceState = wrappedReplace;

    const onPop = () => {
      const state = history.state as any;
      const s = state?.__scroll;
      if (s) {
        // wait a tick so the route can render
        setTimeout(() => window.scrollTo(s.x ?? 0, s.y ?? 0), 0);
      } else {
        setTimeout(() => window.scrollTo(0, 0), 0);
      }
    };

    const onDocClick = (e: MouseEvent) => {
      try {
        const t = e.target as HTMLElement | null;
        const a = t?.closest && (t.closest("a") as HTMLAnchorElement | null);
        if (a && a.getAttribute("href")?.startsWith("#")) {
          // save current scroll before anchor navigation
          save();
        }
      } catch (e) {
        // ignore
      }
    };

    window.addEventListener("click", onDocClick, true);
    window.addEventListener("popstate", onPop);
    window.addEventListener("pagehide", save);
    window.addEventListener("beforeunload", save);

    return () => {
      (history as any).pushState = originalPush;
      (history as any).replaceState = originalReplace;
      window.removeEventListener("click", onDocClick, true);
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("pagehide", save);
      window.removeEventListener("beforeunload", save);
    };
  }, []);
}
