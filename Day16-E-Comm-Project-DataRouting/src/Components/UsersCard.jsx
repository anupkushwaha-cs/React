import React from "react";

const UsersCard = ({ user }) => {
  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-xl hover:shadow-red-950/20">

      <div className="h-2 bg-red-500"></div>

      <div className="p-5">

        <div className="mb-6 flex items-center gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-500/10 text-xl font-bold uppercase text-red-500 ring-1 ring-red-500/20">
            {user.name.firstname[0]}
            {user.name.lastname[0]}
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-lg font-bold capitalize text-white transition group-hover:text-red-400">
              {user.name.firstname} {user.name.lastname}
            </h2>

            <p className="mt-1 truncate text-sm text-gray-400">
              @{user.username}
            </p>
          </div>

          <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
            Active
          </span>

        </div>

        <div className="space-y-4 border-t border-gray-800 pt-5">

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-red-400">
              ✉
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Email Address
              </p>

              <p className="mt-1 break-all text-sm text-gray-200">
                {user.email}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-red-400">
              ☎
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Phone Number
              </p>

              <p className="mt-1 break-words text-sm text-gray-200">
                {user.phone}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-red-400">
              ⌖
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Location
              </p>

              <p className="mt-1 text-sm capitalize text-gray-200">
                {user.address.city}, {user.address.street}
              </p>
            </div>
          </div>

        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl border border-gray-800 bg-gray-950 px-4 py-3">
          <span className="text-sm text-gray-400">
            User ID
          </span>

          <span className="font-bold text-red-400">
            #{user.id}
          </span>
        </div>

      </div>
    </div>
  );
};

export default UsersCard;