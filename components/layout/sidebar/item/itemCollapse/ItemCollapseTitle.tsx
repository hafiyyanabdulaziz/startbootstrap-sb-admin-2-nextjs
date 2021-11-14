interface ItemCollapseTitleProps {
  title: string;
}
const ItemCollapseTitle = (props: ItemCollapseTitleProps) => {
  const { title } = props;
  return <h6 className='collapse-header'>{title}</h6>;
};

export default ItemCollapseTitle;
