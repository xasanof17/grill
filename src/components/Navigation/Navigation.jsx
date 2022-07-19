import React from "react";
import {
  NavigationContent,
  NavigationNav,
  NavigationNavList,
  NavigationNavListItem,
  NavigationNavListItemLink,
  NavigationSection,
} from "./navigationStyle";

const links = [
  { id: 1,name: "Холодные закуски", href: "#coldsnacks" },
  { id: 2,name: "Горячие закуски", href: "#hotappetizers" },
  { id: 3,name: "Мясные блюда ", href: "#meatdishes" },
  { id: 4,name: "Супы", href: "#soups" },
  { id: 5,name: "Рыбные", href: "#fish" },
  { id: 6,name: "Гриль меню", href: "#grillmenu" },
  { id: 7,name: "Фирменные блюда", href: "#specialties" },
  { id: 8,name: "Напитки", href: "#drinkables" },
];

const Navigation = () => {
  return (
    <NavigationSection>
      <div className="container">
        <NavigationContent>
          <NavigationNav>
            <NavigationNavList>
              {links.map((link) => (
               <>
                 <NavigationNavListItem key={link.id}>
                  <NavigationNavListItemLink href={link.href}>
                    {link.name}
                  </NavigationNavListItemLink>
                </NavigationNavListItem>
                </>
              ))}
            </NavigationNavList>
          </NavigationNav>
        </NavigationContent>
      </div>
    </NavigationSection>
  );
};

export default Navigation;
