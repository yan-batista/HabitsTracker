interface ProgressBarProps {
  progress: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  const progressStyles = {
    width: `${props.progress}%`,
  };

  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        className="h-3 rounded-xl bg-violet-600"
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={props.progress}
        style={progressStyles}
      ></div>
    </div>
  );
};

export default ProgressBar;
