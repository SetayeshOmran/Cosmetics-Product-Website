
import { MenuItem } from "./MenuData";
const ItemMenu = () => {
  

  return (
    <div
    
      className="items-center justify-between hidden w-full md:flex md:w-auto mx-5"
      id="navbar-search"
    >
      <ul className="flex flex-col  md:p-0 poppins-medium md:space-x-8 rtl:space-x-reverse md:flex-row ">
        {MenuItem.map((item,index) => (
          <li key={index}>
            <a
              href="#"
              className="block py-2 px-1 text--blackpoppins-medium hoverColor"
              aria-current="page"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemMenu;
