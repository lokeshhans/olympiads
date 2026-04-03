import { rankings } from "../data/data";
import { motion } from "framer-motion";

export default function Rankings() {
  return (
    <div className="px-6 md:px-16 py-10">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
      >
        Top Law Colleges Rankings
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 mb-10"
      >
        Based on student performance, participation, and achievements.
      </motion.p>

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
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4">{college.name}</td>

                {/* FIX: Rank should be index + 1 */}
                <td className="p-4">{index + 1}</td>

                <td className="p-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${college.score}%` }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="bg-yellow-400 h-2 rounded-full"
                    />
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}