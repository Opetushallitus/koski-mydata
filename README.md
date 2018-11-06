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

Kysy Koski-tiimiltä dev-environmentin käyttäjätunnus ja salasana.
Luo tiedosto ```.env``` sisällöllä:
```
koski_user_hsl=username
koski_password_hsl=password
```

käynnistä palvelin:

```
npm run build
npm run start
``` 

Jos package.json:ia muokataan niin `npm run build` tulee ajaa uudestaan

ja testaa että applikaatio toimii:
```
curl -v -k -d @examples/opintooikeudet-payload.xml --header "Content-Type: text/xml" -X POST http://localhost:3000/
```

## Applikaation kääntäminen

```
npm run build
```

## Käännetyn applikaation asentaminen QA:lle

Asenna AWS-avaimet [kuten täällä on ohjeistettu](https://github.com/Opetushallitus/koski-aws-infra#2-api-avaimien-ja-tilien-asennus).

Jonka jälkeen voit ajaa komennot:
```sbtshell
export AWS_PROFILE=oph-utility
scripts/deploy.sh qa
```
