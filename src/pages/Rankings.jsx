import { rankings } from "../data/data";

export default function Rankings() {
  return (
    <div className="px-6 md:px-16 py-10">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        Top Law Colleges Rankings
      </h1>

      <p className="text-gray-600 mb-10">
        Based on student performance, participation, and achievements.
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow rounded-lg overflow-hidden">

          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-4 text-left">College</th>
              <th className="p-4 text-left">Rank</th>
              <th className="p-4 text-left">Score</th>
            </tr>
          </thead>

          <tbody>
            {rankings.map((college, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="p-4">{college.name}</td>
                <td className="p-4">{college.score}</td>

                <td className="p-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${college.score}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}