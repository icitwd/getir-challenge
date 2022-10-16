import React from "react";

const Checkbox = ({ name, tags }) => {
  return (
    <div class="flex items-center">
      <input
        checked
        id="checked-checkbox"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        for="checked-checkbox"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {name}
        {tags}
      </label>
    </div>
  );
};

export default Checkbox;
