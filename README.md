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
Luo tiedosto ```config.env.development``` sisällöllä:
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

## TODO

### Missing features

   * What to do with people without hetu
   * (Strip only hetu from log entries, not date of birth?) or encrypt entries
   * Configure environment variables in one place
   * User should be able to give permission in Opintopolku to share data

### Tests
   * Find a part-time student and test that the 'osaAikaisuusjaksot' is available.
   * Find a student with estimated end date for studies and include it in tests

### Running & Deploying

   * Read aws profile name from command line
   * Wait for a fix to sam-local (wrong content-type header) or roll back to older version
   * Check known security issues automatically
   
### Hosting

   * Use Cloudformation/Terraform to set up infra
   * Monitoring (do we have synthetic hetus in prod to monitor with?)
   * API Gateway to VPC
   * Create role for Lambda function
   * Set up domain for Lambda function (IAM or Cloudfront or WAF?)
   * Lambda IP whitelist as part of automatic function create

