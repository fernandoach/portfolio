import './leftAside.css'

function LeftAside() {
  const name = "Miguel A.";

  const role = {
    imgSrc: "/imgs/roleImg.svg",
    imgAlt: "role img",
    content: "Programador",
  };

  const phrase =
    "Ya caminaste sobre fuego y sigues aquí, no dudes ni un segundo de ti.";

  const profession = {
    imgSrc: "/imgs/professionImg.svg",
    imgAlt: "profession img",
    content: "Ingeniero de Sistemas Computacionales",
  };

  const softSkills = [
    {
      content: "Comunicación efectiva",
      imgSrc: "/imgs/ss_communication.svg",
      imgAlt: "communication img",
      stars: 5,
    },
    {
      content: "Trabajo en equipo",
      imgSrc: "/imgs/ss_teamwork.svg",
      imgAlt: "teamwork img",
      stars: 4,
    },
    {
      content: "Aprendizaje continuo",
      imgSrc: "/imgs/ss_learning.svg",
      imgAlt: "learning img",
      stars: 5,
    },
    {
      content: "Solución de problemas",
      imgSrc: "/imgs/ss_troubleshooting.svg",
      imgAlt: "troubleshooting img",
      stars: 4,
    },
  ];

  const profileImg = {
    src: "/imgs/profile.jpg",
    alt: "profile img",
  };

  return (
    <aside className="info">
      <div className="info__role">
        <img
          loading={"eager"}
          className="info__role__img"
          src={role.imgSrc}
          alt={role.imgAlt}
        />
        <small className="info__role__text">{role.content}</small>
      </div>
      <h2 className="info__name">{name}</h2>
      <p className="info__phrase">{phrase}</p>
      <div className="info__profession">
        <img
          loading={"eager"}
          className="info__profession__img"
          src={profession.imgSrc}
          alt={profession.imgAlt}
        />
        <h3 className="info__profession__text">{profession.content}</h3>
      </div>
      <img
        loading={"eager"}
        className="info__profile-img"
        src={profileImg.src}
        alt={profileImg.alt}
      />
      <div className="info__soft-skills">
        {softSkills.map((item) => {
          return (
            <div key={item.content} className="info__soft-skills__item">
              <span />
              <span />
              <span />
              <span />
              <img
                loading={"eager"}
                className="info__soft-skills__item__img"
                src={item.imgSrc}
                alt={item.imgAlt}
              />
              <h4 className="info__soft-skills__item__text">{item.content}</h4>
              <div className="info__soft-skills__item__stars">
                {Array.from({ length: 5 }).map((_, pos) => {
                  return (
                    <img
                      key={`star${pos}`}
                      loading={"eager"}
                      className="info__soft-skills__item__stars__img"
                      src={
                        pos < item.stars
                          ? "/imgs/star.svg"
                          : "/imgs/star_empty.svg"
                      }
                      alt="star img"
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export { LeftAside };
