const ThemeWrapper = props => {
  return (
    <div className="text-slate-200 bg-teal-600 dark:bg-neutral">
      {props.children}
    </div>
  );
};

export default ThemeWrapper;
