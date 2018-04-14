# Kosken palveluväylän sovitinpalvelu

Tämä applikaatio toimii sovitinpalveluna kansallisessa palveluväylässä,
sen kautta voi hakea opiskelijoiden opinto-oikeuksia henkilötunnuksella.

## Asentaminen

```
pip install awscli --upgrade --user
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
npm run build
npm run start
``` 

TODO: Jos package.json:ia modataan niin pitää ajaa npm run build uudestaan

ja testaa että applikaatio toimii:
```
curl -v -k -d @opintooikeudet-payload.xml --header "Content-Type: text/xml" -X POST http://localhost:3000/Endpoint
```

## Applikaation buildaus

```
npm run build
```
