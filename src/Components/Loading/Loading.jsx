import style from "./loading.module.css";
const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.container}>
        <div className={style.loader}>
          <span />
        </div>
        <h1 />
      </div>
      <h1 className={style.text}>Loading...</h1>
    </div>
  );
};
export default Loading;
