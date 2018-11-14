# Kosken palveluväylän sovitinpalvelu

Tämä applikaatio toimii sovitinpalveluna kansallisessa palveluväylässä.
Sen kautta voi hakea opiskelijoiden opinto-oikeuksia henkilötunnuksella.

## Vaatimukset

- Node.js uusin 8.x ja sen mukana tuleva NPM-versio
- AWS CLI
- ([AWS SAM CLI](https://github.com/awslabs/aws-sam-cli), jos haluat ajaa lambda-funktiota lokaalisti)

## Riippuvuuksien asentaminen

```
npm install
```

## Applikaation kääntäminen

```
npm run build
```

Komento ajaa myös yksikkö- ja integraatiotestit sekä tarkistaa koodityylit.

## Käännetyn applikaation asentaminen pilveen

Asenna AWS-avaimet [kuten täällä on ohjeistettu](https://github.com/Opetushallitus/koski-aws-infra#2-api-avaimien-ja-tilien-asennus).

Jonka jälkeen asennus ympäristöön (dev/qa/prod) tapahtuu komennolla:

```shell
scripts/deploy.sh <env>
```

## Applikaation käynnistys lokaalisti

Jos haluat ajaa lambda-funktiota lokaalisti, tarvitset AWS SAM CLI:n.

### AWS SAM CLI:n asentaminen

```
pip install --user aws-sam-cli
```

(Mikäli komento palauttaa virheitä,  kokeile ajaa `pip install --user --upgrade setuptools` ennen ylläolevaa komentoa.)

Varmista että Pythonin user basen (`python -m site --user-base`) `/bin` -hakemisto on PATH-muuttujassa.

[Pidemmät asennusohjeet](https://github.com/awslabs/aws-sam-cli/blob/develop/docs/installation.rst)

### .env-tiedoston luominen

Kysy Koski-tiimiltä dev-environmentin käyttäjätunnus ja salasana.
Luo tiedosto ```.env``` sisällöllä:
```
koski_user_hsl=username
koski_password_hsl=password
```

### Palvelimen käynnistys

```
npm run build
npm run start
```

(Jos package.json:ia muokataan niin `npm run build` tulee ajaa uudestaan.)

ja testaa että applikaatio toimii:
```
curl -v -k -d @examples/opintooikeudet-payload.xml --header "Content-Type: text/xml" -X POST http://localhost:3000/
```
