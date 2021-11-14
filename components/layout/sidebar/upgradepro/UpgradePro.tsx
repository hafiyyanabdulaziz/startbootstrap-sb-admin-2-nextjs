import Image from "next/image";
const UpgradePro = () => {
  return (
    <div className='sidebar-card d-none d-lg-flex'>
      <Image
        className="sidebar-card-illustration mb-2'"
        src={"/startbootstrap-sb-admin-2/img/undraw_rocket.svg"}
        width={51}
        height={48}
        alt='...'
      />

      <p className='text-center mb-2'>
        <strong>SB Admin Pro</strong> is packed with premium features,
        components, and more!
      </p>
      <a
        className='btn btn-success btn-sm'
        href='https://startbootstrap.com/theme/sb-admin-pro'>
        Upgrade to Pro!
      </a>
    </div>
  );
};

export default UpgradePro;
