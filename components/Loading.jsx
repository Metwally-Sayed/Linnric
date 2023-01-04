import React from 'react';

const Loading = () => {
  return (
    <div className="w-full">
      <div className=" rounded-md p-4 max-w-sm w-[90%] mx-auto">
        <div className="animate-pulse flex space-x-4 min-w-full">
          <div className="flex-1 space-y-6 py-1 min-w-full">
            <div className="h-2 bg-slate-700 rounded min-w-full"></div>
            <div className="space-y-3 min-w-full">
              <div className="grid grid-cols-3 gap-4 min-w-full">
                <div className="h-2 bg-slate-700 rounded col-span-2 min-w-full"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1 min-w-full"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
