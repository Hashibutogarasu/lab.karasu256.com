import style from "@/componetns/styles/loading-spinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={style.spinner}>
      <div className={style.bounce1}></div>
      <div className={style.bounce2}></div>
      <div className={style.bounce3}></div>
    </div>
  );
}