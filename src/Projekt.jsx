import React from 'react';

const Projekt = () => {
  return (
    <div className="card">
      <h2>O projektu Booklog</h2>
      <div className="card__text">
        <p>
          Na začátku Akademie nás spojila láska ke kočkám a záliba ve čtení.
          Pokračovalo to sdíleným zápalem do IT, bojem s nedostatkem času a
          zdravým perfekcionismem. A zrodil se nápad na projekt :)
        </p>
        <h3>Booklog = "book" (čili kniha) + "log" (záznam)</h3>
        <p>
          Booklog je nápad, který vznikl v rámci diskuze o tom, jak si občas ani
          jedna nepamatujeme, co že jsme to vlastně četly. Rády bychom vytvořily
          webovou aplikaci, kterou využijí nejen nadšení knihomolové, ale i
          například chudák student VŠ, který dělá do diplomky literární rozbor a
          nebaví ho dělat si poznámky na milion papírů. Ve zkratce se tedy bude
          jednat o takový čtenářský deník pro dospělé.
        </p>
        <h3>Co by tedy Booklog měl obsahovat?</h3>
        <ul>
          <li>úvodní homepage,</li>
          <li>přihlašování - uživatel se přihlásí do vlastního účtu,</li>
          <li>
            přidávání knih - uživatel si podle názvu, popř. ISBN kódu, vyhledá
            knížku, kterou si přidá na svůj profil,
          </li>
          <li>
            pomocí API se do každého logu stáhne základní info o knížce
            (shrnutí, bio apod.), aby uživatel nemusel vše vypisovat sám,
          </li>
          <li>vkládání poznámek, hodnocení, tvoření záložek,</li>
          <li>
            statistika - aby člověk mohl sledovat svůj čtenářský progres. Ze
            zalogovaných knih vytvoří Booklog uživateli přehled kde se dozví,
            kolik přečetl knih, slov, stránek a jak knížky hodnotil.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projekt;
