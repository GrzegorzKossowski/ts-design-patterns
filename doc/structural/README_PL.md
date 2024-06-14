# Structural

[Adapter](#-adapter)

[Bridge](#-bridge)

[Composite](#-composite)

[Decorator](#-decorator)

[Facade](#-facade)

[Flyweight](#-flyweight)

[Proxy](#-proxy)

## Adapter

`Adapter` pozwala na współpracę obiektów o niezgodnych interfejsach, przekształcając interfejs klasy na inny, oczekiwany przez klienta. Oto kilka realnych przykładów zastosowania tego wzorca:

### Integracja Systemów Płatności

W aplikacjach e-commerce, różne systemy płatności (np. PayPal, Stripe, przelewy bankowe) mogą mieć różne interfejsy. Adapter może być użyty do przekształcenia interfejsu każdego systemu płatności na wspólny interfejs używany przez aplikację, umożliwiając obsługę wielu metod płatności bez zmiany kodu logiki biznesowej.

### Komunikacja z Zewnętrznymi API

W aplikacjach, które muszą komunikować się z różnymi zewnętrznymi API (np. usługi pogodowe, serwisy społecznościowe), interfejsy tych API mogą się różnić. Adapter może być użyty do przekształcenia interfejsu zewnętrznego API na format, który jest zgodny z wewnętrznym interfejsem aplikacji, umożliwiając łatwiejszą integrację z różnymi usługami.

### Odczytywanie Danych z Różnych Formatów

W systemach analizy danych, dane mogą pochodzić z różnych źródeł i być zapisane w różnych formatach (np. CSV, JSON, XML). Adapter może być użyty do przekształcenia różnych formatów danych na jednolity format wewnętrzny używany przez system analizy danych.

### Łączenie Starszych Systemów z Nowymi

W przedsiębiorstwach często istnieje potrzeba integracji starszych systemów (legacy systems) z nowymi aplikacjami. Adapter może być użyty do przekształcenia interfejsu starszego systemu na interfejs oczekiwany przez nową aplikację, umożliwiając współpracę obu systemów.

### Sterowanie Urządzeniami

W systemach automatyki domowej różne urządzenia mogą mieć różne interfejsy komunikacyjne (np. urządzenia Zigbee, Z-Wave, Wi-Fi). Adapter może być użyty do przekształcenia interfejsu każdego urządzenia na wspólny interfejs kontrolera automatyki domowej, umożliwiając centralne sterowanie wszystkimi urządzeniami.

![Adapter](./img/image1.png)

## Bridge

`Bridge` oddziela abstrakcję od jej implementacji, dzięki czemu obie mogą zmieniać się niezależnie od siebie. Jest to szczególnie przydatne, gdy zarówno abstrakcja, jak i jej implementacja mogą być rozszerzane przez dziedziczenie. Oto kilka realnych przykładów zastosowania tego wzorca:

### Systemy Grafiki

W aplikacjach graficznych można mieć różne formaty wyświetlania (np. bitmapy, wektory) oraz różne systemy operacyjne, na których te formaty mogą być wyświetlane (np. Windows, macOS, Linux). Wzorzec "Bridge" pozwala na oddzielenie kodu odpowiedzialnego za rysowanie grafiki od kodu odpowiedzialnego za interakcję z systemem operacyjnym, umożliwiając łatwe dodawanie nowych formatów wyświetlania i wspieranie różnych systemów operacyjnych.

### Systemy Zarządzania Plikami

W systemach zarządzania plikami można mieć różne typy operacji na plikach (np. kopiowanie, przenoszenie, usuwanie) oraz różne systemy plików (np. FAT, NTFS, ext4). Wzorzec "Bridge" pozwala na oddzielenie operacji na plikach od konkretnej implementacji systemu plików, co umożliwia łatwe dodawanie nowych operacji i wspieranie różnych systemów plików.

### Sterowanie Urządzeniami

W systemach automatyki domowej można mieć różne typy urządzeń (np. lampy, termostaty, zamki) oraz różne protokoły komunikacyjne (np. Zigbee, Z-Wave, Wi-Fi). Wzorzec "Bridge" pozwala na oddzielenie logiki sterowania urządzeniami od konkretnej implementacji protokołu komunikacyjnego, umożliwiając łatwe dodawanie nowych typów urządzeń i wspieranie różnych protokołów.

### Interfejsy Użytkownika

W aplikacjach z interfejsem użytkownika można mieć różne sposoby prezentacji danych (np. lista, siatka) oraz różne źródła danych (np. baza danych, API, pliki XML). Wzorzec "Bridge" pozwala na oddzielenie logiki prezentacji danych od konkretnej implementacji źródła danych, co umożliwia łatwe dodawanie nowych sposobów prezentacji i wspieranie różnych źródeł danych.

### Systemy Płatności

W systemach płatności online można mieć różne metody płatności (np. karty kredytowe, PayPal, kryptowaluty) oraz różne bramki płatności (np. Stripe, Square, Authorize.net). Wzorzec "Bridge" pozwala na oddzielenie logiki obsługi płatności od konkretnej implementacji bramki płatności, umożliwiając łatwe dodawanie nowych metod płatności i wspieranie różnych bramek płatności.

![Bridge](./img/image2.png)

## Composite

`Composite` umożliwia traktowanie obiektów indywidualnych oraz ich kompozycji jednolicie. Umożliwia to tworzenie struktury drzewiastej, gdzie zarówno obiekty pojedyncze, jak i ich grupy mogą być traktowane w ten sam sposób. Oto kilka realnych przykładów zastosowania tego wzorca:

### Systemy Plików

W systemach plików pliki i katalogi mogą być traktowane jednolicie. Katalogi mogą zawierać zarówno pliki, jak i inne katalogi. Dzięki wzorcowi "Composite" operacje takie jak przeszukiwanie czy wyświetlanie zawartości mogą być realizowane w sposób jednolity dla plików i katalogów.

### Interfejsy Użytkownika

W systemach graficznych interfejsów użytkownika, komponenty takie jak przyciski, okna dialogowe i panele mogą być traktowane jednolicie. Panele mogą zawierać inne komponenty, w tym również inne panele. Wzorzec "Composite" umożliwia jednolite zarządzanie hierarchią komponentów interfejsu użytkownika.

### Organizacje Hierarchiczne

W strukturach organizacyjnych firm pracownicy mogą być traktowani jednolicie, niezależnie od ich pozycji. Na przykład, menedżerowie mogą mieć pod sobą innych pracowników, w tym również innych menedżerów. Dzięki wzorcowi "Composite" można łatwo zarządzać strukturą organizacyjną i wykonywać operacje na wszystkich pracownikach w jednolity sposób.

### Dokumenty Tekstowe

W edytorach tekstu dokumenty mogą składać się z różnych elementów, takich jak paragrafy, zdania i słowa. Każdy z tych elementów może być traktowany jednolicie, co umożliwia jednolite przetwarzanie i manipulowanie strukturą dokumentu. Wzorzec "Composite" pozwala na łatwe zarządzanie złożonymi dokumentami tekstowymi.

### Sceny w Grafice 3D

W grafice 3D sceny mogą składać się z różnych obiektów, takich jak modele, światła i kamery. Każdy z tych obiektów może być traktowany jednolicie, a złożone sceny mogą zawierać hierarchiczne struktury obiektów. Dzięki wzorcowi "Composite" można łatwo zarządzać skomplikowanymi scenami 3D i wykonywać operacje na wszystkich obiektach w jednolity sposób.

![Composite](./img/image3.png)

## Decorator

`Decorator` umożliwia dynamiczne dodawanie nowych funkcji do obiektów bez konieczności modyfikowania ich kodu. Pozwala to na elastyczne rozszerzanie możliwości obiektów. Oto kilka realnych przykładów zastosowania tego wzorca:

### Dekorowanie Komponentów Interfejsu Użytkownika

W systemach graficznych interfejsów użytkownika różne dekoracje, takie jak ramki, cienie, czy przewijanie, mogą być dynamicznie dodawane do komponentów (np. przycisków, pól tekstowych). Wzorzec "Dekorator" pozwala na dodawanie tych funkcji w sposób dynamiczny bez potrzeby zmiany kodu bazowego komponentu.

### Rozszerzanie Funkcji Strumieni Wejścia/Wyjścia

W bibliotekach obsługujących strumienie wejścia/wyjścia (np. w Java, .NET) można dynamicznie dodawać nowe funkcje do strumieni, takie jak buforowanie, kompresja czy szyfrowanie. Wzorzec "Dekorator" umożliwia dodawanie tych funkcji do istniejących strumieni bez konieczności modyfikowania ich implementacji.

### Rozszerzanie Funkcjonalności Obiektów w Grze

W grach komputerowych można dynamicznie dodawać nowe cechy do postaci, takie jak zbroja, bronie, czy umiejętności. Wzorzec "Dekorator" pozwala na dodawanie tych cech do istniejących obiektów postaci w sposób dynamiczny, bez potrzeby modyfikowania ich kodu bazowego.

### Dynamiczne Modyfikowanie Zachowań Serwisów Internetowych

W serwisach internetowych można dynamicznie dodawać nowe funkcje do usług, takie jak logowanie, walidacja, czy monitorowanie. Wzorzec "Dekorator" umożliwia dodawanie tych funkcji do istniejących usług w sposób dynamiczny, bez potrzeby zmiany ich kodu bazowego.

### Formatowanie Tekstu

W aplikacjach do edycji tekstu różne formaty (np. pogrubienie, kursywa, podkreślenie) mogą być dynamicznie dodawane do tekstu. Wzorzec "Dekorator" pozwala na dodawanie tych formatów do istniejącego tekstu w sposób dynamiczny, bez potrzeby modyfikowania jego kodu bazowego.

![Decorator](./img/image4.png)

## Facade

`Facade`upraszcza dostęp do złożonego systemu poprzez dostarczenie uproszczonego interfejsu. Pozwala to na łatwiejsze korzystanie z systemu bez konieczności znajomości jego wewnętrznych szczegółów. Oto kilka realnych przykładów zastosowania tego wzorca:

### Systemy Podsystemów w Aplikacjach

W dużych aplikacjach, które składają się z wielu podsystemów (np. moduł logowania, moduł płatności, moduł zarządzania użytkownikami), wzorzec "Fasada" może być używany do dostarczania uproszczonego interfejsu do tych podsystemów. Dzięki temu użytkownicy mogą łatwo korzystać z funkcji aplikacji bez konieczności znajomości szczegółów implementacji każdego podsystemu.

### Biblioteki Graficzne

W bibliotekach graficznych, które oferują różnorodne funkcje do renderowania grafiki (np. rysowanie kształtów, zarządzanie teksturami, obsługa animacji), wzorzec "Fasada" może dostarczać uproszczony interfejs do najczęściej używanych funkcji. Dzięki temu programiści mogą łatwiej tworzyć aplikacje graficzne bez konieczności zagłębiania się w szczegóły każdej funkcji biblioteki.

### Systemy Operacyjne

W systemach operacyjnych, które zarządzają różnorodnymi zasobami (np. pliki, procesy, pamięć), wzorzec "Fasada" może dostarczać uproszczony interfejs do zarządzania tymi zasobami. Dzięki temu użytkownicy mogą łatwo wykonywać operacje systemowe bez konieczności znajomości szczegółów implementacji systemu operacyjnego.

### Integracja z Zewnętrznymi Usługami

W aplikacjach, które integrują się z wieloma zewnętrznymi usługami (np. usługi pogodowe, serwisy społecznościowe, systemy płatności), wzorzec "Fasada" może dostarczać jednolity i uproszczony interfejs do komunikacji z tymi usługami. Dzięki temu programiści mogą łatwiej zarządzać integracją zewnętrznych usług bez konieczności znajomości szczegółów każdego API.

### Systemy Zarządzania Treścią (CMS)

W systemach zarządzania treścią, które oferują różnorodne funkcje (np. tworzenie i edycja treści, zarządzanie użytkownikami, analityka), wzorzec "Fasada" może dostarczać uproszczony interfejs do najczęściej używanych funkcji. Dzięki temu użytkownicy mogą łatwiej korzystać z systemu CMS bez konieczności znajomości szczegółów implementacji każdej funkcji.

![Facade](./img/image5.png)

## Flyweight

`Flyweight` umożliwia efektywne zarządzanie wieloma obiektami o małej granulacji poprzez współdzielenie wspólnych cech. Pozwala to na oszczędność pamięci i zasobów systemowych poprzez ponowne wykorzystanie istniejących obiektów, zamiast tworzenia nowych instancji dla każdego żądania. Oto kilka realnych przykładów zastosowania tego wzorca:

### Tekst i Formatowanie w Edytorze Tekstu

W edytorach tekstowych, gdzie duża liczba tekstu wymaga różnych formatowań (np. różne czcionki, kolory, style), wzorzec "Flyweight" może być stosowany do efektywnego zarządzania tymi formatowaniami. Współdzielone obiekty "Flyweight" przechowują wspólne właściwości (np. styl czcionki) i są ponownie używane w różnych częściach tekstu.

### Grafika Komputerowa

W aplikacjach graficznych, gdzie wiele obiektów (np. kształty, tekstury) może mieć wspólne cechy (np. kolor, tekstura), wzorzec "Flyweight" pozwala na współdzielenie tych cech między obiektami. Na przykład, współdzielony obiekt "Flyweight" może przechowywać informacje o wspólnym kolorze, które są używane przez wiele różnych obiektów w scenie.

### Systemy Zarządzania Pamięcią

W systemach operacyjnych lub silnikach gier, które zarządzają pamięcią, wzorzec "Flyweight" może być stosowany do efektywnego zarządzania obiektami, które są często tworzone i niszczone. Współdzielone obiekty "Flyweight" mogą być ponownie używane, aby zmniejszyć narzut związany z częstym tworzeniem i usuwaniem obiektów.

### Systemy Przechowywania Danych

W systemach przechowujących duże ilości danych (np. bazy danych, systemy plików), wzorzec "Flyweight" może być stosowany do efektywnego zarządzania danymi, które są często powtarzające się. Na przykład, współdzielone obiekty "Flyweight" mogą reprezentować unikalne wartości (np. klucze, słowa kluczowe), które są współdzielone między wieloma rekordami lub plikami.

### Systemy Cache

W systemach cache'owania, gdzie często potrzebujemy przechowywać i szybko odczytywać dane (np. wyniki zapytań, obliczone wartości), wzorzec "Flyweight" może być stosowany do zarządzania współdzielonymi obiektami cache, które mogą być ponownie używane. To pozwala na szybsze odpowiedzi na powtarzające się żądania.

![Flyweight](./img/image6.png)

## Proxy

`Proxy` umożliwia utworzenie obiektu zastępczego, który kontroluje dostęp do innego obiektu. Proxy może dodać dodatkowe funkcjonalności, takie jak kontrola dostępu, opóźnione ładowanie, logowanie, itp. Oto kilka realnych przykładów zastosowania tego wzorca:

### Zdalny Proxy (Remote Proxy)

W aplikacjach rozproszonych, zdalny proxy kontroluje dostęp do obiektu znajdującego się na serwerze zdalnym. Klient komunikuje się z proxy, które następnie przekazuje żądania do rzeczywistego obiektu na serwerze. Dzięki temu klient może pracować tak, jakby obiekt znajdował się lokalnie.

### Wirtualny Proxy (Virtual Proxy)

W aplikacjach, które korzystają z dużych obiektów, które mogą być kosztowne w tworzeniu i pamięci (np. duże obrazy, złożone dokumenty), wirtualny proxy opóźnia tworzenie rzeczywistego obiektu, dopóki nie jest on rzeczywiście potrzebny. Proxy przechowuje informacje niezbędne do stworzenia obiektu i tworzy go na żądanie.

### Zabezpieczający Proxy (Protection Proxy)

W systemach, gdzie potrzebna jest kontrola dostępu do obiektów (np. wrażliwe dane, zasoby systemowe), zabezpieczający proxy sprawdza, czy klient ma odpowiednie uprawnienia do wykonania określonych operacji na obiekcie. Proxy może odmówić dostępu lub przekierować żądania do rzeczywistego obiektu tylko wtedy, gdy klient spełnia określone kryteria.

### Inteligentny Proxy (Smart Proxy)

W aplikacjach, które wymagają dodatkowej funkcjonalności, takiej jak logowanie, śledzenie liczby odwołań czy zarządzanie blokadami, inteligentny proxy dodaje te funkcje przed przekazaniem żądania do rzeczywistego obiektu. Dzięki temu dodatkowe funkcjonalności są realizowane bez modyfikacji kodu rzeczywistego obiektu.

### Caching Proxy

W aplikacjach, które często pobierają te same dane (np. dane z baz danych, wyniki obliczeń), caching proxy przechowuje wyniki wcześniejszych żądań i zwraca je zamiast ponownie wykonywać kosztowne operacje. Proxy zarządza pamięcią podręczną, sprawdzając, czy przechowywane wyniki są aktualne i usuwa przestarzałe dane.

![Proxy](./img/image7.png)
