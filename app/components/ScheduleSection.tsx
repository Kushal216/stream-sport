interface Match {
  date: string;
  time: string;
  teamA: string;
  teamB: string;
  platform: string;
}

const matches: Match[] = [
  { date: "Nov 12, 2025", time: "6:00 PM", teamA: "Nepal", teamB: "India", platform: "Facebook Live" },
  { date: "Nov 15, 2025", time: "8:30 PM", teamA: "Argentina", teamB: "Brazil", platform: "YouTube Live" },
  { date: "Nov 20, 2025", time: "7:00 PM", teamA: "Spain", teamB: "France", platform: "Instagram Live" },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-16 bg-blue-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Upcoming Schedules</h2>
      <div className="max-w-4xl mx-auto space-y-6 px-6">
        {matches.map((match, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-center bg-blue-800 rounded-lg p-4 shadow-md hover:bg-blue-700 transition"
          >
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold">{match.teamA} vs {match.teamB}</h3>
              <p className="text-gray-300">{match.date} • {match.time}</p>
            </div>
            <span className="mt-2 sm:mt-0 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              {match.platform}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
