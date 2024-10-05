const ButtonCta = ({ children, full }) => {
  return (
    <button className={`bg-primary group hover:border-primary hover:text-primary hover:bg-transparent ${full && "w-full"} group text-white border-2 border-transparent transition-all text-xl py-1.5 px-5 flex gap-5 justify-between items-center rounded-lg`}>
      <span>{children}</span>
      <div className="text-white group-hover:text-primary">
      <svg className="w-8 h-10" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m17 35.428H30.307V48L15 32l15.307-16v11.143H49z"/></svg>
      </div>
    </button>
  );
};

export default ButtonCta;
