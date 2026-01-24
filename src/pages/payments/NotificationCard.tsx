import type { FC } from "react";

type NotificationProps = {
  title: string;
  message: string;
  time?: string;
};

const NotificationCard: FC<NotificationProps> = ({ title, message, time = "há 1h" }) => {
  return (
    <article className="flex items-center gap-4 bg-[#180F27] text-white rounded-xl p-4 shadow-md" aria-live="polite">
      <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center" aria-hidden>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-xs text-gray-300">{message}</p>
      </div>
      <time className="text-xs text-gray-400">{time}</time>
    </article>
  );
};

export default NotificationCard;
