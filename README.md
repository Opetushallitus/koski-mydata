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

## TODO

   * aws profile name from command line
   * use CF to set up infra
   * use latest NodeJS
   * proper error handling
   * logging
   * wait for a fix to sam-local (wrong content-type header) or roll back to older version
   * create API Gateway
   * hosting and deployment for wsdl
   * monitoring
   * API Gateway to VPC
   * Create role for Lambda function
   * (Strip only hetu from log entries, not date of birth?)
   * Set up domain for Lambda function (IAM or Cloudfront or WAF?)
   * Error handling (check SOAP specs)
   * Lambda IP whitelist as part of automatic function create
   * Install https://www.npmjs.com/package/eslint-plugin-jest
