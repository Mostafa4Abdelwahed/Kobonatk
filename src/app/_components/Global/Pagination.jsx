const Pagination = () => {
  return (
    <div>
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            href="#"
            className="inline-flex ml-5 transition-all hover:bg-primary hover:text-white text-lg size-12 items-center justify-center rounded border border-primary bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">الصفحة السابقة</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center justify-center transition-all hover:bg-primary hover:text-white text-lg size-12 rounded border border-primary bg-white text-center leading-8 text-gray-900"
          >
            1
          </a>
        </li>

        <li className="flex items-center justify-center transition-all text-lg hover:bg-primary hover:text-white size-12 rounded border-primary/25 bg-primary text-center leading-8 text-white">
          2
        </li>

        <li>
          <a
            href="#"
            className="flex items-center justify-center text-lg transition-all hover:bg-primary hover:text-white size-12 rounded border border-primary bg-white text-center leading-8 text-gray-900"
          >
            3
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center justify-center transition-all hover:bg-primary hover:text-white text-lg size-12 rounded border border-primary bg-white text-center leading-8 text-gray-900"
          >
            4
          </a>
        </li>

        <li>
          <a
            href="#"
            className="inline-flex size-12 mr-5 items-center justify-center transition-all hover:bg-primary hover:text-white rounded border border-primary bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">الصفحة التالية</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Pagination;
