import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";
import { UrlObject } from "url";

declare type Url = string | UrlObject;

interface ItemProps {
  title: string;
  active?: boolean;
  classIcon: string;
  route?: Url;
  children?: ReactNode;
}
const Item = (props: ItemProps) => {
  const { title, active, classIcon, route = "", children } = props;

  const classItem = classNames({
    "nav-item": true,
    active: active,
  });
  if (children) {
    return (
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='#'
          data-toggle='collapse'
          data-target='#collapseUtilities'
          aria-expanded='true'
          aria-controls='collapseUtilities'>
          <i className={`fa-fw ${classIcon}`} />
          <span>{title}</span>
        </a>
        <div
          id='collapseUtilities'
          className='collapse'
          aria-labelledby='headingUtilities'
          data-parent='#accordionSidebar'>
          <div className='bg-white py-2 collapse-inner rounded'>{children}</div>
        </div>
      </li>
    );
  }
  return (
    <li className={classItem}>
      <Link href={route}>
        <a className='nav-link'>
          <i className={`fa-fw ${classIcon}`} />
          <span>{title}</span>
        </a>
      </Link>
    </li>
  );
};

export default Item;
