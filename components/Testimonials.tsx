import { Avatar } from "./Avatar";

type Tweet = {
  name: string;
  handle: string;
  body: string;
  likes: number;
  date: string;
};

const TWEETS: Tweet[] = [
  {
    name: "Desmond",
    handle: "desmondbuilds",
    body: "Best launch day ever 🤯\n\n– 3.5k installs in 24h\n– 164 started the yearly plan\n– 9 grabbed lifetime\n\nAll from ONE creator reel ⚡",
    likes: 421,
    date: "Aug 22",
  },
  {
    name: "Guillaume",
    handle: "buildwithg",
    body: "+$20,000 MRR from a single organic TikTok video for my app. Creators are wildly underrated.",
    likes: 512,
    date: "Aug 22",
  },
  {
    name: "Priya",
    handle: "priyaships",
    body: "Actionable growth move for today:\n\n– list 30 creators with 100k+ views in your niche\n– find their emails\n– pay $100–300 to post about your app",
    likes: 288,
    date: "Sep 25",
  },
  {
    name: "Sharon",
    handle: "sharonxyz",
    body: "from 400 MAU to 1,000 DAU with one tiktok video 🤯 still not over it",
    likes: 130,
    date: "Aug 23",
  },
  {
    name: "Marco",
    handle: "marcolou",
    body: "A creator promoted my app on TikTok (150k views). In 24 hours, 5,700 people searched for it on Google. TikTok is underrated.",
    likes: 333,
    date: "Jun 18",
  },
  {
    name: "Yannis",
    handle: "yannisgrows",
    body: "The real impact of a single viral reel, by the numbers:\n\n1 tiktok → 600k+ views → 87,000 uniques → 50,000+ leads",
    likes: 240,
    date: "Aug 28",
  },
  {
    name: "Isabella",
    handle: "isabuilds",
    body: "This one video got me 35,000 downloads. I need to do this every single week.",
    likes: 190,
    date: "Jul 26",
  },
  {
    name: "Elie",
    handle: "eliemakes",
    body: "We grew to $30k ARR in 3 months almost entirely through creator collabs. Wild channel.",
    likes: 176,
    date: "Aug 18",
  },
  {
    name: "Greg",
    handle: "gregbuilds",
    body: "consumer mobile apps are back and creator distribution is exactly why. here's the playbook 👇",
    likes: 402,
    date: "Sep 12",
  },
];

function TweetCard({ t, i }: { t: Tweet; i: number }) {
  return (
    <div className="mb-4 break-inside-avoid rounded-2xl border border-line bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <Avatar seed={i} size={40} />
          <div className="leading-tight">
            <p className="flex items-center gap-1 text-sm font-semibold text-ink">
              {t.name}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1d9bf0" aria-hidden>
                <path d="M12 2l2.4 1.8 3-.3 1.2 2.7 2.7 1.2-.3 3L23 14l-1.8 2.4.3 3-2.7 1.2-1.2 2.7-3-.3L12 22l-2.4-1.8-3 .3-1.2-2.7L2.7 16.7 3 13.7 1 12l1.8-2.4-.3-3 2.7-1.2L6.4 2.7l3 .3L12 2z" />
                <path d="M10.5 14.6l-2-2L7 14l3.5 3.5L17 11l-1.5-1.4z" fill="#fff" />
              </svg>
            </p>
            <p className="text-xs text-muted">@{t.handle}</p>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-ink" aria-hidden>
          <path d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.8-9L1 2h6.8l4.7 6.2L18.9 2z" />
        </svg>
      </div>
      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink">{t.body}</p>
      <div className="mt-3 flex items-center gap-3 text-xs text-muted">
        <span className="flex items-center gap-1 text-rose-500">♥ {t.likes}</span>
        <span>·</span>
        <span>{t.date}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mx-auto max-w-3xl text-center font-display text-4xl text-ink sm:text-5xl">
          Your favourite founders already grow their startups with creators
        </h2>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {TWEETS.map((t, i) => (
            <TweetCard key={t.handle} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
