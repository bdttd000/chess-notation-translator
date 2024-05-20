## Cel projektu

Opracowanie translatora notacji szachowej do wizualizacji ruchów na realnej szachownicy oraz dostarczanie informacji o każdym wykonanym ruchu w "ludzkiej" formie tekstowej.

### Przykładowe działanie aplikacji

...

### Zastosowane technologie

React, Typescript, Tailwind

### Struktura podfolderów w folderze src

- assets/images - wszystkie zdjęcia figur oraz strzałek do historii ruchów
- components
  - ChessBoard - komponenty potrzebne do wygenerowania szachownicy
  - MoveHistory - komponenty potrzebne do historii ruchów
  - NotationExamples - komponent dla informacji odnośnie ruchu
- constants - zmienne stałe dla początkowego stanu szachownicy, przykładowych notacji oraz kierunków przeszukiwania matrix'a w poszukiwaniu figur
- types - typy używane w projekcie
- utils - wszystkie funkcje
  - chessboard - uzyskanie szachownicy oraz robienie ruchów
  - formatting - konwertownie wyników, nazw figur oraz miejsc na szachownicy
  - helpers - uzyskiwanie wektorów do przeszukiwania tablic
  - pieceSearch - zajdywanie dokładnych pozycji szukanych figur
  - primary - tworzenie głównych obiektów oraz przetwarzanie notacji

### Możliwe rozwinięcia aplikacji

- możliwości poruszania się
- analiza silnika dla pozycji
- możliwość dodawania notacji wraz z wariantami
