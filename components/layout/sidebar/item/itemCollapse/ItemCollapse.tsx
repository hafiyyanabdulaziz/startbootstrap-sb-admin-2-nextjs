import { UrlObject } from "url";
import Link from "next/link";

declare type Url = string | UrlObject;
interface ItemCollapseProps {
  title: string;
  route?: Url;
}
const ItemCollapse = (props: ItemCollapseProps) => {
  const { route = "", title } = props;
  return (
    <Link href={route}>
      <a className='collapse-item'>{title}</a>
    </Link>
  );
};

export default ItemCollapse;
