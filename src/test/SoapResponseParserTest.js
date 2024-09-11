import assert from 'assert';
import SoapResponseParser from '../soap/SoapResponseParser';

// Example XML content to test the parser
// eslint-disable-next-line max-len
const xmlContent = `<soapenv:Envelope xmlns:prod="http://docs.koski-xroad.fi/producer" xmlns:id="http://x-road.eu/xsd/identifiers" xmlns:xro="http://x-road.eu/xsd/xroad.xsd" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <xro:protocolVersion>4.0</xro:protocolVersion>
    <xro:issue>issue #123</xro:issue>
    <xro:id>ID123456</xro:id>
    <xro:userId>123456789</xro:userId>
    <xro:service id:objectType="SERVICE">
      <id:xRoadInstance>FI-DEV</id:xRoadInstance>
      <id:memberClass>GOV</id:memberClass>
      <id:memberCode>2769790-1</id:memberCode>
      <id:subsystemCode>koski</id:subsystemCode>
      <id:serviceCode>opintoOikeudetService</id:serviceCode>
      <id:serviceVersion>v1</id:serviceVersion>
    </xro:service>
    <xro:client id:objectType="SUBSYSTEM">
      <id:xRoadInstance>FI-DEV</id:xRoadInstance>
      <id:memberClass>GOV</id:memberClass>
      <id:memberCode>2769790-1</id:memberCode>
      <id:subsystemCode>koski</id:subsystemCode>
    </xro:client>
  </soapenv:Header>
  <soapenv:Body>
    <kns1:opintoOikeudetServiceResponse xmlns:kns1="http://docs.koski-xroad.fi/producer">
      <kns1:opintoOikeudet>
        <![CDATA[
{
    "henkilö": {
        "oid": "1.2.246.562.24.69337840275",
        "syntymäaika": "1947-09-21"
    },
    "opiskeluoikeudet": [
        {
            "tyyppi": {
                "koodiarvo": "lukiokoulutus",
                "nimi": {
                    "fi": "Lukiokoulutus",
                    "sv": "Gymnasieutbildning"
                },
                "lyhytNimi": {
                    "fi": "Lukiokoulutus"
                },
                "koodistoUri": "opiskeluoikeudentyyppi",
                "koodistoVersio": 1
            },
            "oid": "1.2.246.562.15.90847968790",
            "oppilaitos": {
                "oid": "1.2.246.562.10.80202766442",
                "oppilaitosnumero": {
                    "koodiarvo": "00405",
                    "nimi": {
                        "fi": "Tiirismaan lukio"
                    },
                    "lyhytNimi": {
                        "fi": "Tiirismaan lukio"
                    },
                    "koodistoUri": "oppilaitosnumero",
                    "koodistoVersio": 1
                },
                "nimi": {
                    "fi": "Tiirismaan lukio"
                },
                "kotipaikka": {
                    "koodiarvo": "398",
                    "nimi": {
                        "fi": "Lahti",
                        "sv": "Lahtis"
                    },
                    "koodistoUri": "kunta",
                    "koodistoVersio": 2
                }
            },
            "tila": {
                "opiskeluoikeusJaksot": [
                    {
                        "tila": {
                            "koodiarvo": "lasna",
                            "nimi": {
                                "fi": "Läsnä",
                                "sv": "Närvarande",
                                "en": "Present"
                            },
                            "koodistoUri": "koskiopiskeluoikeudentila",
                            "koodistoVersio": 1
                        },
                        "alku": "2018-10-11",
                        "opiskeluoikeusPäättynyt": false
                    }
                ]
            },
            "suoritukset": [
                {
                    "tyyppi": {
                        "koodiarvo": "lukionoppimaara",
                        "nimi": {
                            "fi": "Lukion oppimäärä",
                            "sv": "Gymnasiets lärokurs",
                            "en": "General upper secondary education  syllabus"
                        },
                        "koodistoUri": "suorituksentyyppi",
                        "koodistoVersio": 1
                    }
                }
            ]
        },
        {
            "tyyppi": {
                "koodiarvo": "ammatillinenkoulutus",
                "nimi": {
                    "fi": "Ammatillinen koulutus",
                    "sv": "Yrkesutbildning"
                },
                "lyhytNimi": {
                    "fi": "Ammatillinen koulutus"
                },
                "koodistoUri": "opiskeluoikeudentyyppi",
                "koodistoVersio": 1
            },
            "oid": "1.2.246.562.15.15736644699",
            "oppilaitos": {
                "oid": "1.2.246.562.10.52251087186",
                "oppilaitosnumero": {
                    "koodiarvo": "10105",
                    "nimi": {
                        "fi": "Stadin ammatti- ja aikuisopisto"
                    },
                    "lyhytNimi": {
                        "fi": "Stadin ammatti- ja aikuisopisto"
                    },
                    "koodistoUri": "oppilaitosnumero",
                    "koodistoVersio": 1
                },
                "nimi": {
                    "fi": "Stadin ammatti- ja aikuisopisto"
                },
                "kotipaikka": {
                    "koodiarvo": "091",
                    "nimi": {
                        "fi": "Helsinki",
                        "sv": "Helsingfors"
                    },
                    "koodistoUri": "kunta",
                    "koodistoVersio": 2
                }
            },
            "tila": {
                "opiskeluoikeusJaksot": [
                    {
                        "tila": {
                            "koodiarvo": "lasna",
                            "nimi": {
                                "fi": "Läsnä",
                                "sv": "Närvarande",
                                "en": "Present"
                            },
                            "koodistoUri": "koskiopiskeluoikeudentila",
                            "koodistoVersio": 1
                        },
                        "alku": "2018-10-11",
                        "opiskeluoikeusPäättynyt": false
                    }
                ]
            },
            "suoritukset": [
                {
                    "tyyppi": {
                        "koodiarvo": "ammatillinentutkinto",
                        "nimi": {
                            "fi": "Ammatillinen tutkinto",
                            "sv": "Yrkesinriktad examen",
                            "en": "Vocational education  qualification"
                        },
                        "koodistoUri": "suorituksentyyppi",
                        "koodistoVersio": 1
                    }
                }
            ]
        }
    ],
    "suostumuksenPaattymispaiva": "2070-01-01"
}
]]>
      </kns1:opintoOikeudet>
    </kns1:opintoOikeudetServiceResponse>
  </soapenv:Body>
</soapenv:Envelope>`;

function testSoapResponseParser() {
    const parser = new SoapResponseParser();

    // Call the parseXmlResponse method
    const result = parser.parseXmlResponse(xmlContent);

    console.log('Parsed Data:', result.data); // Debugging: Output the parsed data

    assert.ok(result.data, 'The parser should return a non-empty result.');

    const parsedData = JSON.parse(result.data);
    assert.strictEqual(parsedData.henkilö.oid, '1.2.246.562.24.69337840275', 'The henkilö oid should match.');
    assert.strictEqual(parsedData.opiskeluoikeudet[0].tyyppi.koodiarvo, 'lukiokoulutus', 'The koodiarvo should match.');

    console.log('All tests passed!');
}

// Run the test
testSoapResponseParser();
