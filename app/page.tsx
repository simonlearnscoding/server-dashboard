import {
  ServerIcon,
  ArrowPathIcon,
  FilmIcon,
  ArrowDownTrayIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";

export default async function HomeServerDashboard() {
  const services = [
    {
      name: "Syncthing",
      icon: <ArrowPathIcon className="h-8 w-8 text-blue-500" />,
      description: "Continuous file synchronization",
      status: "active",
      port: 8384,
      path: "/syncthing",
    },
    {
      name: "Plex Media Server",
      icon: <FilmIcon className="h-8 w-8 text-amber-500" />,
      description: "Your personal media library",
      status: "active",
      port: 32400,
      path: "/plex/web",
    },
  ];

  const stats = [
    {
      name: "Storage Used",
      value: "4.2 TB",
      icon: <ComputerDesktopIcon className="h-5 w-5" />,
    },
    {
      name: "Files Synced",
      value: "12,458",
      icon: <ArrowDownTrayIcon className="h-5 w-5" />,
    },
    {
      name: "Media Items",
      value: "1,847",
      icon: <FilmIcon className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center">
          <ServerIcon className="h-10 w-10 text-indigo-600 mr-3" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Simon's Home Server
            </h1>
            <p className="text-gray-500">Your personal cloud infrastructure</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6 flex items-center">
                <div className="rounded-full bg-indigo-100 p-3 mr-4">
                  {stat.icon}
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Services
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Available applications on your server
            </p>
          </div>
          <ul className="divide-y divide-gray-200">
            {services.map((service) => (
              <li key={service.name}>
                <a
                  href={`/api/proxy?service=${service.name.toLowerCase()}`}
                  className="block hover:bg-gray-50"
                >
                  <div className="px-4 py-4 sm:px-6 flex items-center">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0 mr-4">{service.icon}</div>
                      <div>
                        <div className="text-sm font-medium text-indigo-600 truncate">
                          {service.name} (Port: {service.port})
                        </div>
                        <div className="text-sm text-gray-500">
                          {service.description}
                        </div>
                      </div>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${service.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                      >
                        {service.status}
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Home Server v1.0 • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
