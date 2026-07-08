import CtaButton from "./CtaButton";
import CreatorTable from "./CreatorTable";

const ROWS = [
  { handle: "mathwithchris", match: 55, followers: "1.2M", engagement: "6.0%", cats: ["AI", "Student"], bio: "AI tool to get you better grades ✅" },
  { handle: "salem_learns", match: 52, followers: "10.8K", engagement: "18.0%", cats: ["Developer", "Student"], bio: "this study app is a lifesaver" },
  { handle: "ccx.study", match: 52, followers: "134K", engagement: "11.0%", cats: ["Student"], bio: "academic comeback szn 📚" },
];

export default function FinalCta() {
  return (
    <section id="get-creators" className="bg-white pt-20 pb-8">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm text-muted">Never scroll for good creators again</p>
        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl md:text-6xl">
          One subscription,
          <br />
          endless supply of creators
        </h2>
        <div className="mt-8 flex justify-center">
          <CtaButton size="lg" />
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-6">
        <CreatorTable
          dark
          title="Studypal"
          count="1,472"
          filters={["Student", "AI", "Productivity"]}
          rows={ROWS}
        />
      </div>
    </section>
  );
}
