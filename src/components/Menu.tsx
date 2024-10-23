import {
  IonAvatar,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import {
  bookmarkOutline
} from "ionicons/icons";
import { SiCashapp } from "react-icons/si";

import { useLocation } from "react-router-dom";
import "./Menu.css";

interface AppPage {
  url: string;
  title: string;
  icon?: JSX.Element;
}

import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaCog, FaEnvelope, FaHome } from "react-icons/fa";

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/main",
    icon: <FaHome />,
  },
  {
    title: "Categorias",
    url: "/Categorias",
    icon: <BiSolidCategoryAlt />,
  },
  {
    title: "Cuentas",
    url: "/Cuentas",
    icon: <FaEnvelope />,
  },
  {
    title: "Monedas",
    url: "/Monedas",
    icon: <SiCashapp />,
  },
  {
    title: "Configuracion",
    url: "/Configuracion",
    icon: <FaCog />,
  },
];

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            {" "}
            <IonItem>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel>Eduardo Salinas</IonLabel>
            </IonItem>
          </IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <div style={{ marginRight: "10px" }}>{appPage.icon}</div>
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
