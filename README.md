# Kosken palveluväylän sovitinpalvelu

Tämä applikaatio toimii sovitinpalveluna kansallisessa palveluväylässä,
sen kautta voi hakea opiskelijoiden opinto-oikeuksia henkilötunnuksella.

## Asentaminen

```
npm install -g aws-sam-local
npm install -g gulp
npm install
```

## Applikaation käynnistys lokaalisti

Luo tiedosto ```.env``` sisällöllä:
```
KOSKI_USER=username
KOSKI_PASSWORD=password
```

käynnistä palvelin:

```
npm run start
``` 

ja testaa että applikaatio toimii:
```
curl -v -X POST  "http://localhost:3000/"
```

## Applikaation buildaus

```
npm run build
```
