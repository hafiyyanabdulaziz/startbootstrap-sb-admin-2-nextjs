import classNames from "classnames";

interface DividerProps {
  subTitle?: string;
}
const Divider = (props: Partial<DividerProps>) => {
  const { subTitle } = props;
  const classDivider = classNames({
    "sidebar-divider": true,
    "my-0": subTitle == null,
  });
  return (
    <>
      <hr className={classDivider} />
      <div className='sidebar-heading'>{subTitle}</div>
    </>
  );
};

export default Divider;
