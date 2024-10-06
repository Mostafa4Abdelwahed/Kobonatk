"use client"
import ReactPaginate from "react-paginate";

const Pagination = ({ pageSetter, totalPages }) => {
  const handleClick = (data) => {
    pageSetter(data.selected + 1);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7"/></svg>}
      onPageChange={handleClick}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      pageCount={totalPages}
      previousLabel={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 5l-6 7l6 7"/></svg>}
      renderOnZeroPageCount={null}
      containerClassName="flex justify-center gap-1.5 text-xs font-medium"
      pageLinkClassName="flex items-center justify-center transition-all hover:bg-primary hover:text-white text-lg size-12 rounded border border-primary bg-white text-center leading-8 text-gray-900"
      nextLinkClassName="inline-flex size-12 mr-5 transition-all hover:bg-primary hover:text-white text-lg items-center justify-center rounded border border-primary bg-white text-gray-900 rtl:rotate-180"
      previousLinkClassName="inline-flex size-12 ml-5 transition-all hover:bg-primary hover:text-white text-lg items-center justify-center rounded border border-primary bg-white text-gray-900 rtl:rotate-180"
      breakLinkClassName="flex items-center justify-center transition-all hover:bg-primary hover:text-white text-lg size-12 rounded border border-primary bg-white text-center leading-8 text-gray-900"
      activeClassName="bg-primary rounded p-px text-white -translate-y-3"
    />
  );
};

export default Pagination;
