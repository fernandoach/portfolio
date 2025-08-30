import { GrActions, GrBook, GrPhone, GrProjects } from "react-icons/gr";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const menuOptions = [
    {
      content: "Proyectos",
      href: "/",
      icon: GrProjects,
    },
    {
      content: "Educación",
      href: "/education",
      icon: GrBook,
    },
    {
      content: "Habilidades",
      href: "/skills",
      icon: GrActions,
    },
    {
      content: "Contáctame",
      href: "/contact",
      icon: GrPhone,
    },
  ];

  return (
    <nav className="navbar">
      {menuOptions.map((item) => {
        return (
          <div key={`${item.href}-${item.content}`} className="navbar__option">
            <Link className="navbar__option__link" to={item.href}>
              <item.icon size={25} />
              <span className="navbar__option__link__span">{item.content}</span>
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

export { Navbar };
