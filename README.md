# Kosken palveluväylän sovitinpalvelu

Tämä applikaatio toimii sovitinpalveluna kansallisessa palveluväylässä.
Sen kautta voi hakea opiskelijoiden opinto-oikeuksia henkilötunnuksella.

[![Build Status](https://travis-ci.com/Opetushallitus/koski-mydata.svg?branch=master)](https://travis-ci.com/Opetushallitus/koski-mydata)

## Vaatimukset

- Node.js 20 ja sen mukana tuleva npm-versio
- AWS CLI
- ([AWS SAM CLI](https://github.com/awslabs/aws-sam-cli), jos haluat ajaa lambda-funktiota lokaalisti ja saada kaikki automaattitestit suoritettua)

## Riippuvuuksien asentaminen

```
npm install
```

## Applikaation kääntäminen

```
npm run build
```

Komento ajaa myös yksikkö- ja integraatiotestit sekä tarkistaa koodityylit. Osa testeistä tarvitsee AWS SAM CLI:n.

## Käännetyn applikaation asentaminen pilveen

Asenna AWS-avaimet [kuten täällä on ohjeistettu](https://github.com/Opetushallitus/koski-aws-infra#2-api-avaimien-ja-tilien-asennus).

Jonka jälkeen asennus ympäristöön (dev/qa/prod) tapahtuu komennolla:

```shell
./deploy-[env].sh
```

Toimintaa voi varmistella esim. seuraamalla lokia /aws/lambda/get-opinto-oikeudet-[qa/prod]-new .

## Applikaation käynnistys lokaalisti

Jos haluat ajaa lambda-funktiota lokaalisti, tarvitset AWS SAM CLI:n.

### AWS SAM CLI:n asentaminen

[Asennusohjeet](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

#### pip-asennus

```
pip install --user aws-sam-cli
```

(Mikäli komento palauttaa virheitä,  kokeile ajaa `pip install --user --upgrade setuptools` ennen ylläolevaa komentoa.)

Varmista että Pythonin user basen (`python -m site --user-base`) `/bin` -hakemisto on PATH-muuttujassa.

### .env-tiedoston luominen

Kysy Koski-tiimiltä QA-environmentin käyttäjätunnus ja salasana.
Luo tiedosto ```.env``` sisällöllä:
```
NODE_ENV=production
NODE_CONFIG_ENV=qa
koski_user_koski=username
koski_password_koski="password"
```

*HUOM.* Salasana lainausmerkkeihin.

### Palvelimen käynnistys

Ks. https://github.com/aws/aws-sam-cli/issues/4329#issuecomment-1289588827 ohjeet DOCKER_HOST asettamiseen. Ilman sitä ei ainakaan useampia colima-konteksteja käytettäessä käynnistäminen toimi.

```
npm run build
env DOCKER_HOST="..." npm run start
```

(Jos package.json:ia muokataan niin `npm run build` tulee ajaa uudestaan.)

ja testaa että applikaatio toimii:
```
curl -v -k -d @examples/opintooikeudet-payload-koski-qa.xml --header "Content-Type: text/xml" -X POST http://localhost:3000/
```

### Huomioita WSDL-tiedostosta

Applikaation tuottaman WSDL-tiedoston sisältämä `<soap:address location>` -elementti ei sisällä aitoa, toimivaa
osoitetta. AWS-ympäristössä tämän lambda-funktion edustalla oleva API gateway on private-tyyppinen, ja sille on
käyttöoikeus ainoastaan liityntäpalvelimilta. Siksi aitoa osoitetta ei haluta sisällyttää tähän. Aito osoite on
konfiguroitu manuaalisesti liityntäpalvelimien käyttöliittymässä. Kun WSDL-tiedosto haetaan palveluväylän toimesta,
osoite päivitetään joka tapauksessa erilliseksi esimerkkiosoitteeksi ennen WSDL:n julkaisua, joten tässä käytetyllä
osoitteella ei ole merkitystä.
