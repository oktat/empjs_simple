# Dolgozók kezelése

## Eszközök

Használt eszközök:

* Express
* Sequelize

## Beállítások

### Adatbázis

Készítsünk másolatot a gyökérkönyvtárban a .env.example állományról.

Tültsük ki az adatbázisra vonatkozó részt.

A dialect lehet sqlite vagy mariadb.

```bash
DB_DIALECT=sqlite
```

SQLite esetén az útvonal :memory: vagy a kívánt útvonal kell legyen.

```bash
DB_PATH=database.sqlite
```

### Alkalmazás kulcs

Az .env fájlban az alkalmazás kulcsnak adjon meg véletlenül választott számokból és betűkből álló 32 hosszú karaktersorozatot.

```bash
APP_KEY=
```

## Indulás

Fejlesztéshez:

```cmd
npm run dev
```

Produktum indítása:

```cmd
npm start
```

## Licence

May be freely distributed under the MIT license.

Copyright (c) 2023 Sallai András
