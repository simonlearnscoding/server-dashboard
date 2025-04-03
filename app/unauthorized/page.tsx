// app/unauthorized/page.tsx
import {
  LockClosedIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-sm border border-red-500/30 rounded-xl p-8 shadow-2xl shadow-red-500/10 animate-fade-in">
        {/* FBI "Badge" Style Header */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-red-600 text-white rounded-full p-3 mr-3">
            <ShieldExclamationIcon className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Better luck next time,
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="border-b border-gray-700 pb-6">
            <h2 className="text-3xl font-bold text-white mb-2">
              Nice try, FBI!
            </h2>
            <p className="text-gray-300 text-lg">
              Simon hasn't authorized you for this server.
            </p>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <div className="flex items-start">
              <LockClosedIcon className="h-5 w-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-gray-400">
                This incident has been logged and reported to our cyber security
                team. Better luck next time!
              </p>
            </div>
          </div>
        </div>

        {/* Glitch Effect (Visual Interest) */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-sm mt-8">
        Next time maybe try making an effort or something? idk
      </p>
    </div>
  );
}
