import BrandLogo from "./brandLogo/BrandLogo";
import Divider from "./divider/Divider";
import Item from "./item/Item";
import ItemCollapse from "./item/itemCollapse/ItemCollapse";
import UpgradePro from "./upgradepro/UpgradePro";

const Sidebar = () => {
  return (
    <ul
      className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
      id='accordionSidebar'>
      <BrandLogo />

      <Divider />
      <Item
        title='Dashboard'
        classIcon='fas fa-tachometer-alt'
        active
        route='/'
      />

      <Divider subTitle='Interface' />
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='#'
          data-toggle='collapse'
          data-target='#collapseTwo'
          aria-expanded='true'
          aria-controls='collapseTwo'>
          <i className='fas fa-fw fa-cog' />
          <span>Components</span>
        </a>
        <div
          id='collapseTwo'
          className='collapse'
          aria-labelledby='headingTwo'
          data-parent='#accordionSidebar'>
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Custom Components:</h6>
            <a className='collapse-item' href='buttons.html'>
              Buttons
            </a>
            <a className='collapse-item' href='cards.html'>
              Cards
            </a>
          </div>
        </div>
      </li>
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='#'
          data-toggle='collapse'
          data-target='#collapseUtilities'
          aria-expanded='true'
          aria-controls='collapseUtilities'>
          <i className='fas fa-fw fa-wrench' />
          <span>Utilities</span>
        </a>
        <div
          id='collapseUtilities'
          className='collapse'
          aria-labelledby='headingUtilities'
          data-parent='#accordionSidebar'>
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Custom Utilities:</h6>
            <a className='collapse-item' href='utilities-color.html'>
              Colors
            </a>
            <a className='collapse-item' href='utilities-border.html'>
              Borders
            </a>
            <a className='collapse-item' href='utilities-animation.html'>
              Animations
            </a>
            <a className='collapse-item' href='utilities-other.html'>
              Other
            </a>
          </div>
        </div>
      </li>
      <Item title='Utilities' classIcon='fas fa-fw fa-wrench'>
        <ItemCollapse title='Halo' />
        <ItemCollapse title='Halo' />
      </Item>

      <Divider subTitle='Addons' />
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='#'
          data-toggle='collapse'
          data-target='#collapsePages'
          aria-expanded='true'
          aria-controls='collapsePages'>
          <i className='fas fa-fw fa-folder' />
          <span>Pages</span>
        </a>
        <div
          id='collapsePages'
          className='collapse'
          aria-labelledby='headingPages'
          data-parent='#accordionSidebar'>
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Login Screens:</h6>
            <a className='collapse-item' href='login.html'>
              Login
            </a>
            <a className='collapse-item' href='register.html'>
              Register
            </a>
            <a className='collapse-item' href='forgot-password.html'>
              Forgot Password
            </a>
            <div className='collapse-divider' />
            <h6 className='collapse-header'>Other Pages:</h6>
            <a className='collapse-item' href='404.html'>
              404 Page
            </a>
            <a className='collapse-item' href='blank.html'>
              Blank Page
            </a>
          </div>
        </div>
      </li>

      <Item title='Charts' classIcon='fas fa-chart-area' route='/charts' />
      <Item title='Tables' classIcon='fas fa-table' route='/tables' />

      <Divider />

      <div className='text-center d-none d-md-inline mt-3'>
        <button className='rounded-circle border-0' id='sidebarToggle' />
      </div>

      <UpgradePro />
    </ul>
  );
};

export default Sidebar;
