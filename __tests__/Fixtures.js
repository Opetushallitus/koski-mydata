/* eslint-disable max-len */

export const mockSecrets = {
    hsl: {
        username: 'palveluvayla_hsl_mydata',
        password: 'mock',
    },
    frank: {
        username: 'palveluvayla_frank_mydata',
        password: 'mock',
    },
};

export const oppija = {
    henkilö: {
        oid: '1.2.246.562.24.92333381381',
        hetu: '120496-ABC1',
        syntymäaika: '1996-04-12',
        etunimet: 'Aarne',
        kutsumanimi: 'Aarne',
        sukunimi: 'Ammattilainen1',
        äidinkieli: {
            koodiarvo: 'FI',
            nimi: { fi: 'suomi', sv: 'finska', en: 'Finnish' },
            lyhytNimi: { fi: 'suomi', sv: 'finska', en: 'Finnish' },
            koodistoUri: 'kieli',
            koodistoVersio: 1,
        },
        kansalaisuus: [
            {
                koodiarvo: '246',
                koodistoUri: 'maatjavaltiot2',
                koodistoVersio: 1,
            },
        ],
        turvakielto: false,
    },
    opiskeluoikeudet: [{
        arvioituPäättymispäivä: '2020-05-01',
        lisätiedot: {
            osaAikaisuusjaksot: [
                {
                    alku: '2018-05-08',
                    osaAikaisuus: 50,
                },
                {
                    alku: '2019-05-08',
                    osaAikaisuus: 80,
                },
            ],
        },
        oppilaitos: {
            nimi: {
                fi: 'Lappeen koulu',
            },
            oppilaitosnumero: {
                koodiarvo: '03829',
            },
        },
        sisältyyOpiskeluoikeuteen: {
            oppilaitos: {
                oid: '1.2.246.562.10.52251087186',
            },
        },
        suoritukset: [
            {
                järjestämismuodot: [
                    {
                        järjestämismuoto: {
                            tunniste: {
                                koodiarvo: '20',
                            },
                        },
                    },
                ],
                koulutussopimukset: [
                    {
                        työssäoppimispaikka: {
                            fi: 'McDonalds',
                        },
                    },
                ],
                osaamisenHankkimistavat: [
                    {
                        osaamisenHankkimistapa: {
                            tunniste: {
                                koodiarvo: 'oppisopimus',
                            },
                        },
                    },
                ],
            },
        ],
        tila: {
            opiskeluoikeusjaksot: [
                {
                    alku: '2008-08-15',
                    tila: {
                        koodiarvo: 'lasna',
                        koodistoUri: 'koskiopiskeluoikeudentila',
                        koodistoVersio: 1,
                        nimi: {
                            fi: 'Läsnä',
                            sv: 'Närvarande',
                        },
                    },
                },
                {
                    alku: '2016-06-04',
                    tila: {
                        koodiarvo: 'valmistunut',
                        koodistoUri: 'koskiopiskeluoikeudentila',
                        koodistoVersio: 1,
                        nimi: {
                            fi: 'Valmistunut',
                            sv: 'Utexaminerad',
                        },
                    },
                },
            ],
        },
        tyyppi: {
            koodiarvo: 'korkeakoulutus',
            koodistoUri: 'opiskeluoikeudentyyppi',
        },
    }],
};

export const entinenEsiopiskelija = {
    henkilö: {
        oid: '1.2.246.562.24.26738004585',
        hetu: '130620-4884',
        syntymäaika: '1920-06-13',
        etunimet: 'Aarne',
        kutsumanimi: 'Aarne',
        sukunimi: 'Ammattilainen',
        turvakielto: false,
    },
    opiskeluoikeudet: [
        {
            oid: '1.2.246.562.15.47355739765',
            versionumero: 1,
            aikaleima: '2018-10-04T13:42:11.958273',
            oppilaitos: {
                oid: '1.2.246.562.10.52251087186',
                oppilaitosnumero: {
                    koodiarvo: '10105',
                    nimi: {
                        fi: 'Stadin ammattiopisto',
                    },
                    lyhytNimi: {
                        fi: 'Stadin ammattiopisto',
                    },
                    koodistoUri: 'oppilaitosnumero',
                    koodistoVersio: 1,
                },
                nimi: {
                    fi: 'Stadin ammattiopisto',
                },
                kotipaikka: {
                    koodiarvo: '091',
                    nimi: {
                        fi: 'Helsinki',
                        sv: 'Helsingfors',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 1,
                },
            },
            koulutustoimija: {
                oid: '1.2.246.562.10.346830761110',
                nimi: {
                    fi: 'Helsingin kaupunki',
                    sv: 'Helsingfors stad',
                },
                yTunnus: '0201256-6',
                kotipaikka: {
                    koodiarvo: '091',
                    nimi: {
                        fi: 'Helsinki',
                        sv: 'Helsingfors',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 1,
                },
            },
            arvioituPäättymispäivä: '2019-05-31',
            tila: {
                opiskeluoikeusjaksot: [
                    {
                        alku: '2016-09-01',
                        tila: {
                            koodiarvo: 'lasna',
                            nimi: {
                                fi: 'Läsnä',
                                sv: 'Närvarande',
                            },
                            koodistoUri: 'koskiopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                ],
            },
            suoritukset: [
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '361902',
                            nimi: {
                                fi: 'Luonto- ja ympäristöalan perustutkinto',
                                sv: 'Grundexamen i natur och miljö',
                                en: 'Nat., Environm. Protection, VQ',
                            },
                            lyhytNimi: {
                                fi: 'Luonto- ja ympär.alan perust.',
                                sv: 'Grundexamen i natur och miljö',
                                en: 'Natural and Environmental Protection, Vocational Qualification',
                            },
                            koodistoUri: 'koulutus',
                            koodistoVersio: 6,
                        },
                        perusteenDiaarinumero: '62/011/2014',
                        perusteenNimi: {
                            fi: 'Luonto- ja ympäristöalan perustutkinto',
                            sv: 'Grundexamen i natur och miljö',
                        },
                        koulutustyyppi: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'Ammatillinen perustutkinto',
                                sv: 'yrkesinriktad grundexamen',
                            },
                            lyhytNimi: {
                                fi: 'Ammatillinen perustutkinto',
                                sv: 'yrkesinriktad grundexamen',
                            },
                            koodistoUri: 'koulutustyyppi',
                            koodistoVersio: 2,
                        },
                    },
                    suoritustapa: {
                        koodiarvo: 'ops',
                        nimi: {
                            fi: 'Ammatillinen perustutkinto',
                            sv: 'Läroplansbaserad',
                            en: 'Opetussuunnitelman mukainen',
                        },
                        lyhytNimi: {
                            fi: 'ops',
                            sv: 'ops',
                            en: 'ops',
                        },
                        koodistoUri: 'ammatillisentutkinnonsuoritustapa',
                        koodistoVersio: 1,
                    },
                    tutkintonimike: [
                        {
                            koodiarvo: '10083',
                            nimi: {
                                fi: 'Ympäristönhoitaja',
                                sv: 'Miljövårdare',
                            },
                            lyhytNimi: {
                                fi: 'Ympäristönhoitaja',
                                sv: 'Miljövårdare',
                            },
                            koodistoUri: 'tutkintonimikkeet',
                            koodistoVersio: 2,
                        },
                    ],
                    osaamisala: [
                        {
                            osaamisala: {
                                koodiarvo: '1590',
                                nimi: {
                                    fi: 'Ympäristöalan osaamisala',
                                    sv: 'Kompetensområdet för miljö',
                                },
                                lyhytNimi: {
                                    fi: 'Ympäristöalan osaamisala',
                                    sv: 'Kompetensområdet för miljö',
                                },
                                koodistoUri: 'osaamisala',
                                koodistoVersio: 3,
                            },
                        },
                    ],
                    toimipiste: {
                        oid: '1.2.246.562.10.42456023292',
                        nimi: {
                            fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                        },
                        kotipaikka: {
                            koodiarvo: '091',
                            nimi: {
                                fi: 'Helsinki',
                                sv: 'Helsingfors',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 1,
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    järjestämismuodot: [
                        {
                            alku: '2017-09-01',
                            järjestämismuoto: {
                                tunniste: {
                                    koodiarvo: '10',
                                    nimi: {
                                        fi: 'Koulutuksen järjestäminen lähiopetuksena, etäopetuksena tai työpaikalla',
                                        sv: 'Att ordna utbildningen som när-, distansundervisning eller på en arbetsplats',
                                    },
                                    koodistoUri: 'jarjestamismuoto',
                                    koodistoVersio: 1,
                                },
                            },
                        },
                    ],
                    työssäoppimisjaksot: [
                        {
                            alku: '2018-01-01',
                            loppu: '2018-03-15',
                            työssäoppimispaikka: {
                                fi: 'Sortti-asema',
                            },
                            paikkakunta: {
                                koodiarvo: '179',
                                nimi: {
                                    fi: 'Jyväskylä',
                                    sv: 'Jyväskylä',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 1,
                            },
                            maa: {
                                koodiarvo: '246',
                                nimi: {
                                    fi: 'Suomi',
                                    sv: 'Finland',
                                    en: 'Finland',
                                },
                                lyhytNimi: {
                                    fi: 'FI',
                                    sv: 'FI',
                                    en: 'FI',
                                },
                                koodistoUri: 'maatjavaltiot2',
                                koodistoVersio: 1,
                            },
                            työtehtävät: {
                                fi: 'Toimi harjoittelijana Sortti-asemalla',
                            },
                            laajuus: {
                                arvo: 5,
                                yksikkö: {
                                    koodiarvo: '6',
                                    nimi: {
                                        fi: 'osaamispistettä',
                                        sv: 'kompetenspoäng',
                                        en: 'ECVET competence points',
                                    },
                                    lyhytNimi: {
                                        fi: 'osp',
                                        sv: 'kp',
                                        en: 'competence points',
                                    },
                                    koodistoUri: 'opintojenlaajuusyksikko',
                                    koodistoVersio: 1,
                                },
                            },
                        },
                    ],
                    osasuoritukset: [
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '100431',
                                    nimi: {
                                        fi: 'Kestävällä tavalla toimiminen',
                                        sv: 'Hållbar verksamhet',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kestävällä tavalla toimiminen',
                                        sv: 'Hållbar verksamhet',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                                laajuus: {
                                    arvo: 40,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Ammatilliset tutkinnon osat',
                                    sv: 'Yrkesinriktade examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            toimipiste: {
                                oid: '1.2.246.562.10.42456023292',
                                nimi: {
                                    fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                                },
                                kotipaikka: {
                                    koodiarvo: '091',
                                    nimi: {
                                        fi: 'Helsinki',
                                        sv: 'Helsingfors',
                                    },
                                    koodistoUri: 'kunta',
                                    koodistoVersio: 1,
                                },
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '100432',
                                    nimi: {
                                        fi: 'Ympäristön hoitaminen',
                                        sv: 'Miljövård',
                                    },
                                    lyhytNimi: {
                                        fi: 'Ympäristön hoitaminen',
                                        sv: 'Miljövård',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                                laajuus: {
                                    arvo: 35,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Ammatilliset tutkinnon osat',
                                    sv: 'Yrkesinriktade examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            toimipiste: {
                                oid: '1.2.246.562.10.42456023292',
                                nimi: {
                                    fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                                },
                                kotipaikka: {
                                    koodiarvo: '091',
                                    nimi: {
                                        fi: 'Helsinki',
                                        sv: 'Helsingfors',
                                    },
                                    koodistoUri: 'kunta',
                                    koodistoVersio: 1,
                                },
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    hyväksytty: true,
                                },
                            ],
                            näyttö: {
                                kuvaus: {
                                    fi: 'Muksulan päiväkodin ympäristövaikutusten arvioiminen ja ympäristön kunnostustöiden\ntekeminen sekä mittauksien tekeminen ja näytteiden ottaminen',
                                },
                                suorituspaikka: {
                                    tunniste: {
                                        koodiarvo: '1',
                                        nimi: {
                                            fi: 'työpaikka',
                                            sv: 'arbetsplats',
                                        },
                                        koodistoUri: 'ammatillisennaytonsuorituspaikka',
                                        koodistoVersio: 1,
                                    },
                                    kuvaus: {
                                        fi: 'Muksulan päiväkoti, Kaarinan kunta',
                                    },
                                },
                                suoritusaika: {
                                    alku: '2016-02-01',
                                    loppu: '2016-02-01',
                                },
                                työssäoppimisenYhteydessä: false,
                                arviointi: {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    arvioitsijat: [
                                        {
                                            nimi: 'Jaana Arstila',
                                            ntm: true,
                                        },
                                        {
                                            nimi: 'Pekka Saurmann',
                                            ntm: true,
                                        },
                                        {
                                            nimi: 'Juhani Mykkänen',
                                            ntm: false,
                                        },
                                    ],
                                    arviointikohteet: [
                                        {
                                            tunniste: {
                                                koodiarvo: '1',
                                                nimi: {
                                                    fi: 'Työprosessin hallinta',
                                                    sv: 'Behärskande av arbetsprocessen',
                                                },
                                                koodistoUri: 'ammatillisennaytonarviointikohde',
                                                koodistoVersio: 1,
                                            },
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                        },
                                        {
                                            tunniste: {
                                                koodiarvo: '2',
                                                nimi: {
                                                    fi: 'Työmenetelmien, -välineiden ja materiaalin hallinta',
                                                    sv: 'Behärskande av arbetsmetoder, -redskap och material',
                                                },
                                                koodistoUri: 'ammatillisennaytonarviointikohde',
                                                koodistoVersio: 1,
                                            },
                                            arvosana: {
                                                koodiarvo: '2',
                                                nimi: {
                                                    fi: 'hyvä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'H2',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                        },
                                        {
                                            tunniste: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'Työn perustana olevan tiedon hallinta',
                                                    sv: 'Behärskande av den kunskap som ligger till grund för arbetet',
                                                },
                                                koodistoUri: 'ammatillisennaytonarviointikohde',
                                                koodistoVersio: 1,
                                            },
                                            arvosana: {
                                                koodiarvo: '2',
                                                nimi: {
                                                    fi: 'hyvä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'H2',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                        },
                                        {
                                            tunniste: {
                                                koodiarvo: '4',
                                                nimi: {
                                                    fi: 'Elinikäisen oppimisen avaintaidot',
                                                    sv: 'Nyckelkompetenser för livslångt lärande',
                                                },
                                                koodistoUri: 'ammatillisennaytonarviointikohde',
                                                koodistoVersio: 1,
                                            },
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    ],
                                    arvioinnistaPäättäneet: [
                                        {
                                            koodiarvo: '1',
                                            nimi: {
                                                fi: 'Opettaja',
                                                sv: 'Lärare',
                                            },
                                            koodistoUri: 'ammatillisennaytonarvioinnistapaattaneet',
                                            koodistoVersio: 1,
                                        },
                                    ],
                                    arviointikeskusteluunOsallistuneet: [
                                        {
                                            koodiarvo: '1',
                                            nimi: {
                                                fi: 'Opettaja',
                                                sv: 'Lärare',
                                            },
                                            koodistoUri: 'ammatillisennaytonarviointikeskusteluunosallistuneet',
                                            koodistoVersio: 1,
                                        },
                                        {
                                            koodiarvo: '4',
                                            nimi: {
                                                fi: 'Itsenäinen ammatinharjoittaja',
                                                sv: 'Självständig yrkesutövare',
                                            },
                                            koodistoUri: 'ammatillisennaytonarviointikeskusteluunosallistuneet',
                                            koodistoVersio: 1,
                                        },
                                    ],
                                    hyväksytty: true,
                                },
                            },
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '100439',
                                    nimi: {
                                        fi: 'Uusiutuvien energialähteiden hyödyntäminen',
                                        sv: 'Utnyttjande av förnybara energikällor',
                                    },
                                    lyhytNimi: {
                                        fi: 'Uusiutuvien energialähteiden hyödyntäminen',
                                        sv: 'Utnyttjande av förnybara energikällor',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                                laajuus: {
                                    arvo: 15,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Ammatilliset tutkinnon osat',
                                    sv: 'Yrkesinriktade examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            toimipiste: {
                                oid: '1.2.246.562.10.42456023292',
                                nimi: {
                                    fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                                },
                                kotipaikka: {
                                    koodiarvo: '091',
                                    nimi: {
                                        fi: 'Helsinki',
                                        sv: 'Helsingfors',
                                    },
                                    koodistoUri: 'kunta',
                                    koodistoVersio: 1,
                                },
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '100442',
                                    nimi: {
                                        fi: 'Ulkoilureittien rakentaminen ja hoitaminen',
                                        sv: 'Anläggning och underhåll av friluftsleder',
                                    },
                                    lyhytNimi: {
                                        fi: 'Ulkoilureittien rakentaminen ja hoitaminen',
                                        sv: 'Anläggning och underhåll av friluftsleder',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                                laajuus: {
                                    arvo: 15,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Ammatilliset tutkinnon osat',
                                    sv: 'Yrkesinriktade examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            toimipiste: {
                                oid: '1.2.246.562.10.42456023292',
                                nimi: {
                                    fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                                },
                                kotipaikka: {
                                    koodiarvo: '091',
                                    nimi: {
                                        fi: 'Helsinki',
                                        sv: 'Helsingfors',
                                    },
                                    koodistoUri: 'kunta',
                                    koodistoVersio: 1,
                                },
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '100443',
                                    nimi: {
                                        fi: 'Kulttuuriympäristöjen kunnostaminen ja hoitaminen',
                                        sv: 'Iståndsättning och vård av kulturmiljöer',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kulttuuriympäristöjen kunnostaminen ja hoitaminen',
                                        sv: 'Iståndsättning och vård av kulturmiljöer',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                                laajuus: {
                                    arvo: 15,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Ammatilliset tutkinnon osat',
                                    sv: 'Yrkesinriktade examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            toimipiste: {
                                oid: '1.2.246.562.10.42456023292',
                                nimi: {
                                    fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                                },
                                kotipaikka: {
                                    koodiarvo: '091',
                                    nimi: {
                                        fi: 'Helsinki',
                                        sv: 'Helsingfors',
                                    },
                                    koodistoUri: 'kunta',
                                    koodistoVersio: 1,
                                },
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    hyväksytty: true,
                                },
                            ],
                            näyttö: {
                                kuvaus: {
                                    fi: 'Sastamalan kunnan kulttuuriympäristöohjelmaan liittyvän Wanhan myllyn lähiympäristön\nkasvillisuuden kartoittamisen sekä ennallistamisen suunnittelu ja toteutus',
                                },
                                suorituspaikka: {
                                    tunniste: {
                                        koodiarvo: '1',
                                        nimi: {
                                            fi: 'työpaikka',
                                            sv: 'arbetsplats',
                                        },
                                        koodistoUri: 'ammatillisennaytonsuorituspaikka',
                                        koodistoVersio: 1,
                                    },
                                    kuvaus: {
                                        fi: 'Sastamalan kunta',
                                    },
                                },
                                suoritusaika: {
                                    alku: '2016-03-01',
                                    loppu: '2016-03-01',
                                },
                                työssäoppimisenYhteydessä: false,
                                arviointi: {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    arvioitsijat: [
                                        {
                                            nimi: 'Jaana Arstila',
                                            ntm: true,
                                        },
                                        {
                                            nimi: 'Pekka Saurmann',
                                            ntm: true,
                                        },
                                        {
                                            nimi: 'Juhani Mykkänen',
                                            ntm: false,
                                        },
                                    ],
                                    arviointikohteet: [
                                        {
                                            tunniste: {
                                                koodiarvo: '1',
                                                nimi: {
                                                    fi: 'Työprosessin hallinta',
                                                    sv: 'Behärskande av arbetsprocessen',
                                                },
                                                koodistoUri: 'ammatillisennaytonarviointikohde',
                                                koodistoVersio: 1,
                                            },
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                        },
                                        {
                                            tunniste: {
                                                koodiarvo: '2',
                                                nimi: {
                                                    fi: 'Työmenetelmien, -välineiden ja materiaalin hallinta',
                                                    sv: 'Behärskande av arbetsmetoder, -redskap och material',
                                                },
                                                koodistoUri: 'ammatillisennaytonarviointikohde',
                                                koodistoVersio: 1,
                                            },
                                            arvosana: {
                                                koodiarvo: '2',
                                                nimi: {
                                                    fi: 'hyvä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'H2',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                        },
                                        {
                                            tunniste: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'Työn perustana olevan tiedon hallinta',
                                                    sv: 'Behärskande av den kunskap som ligger till grund för arbetet',
                                                },
                                                koodistoUri: 'ammatillisennaytonarviointikohde',
                                                koodistoVersio: 1,
                                            },
                                            arvosana: {
                                                koodiarvo: '2',
                                                nimi: {
                                                    fi: 'hyvä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'H2',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                        },
                                        {
                                            tunniste: {
                                                koodiarvo: '4',
                                                nimi: {
                                                    fi: 'Elinikäisen oppimisen avaintaidot',
                                                    sv: 'Nyckelkompetenser för livslångt lärande',
                                                },
                                                koodistoUri: 'ammatillisennaytonarviointikohde',
                                                koodistoVersio: 1,
                                            },
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    ],
                                    arvioinnistaPäättäneet: [
                                        {
                                            koodiarvo: '1',
                                            nimi: {
                                                fi: 'Opettaja',
                                                sv: 'Lärare',
                                            },
                                            koodistoUri: 'ammatillisennaytonarvioinnistapaattaneet',
                                            koodistoVersio: 1,
                                        },
                                    ],
                                    arviointikeskusteluunOsallistuneet: [
                                        {
                                            koodiarvo: '1',
                                            nimi: {
                                                fi: 'Opettaja',
                                                sv: 'Lärare',
                                            },
                                            koodistoUri: 'ammatillisennaytonarviointikeskusteluunosallistuneet',
                                            koodistoVersio: 1,
                                        },
                                        {
                                            koodiarvo: '4',
                                            nimi: {
                                                fi: 'Itsenäinen ammatinharjoittaja',
                                                sv: 'Självständig yrkesutövare',
                                            },
                                            koodistoUri: 'ammatillisennaytonarviointikeskusteluunosallistuneet',
                                            koodistoVersio: 1,
                                        },
                                    ],
                                    hyväksytty: true,
                                },
                            },
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '100447',
                                    nimi: {
                                        fi: 'Vesistöjen kunnostaminen ja hoitaminen',
                                        sv: 'Iståndsättning och vård av vattendrag',
                                    },
                                    lyhytNimi: {
                                        fi: 'Vesistöjen kunnostaminen ja hoitaminen',
                                        sv: 'Iståndsättning och vård av vattendrag',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                                laajuus: {
                                    arvo: 15,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Ammatilliset tutkinnon osat',
                                    sv: 'Yrkesinriktade examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            toimipiste: {
                                oid: '1.2.246.562.10.42456023292',
                                nimi: {
                                    fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                                },
                                kotipaikka: {
                                    koodiarvo: '091',
                                    nimi: {
                                        fi: 'Helsinki',
                                        sv: 'Helsingfors',
                                    },
                                    koodistoUri: 'kunta',
                                    koodistoVersio: 1,
                                },
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: 'Hyväksytty',
                                        nimi: {
                                            fi: 'Hyväksytty',
                                        },
                                        lyhytNimi: {
                                            fi: 'Hyväksytty',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinenhyvaksyttyhylatty',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    hyväksytty: true,
                                },
                            ],
                            lisätiedot: [
                                {
                                    tunniste: {
                                        koodiarvo: 'muutosarviointiasteikossa',
                                        nimi: {
                                            fi: 'Muutos arviointiasteikossa',
                                            sv: 'Ändring i bedömningsskalan',
                                        },
                                        koodistoUri: 'ammatillisentutkinnonosanlisatieto',
                                        koodistoVersio: 1,
                                    },
                                    kuvaus: {
                                        fi: 'Tutkinnon osa on koulutuksen järjestäjän päätöksellä arvioitu asteikolla hyväksytty/hylätty.',
                                    },
                                },
                            ],
                            näyttö: {
                                kuvaus: {
                                    fi: 'Uimarin järven tilan arviointi ja kunnostus',
                                },
                                suorituspaikka: {
                                    tunniste: {
                                        koodiarvo: '1',
                                        nimi: {
                                            fi: 'työpaikka',
                                            sv: 'arbetsplats',
                                        },
                                        koodistoUri: 'ammatillisennaytonsuorituspaikka',
                                        koodistoVersio: 1,
                                    },
                                    kuvaus: {
                                        fi: 'Vesipojat Oy',
                                    },
                                },
                                suoritusaika: {
                                    alku: '2016-04-01',
                                    loppu: '2016-04-01',
                                },
                                työssäoppimisenYhteydessä: false,
                                arviointi: {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    arvioitsijat: [
                                        {
                                            nimi: 'Jaana Arstila',
                                            ntm: true,
                                        },
                                        {
                                            nimi: 'Pekka Saurmann',
                                            ntm: true,
                                        },
                                        {
                                            nimi: 'Juhani Mykkänen',
                                            ntm: false,
                                        },
                                    ],
                                    arviointikohteet: [
                                        {
                                            tunniste: {
                                                koodiarvo: '1',
                                                nimi: {
                                                    fi: 'Työprosessin hallinta',
                                                    sv: 'Behärskande av arbetsprocessen',
                                                },
                                                koodistoUri: 'ammatillisennaytonarviointikohde',
                                                koodistoVersio: 1,
                                            },
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                        },
                                        {
                                            tunniste: {
                                                koodiarvo: '2',
                                                nimi: {
                                                    fi: 'Työmenetelmien, -välineiden ja materiaalin hallinta',
                                                    sv: 'Behärskande av arbetsmetoder, -redskap och material',
                                                },
                                                koodistoUri: 'ammatillisennaytonarviointikohde',
                                                koodistoVersio: 1,
                                            },
                                            arvosana: {
                                                koodiarvo: '2',
                                                nimi: {
                                                    fi: 'hyvä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'H2',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                        },
                                        {
                                            tunniste: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'Työn perustana olevan tiedon hallinta',
                                                    sv: 'Behärskande av den kunskap som ligger till grund för arbetet',
                                                },
                                                koodistoUri: 'ammatillisennaytonarviointikohde',
                                                koodistoVersio: 1,
                                            },
                                            arvosana: {
                                                koodiarvo: '2',
                                                nimi: {
                                                    fi: 'hyvä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'H2',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                        },
                                        {
                                            tunniste: {
                                                koodiarvo: '4',
                                                nimi: {
                                                    fi: 'Elinikäisen oppimisen avaintaidot',
                                                    sv: 'Nyckelkompetenser för livslångt lärande',
                                                },
                                                koodistoUri: 'ammatillisennaytonarviointikohde',
                                                koodistoVersio: 1,
                                            },
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    ],
                                    arvioinnistaPäättäneet: [
                                        {
                                            koodiarvo: '1',
                                            nimi: {
                                                fi: 'Opettaja',
                                                sv: 'Lärare',
                                            },
                                            koodistoUri: 'ammatillisennaytonarvioinnistapaattaneet',
                                            koodistoVersio: 1,
                                        },
                                    ],
                                    arviointikeskusteluunOsallistuneet: [
                                        {
                                            koodiarvo: '1',
                                            nimi: {
                                                fi: 'Opettaja',
                                                sv: 'Lärare',
                                            },
                                            koodistoUri: 'ammatillisennaytonarviointikeskusteluunosallistuneet',
                                            koodistoVersio: 1,
                                        },
                                        {
                                            koodiarvo: '4',
                                            nimi: {
                                                fi: 'Itsenäinen ammatinharjoittaja',
                                                sv: 'Självständig yrkesutövare',
                                            },
                                            koodistoUri: 'ammatillisennaytonarviointikeskusteluunosallistuneet',
                                            koodistoVersio: 1,
                                        },
                                    ],
                                    hyväksytty: true,
                                },
                            },
                            osasuoritukset: [
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'htm',
                                            nimi: {
                                                fi: 'Hoitotarpeen määrittäminen',
                                            },
                                        },
                                        kuvaus: {
                                            fi: 'Hoitotarpeen määrittäminen',
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: 'Hyväksytty',
                                                nimi: {
                                                    fi: 'Hyväksytty',
                                                },
                                                lyhytNimi: {
                                                    fi: 'Hyväksytty',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinenhyvaksyttyhylatty',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2017-03-20',
                                            arvioitsijat: [
                                                {
                                                    nimi: 'Jaana Arstila',
                                                },
                                                {
                                                    nimi: 'Pekka Saurmann',
                                                },
                                                {
                                                    nimi: 'Juhani Mykkänen',
                                                },
                                            ],
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosaapienempikokonaisuus',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osaa pienempi kokonaisuus',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '101053',
                                    nimi: {
                                        fi: 'Viestintä- ja vuorovaikutusosaaminen',
                                        sv: 'Kunnande i kommunikation och interaktion',
                                    },
                                    lyhytNimi: {
                                        fi: 'Viestintä- ja vuorovaikutusosaaminen',
                                        sv: 'Kunnande i kommunikation och interaktion',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                                laajuus: {
                                    arvo: 11,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'Yhteiset tutkinnon osat',
                                    sv: 'Gemensamma examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            toimipiste: {
                                oid: '1.2.246.562.10.42456023292',
                                nimi: {
                                    fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                                },
                                kotipaikka: {
                                    koodiarvo: '091',
                                    nimi: {
                                        fi: 'Helsinki',
                                        sv: 'Helsingfors',
                                    },
                                    koodistoUri: 'kunta',
                                    koodistoVersio: 1,
                                },
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    hyväksytty: true,
                                },
                            ],
                            osasuoritukset: [
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'AI',
                                            nimi: {
                                                fi: 'Äidinkieli',
                                                sv: 'Modersmål',
                                            },
                                            lyhytNimi: {
                                                fi: 'Äidinkieli',
                                            },
                                            koodistoUri: 'ammatillisenoppiaineet',
                                            koodistoVersio: 1,
                                        },
                                        kieli: {
                                            koodiarvo: 'AI1',
                                            nimi: {
                                                fi: 'Suomen kieli ja kirjallisuus',
                                            },
                                            koodistoUri: 'oppiaineaidinkielijakirjallisuus',
                                            koodistoVersio: 1,
                                        },
                                        pakollinen: true,
                                        laajuus: {
                                            arvo: 5,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2018-10-20',
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'AI',
                                            nimi: {
                                                fi: 'Äidinkieli',
                                                sv: 'Modersmål',
                                            },
                                            lyhytNimi: {
                                                fi: 'Äidinkieli',
                                            },
                                            koodistoUri: 'ammatillisenoppiaineet',
                                            koodistoVersio: 1,
                                        },
                                        kieli: {
                                            koodiarvo: 'AI1',
                                            nimi: {
                                                fi: 'Suomen kieli ja kirjallisuus',
                                            },
                                            koodistoUri: 'oppiaineaidinkielijakirjallisuus',
                                            koodistoVersio: 1,
                                        },
                                        pakollinen: false,
                                        laajuus: {
                                            arvo: 3,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2018-10-20',
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'TK1',
                                            nimi: {
                                                fi: 'Toinen kotimainen kieli, ruotsi',
                                                sv: 'Andra inhemska språket, svenska',
                                            },
                                            lyhytNimi: {
                                                fi: 'Toinen kotimainen kieli, ruotsi',
                                            },
                                            koodistoUri: 'ammatillisenoppiaineet',
                                            koodistoVersio: 1,
                                        },
                                        kieli: {
                                            koodiarvo: 'SV',
                                            nimi: {
                                                fi: 'ruotsi',
                                                sv: 'svenska',
                                                en: 'Swedish',
                                            },
                                            lyhytNimi: {
                                                fi: 'ruotsi',
                                                sv: 'svenska',
                                                en: 'Swedish',
                                            },
                                            koodistoUri: 'kielivalikoima',
                                            koodistoVersio: 1,
                                        },
                                        pakollinen: true,
                                        laajuus: {
                                            arvo: 1,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2018-10-20',
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'VK',
                                            nimi: {
                                                fi: 'Vieraat kielet',
                                                sv: 'Främmande språk',
                                            },
                                            lyhytNimi: {
                                                fi: 'Vieraat kielet',
                                            },
                                            koodistoUri: 'ammatillisenoppiaineet',
                                            koodistoVersio: 1,
                                        },
                                        kieli: {
                                            koodiarvo: 'EN',
                                            nimi: {
                                                fi: 'englanti',
                                                sv: 'engelska',
                                                en: 'English',
                                            },
                                            lyhytNimi: {
                                                fi: 'englanti',
                                                sv: 'engelska',
                                                en: 'English',
                                            },
                                            koodistoUri: 'kielivalikoima',
                                            koodistoVersio: 1,
                                        },
                                        pakollinen: true,
                                        laajuus: {
                                            arvo: 2,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2018-10-20',
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'VVTK',
                                            nimi: {
                                                fi: 'Viestintä ja vuorovaikutus toisella kotimaisella kielellä',
                                                sv: 'Kommunikation och interaktion på det andra inhemska språket',
                                            },
                                            lyhytNimi: {
                                                fi: 'viestintä ja vuorovaikutus toisella kotimaisella kielellä',
                                            },
                                            koodistoUri: 'ammatillisenoppiaineet',
                                            koodistoVersio: 1,
                                        },
                                        kieli: {
                                            koodiarvo: 'EN',
                                            nimi: {
                                                fi: 'englanti',
                                                sv: 'engelska',
                                                en: 'English',
                                            },
                                            lyhytNimi: {
                                                fi: 'englanti',
                                                sv: 'engelska',
                                                en: 'English',
                                            },
                                            koodistoUri: 'kielivalikoima',
                                            koodistoVersio: 1,
                                        },
                                        pakollinen: true,
                                        laajuus: {
                                            arvo: 2,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2018-10-20',
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '101054',
                                    nimi: {
                                        fi: 'Matemaattis-luonnontieteellinen osaaminen',
                                        sv: 'Kunnande i matematik och naturvetenskap',
                                    },
                                    lyhytNimi: {
                                        fi: 'Matemaattis-luonnontieteellinen osaaminen',
                                        sv: 'Kunnande i matematik och naturvetenskap',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                                laajuus: {
                                    arvo: 9,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'Yhteiset tutkinnon osat',
                                    sv: 'Gemensamma examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            toimipiste: {
                                oid: '1.2.246.562.10.42456023292',
                                nimi: {
                                    fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                                },
                                kotipaikka: {
                                    koodiarvo: '091',
                                    nimi: {
                                        fi: 'Helsinki',
                                        sv: 'Helsingfors',
                                    },
                                    koodistoUri: 'kunta',
                                    koodistoVersio: 1,
                                },
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    hyväksytty: true,
                                },
                            ],
                            lisätiedot: [
                                {
                                    tunniste: {
                                        koodiarvo: 'mukautettu',
                                        nimi: {
                                            fi: 'Arvioinnin mukauttaminen',
                                            sv: 'Anpassning av bedömningen',
                                        },
                                        koodistoUri: 'ammatillisentutkinnonosanlisatieto',
                                        koodistoVersio: 1,
                                    },
                                    kuvaus: {
                                        fi: 'Tutkinnon osan ammattitaitovaatimuksia tai osaamistavoitteita ja osaamisen arviointia on mukautettu ammatillisesta peruskoulutuksesta annetun lain (630/1998, muutos 246/2015) 19 a tai 21 §:n perusteella',
                                    },
                                },
                            ],
                            osasuoritukset: [
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'MA',
                                            nimi: {
                                                fi: 'Matematiikka',
                                            },
                                        },
                                        kuvaus: {
                                            fi: 'Matematiikan opinnot',
                                        },
                                        pakollinen: true,
                                        laajuus: {
                                            arvo: 3,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2018-10-20',
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'FK',
                                            nimi: {
                                                fi: 'Fysiikka ja kemia',
                                                sv: 'Fysik och kemi',
                                            },
                                            lyhytNimi: {
                                                fi: 'Fysiikka ja kemia',
                                            },
                                            koodistoUri: 'ammatillisenoppiaineet',
                                            koodistoVersio: 1,
                                        },
                                        pakollinen: true,
                                        laajuus: {
                                            arvo: 3,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2018-10-20',
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'TVT',
                                            nimi: {
                                                fi: 'Tieto- ja viestintätekniikka sekä sen hyödyntäminen',
                                                sv: 'Informations- och kommunikationsteknik samt användningen av den',
                                            },
                                            lyhytNimi: {
                                                fi: 'Tieto- ja viestintätekniikka sekä sen hyödyntäminen',
                                            },
                                            koodistoUri: 'ammatillisenoppiaineet',
                                            koodistoVersio: 1,
                                        },
                                        pakollinen: true,
                                        laajuus: {
                                            arvo: 3,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2018-10-20',
                                            hyväksytty: true,
                                        },
                                    ],
                                    alkamispäivä: '2018-01-01',
                                    tunnustettu: {
                                        osaaminen: {
                                            koulutusmoduuli: {
                                                tunniste: {
                                                    koodiarvo: '100238',
                                                    nimi: {
                                                        fi: 'Asennushitsaus',
                                                        sv: 'Montagesvetsning',
                                                    },
                                                    lyhytNimi: {
                                                        fi: 'Asennushitsaus',
                                                        sv: 'Montagesvetsning',
                                                    },
                                                    koodistoUri: 'tutkinnonosat',
                                                    koodistoVersio: 1,
                                                },
                                                pakollinen: true,
                                            },
                                            tyyppi: {
                                                koodiarvo: 'ammatillisentutkinnonosa',
                                                nimi: {
                                                    fi: 'Ammatillisen tutkinnon osa',
                                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                                },
                                                koodistoUri: 'suorituksentyyppi',
                                                koodistoVersio: 1,
                                            },
                                        },
                                        selite: {
                                            fi: 'Tutkinnon osa on tunnustettu Kone- ja metallialan perustutkinnosta',
                                        },
                                        rahoituksenPiirissä: false,
                                    },
                                    lisätiedot: [
                                        {
                                            tunniste: {
                                                koodiarvo: 'mukautettu',
                                                nimi: {
                                                    fi: 'Arvioinnin mukauttaminen',
                                                    sv: 'Anpassning av bedömningen',
                                                },
                                                koodistoUri: 'ammatillisentutkinnonosanlisatieto',
                                                koodistoVersio: 1,
                                            },
                                            kuvaus: {
                                                fi: 'Tutkinnon osan ammattitaitovaatimuksia tai osaamistavoitteita ja osaamisen arviointia on mukautettu ammatillisesta peruskoulutuksesta annetun lain (630/1998, muutos 246/2015) 19 a tai 21 §:n perusteella',
                                            },
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '101055',
                                    nimi: {
                                        fi: 'Yhteiskunnassa ja työelämässä tarvittava osaaminen',
                                        sv: 'Kunnande som behövs i samhället och i arbetslivet',
                                    },
                                    lyhytNimi: {
                                        fi: 'Yhteiskunnassa ja työelämässä tarvittava osaaminen',
                                        sv: 'Kunnande som behövs i samhället och i arbetslivet',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                                laajuus: {
                                    arvo: 8,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'Yhteiset tutkinnon osat',
                                    sv: 'Gemensamma examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            toimipiste: {
                                oid: '1.2.246.562.10.42456023292',
                                nimi: {
                                    fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                                },
                                kotipaikka: {
                                    koodiarvo: '091',
                                    nimi: {
                                        fi: 'Helsinki',
                                        sv: 'Helsingfors',
                                    },
                                    koodistoUri: 'kunta',
                                    koodistoVersio: 1,
                                },
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '101056',
                                    nimi: {
                                        fi: 'Sosiaalinen ja kulttuurinen osaaminen',
                                        sv: 'Socialt och kulturellt kunnande',
                                    },
                                    lyhytNimi: {
                                        fi: 'Sosiaalinen ja kulttuurinen osaaminen',
                                        sv: 'Socialt och kulturellt kunnande',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                                laajuus: {
                                    arvo: 7,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'Yhteiset tutkinnon osat',
                                    sv: 'Gemensamma examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            toimipiste: {
                                oid: '1.2.246.562.10.42456023292',
                                nimi: {
                                    fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                                },
                                kotipaikka: {
                                    koodiarvo: '091',
                                    nimi: {
                                        fi: 'Helsinki',
                                        sv: 'Helsingfors',
                                    },
                                    koodistoUri: 'kunta',
                                    koodistoVersio: 1,
                                },
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'enkku3',
                                    nimi: {
                                        fi: 'Matkailuenglanti',
                                    },
                                },
                                kuvaus: {
                                    fi: 'Matkailuenglanti',
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 5,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: 'Tutkintoa yksilöllisesti laajentavat tutkinnon osat',
                                    sv: 'Examensdelar som individuellt breddar examen',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            toimipiste: {
                                oid: '1.2.246.562.10.42456023292',
                                nimi: {
                                    fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                                },
                                kotipaikka: {
                                    koodiarvo: '091',
                                    nimi: {
                                        fi: 'Helsinki',
                                        sv: 'Helsingfors',
                                    },
                                    koodistoUri: 'kunta',
                                    koodistoVersio: 1,
                                },
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'soskultos1',
                                    nimi: {
                                        fi: 'Sosiaalinen ja kulttuurinen osaaminen',
                                    },
                                },
                                kuvaus: {
                                    fi: 'Sosiaalinen ja kulttuurinen osaaminen',
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 5,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '3',
                                nimi: {
                                    fi: 'Vapaasti valittavat tutkinnon osat',
                                    sv: 'Fritt valbara examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            toimipiste: {
                                oid: '1.2.246.562.10.42456023292',
                                nimi: {
                                    fi: 'Stadin ammattiopisto, Lehtikuusentien toimipaikka',
                                },
                                kotipaikka: {
                                    koodiarvo: '091',
                                    nimi: {
                                        fi: 'Helsinki',
                                        sv: 'Helsingfors',
                                    },
                                    koodistoUri: 'kunta',
                                    koodistoVersio: 1,
                                },
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-10-20',
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Examensdel inom en yrkesinriktad examen',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                    ],
                    tyyppi: {
                        koodiarvo: 'ammatillinentutkinto',
                        nimi: {
                            fi: 'Ammatillinen tutkinto',
                            sv: 'Yrkesinriktad examen',
                        },
                        koodistoUri: 'suorituksentyyppi',
                        koodistoVersio: 1,
                    },
                    ryhmä: 'YMP14SN',
                },
            ],
            tyyppi: {
                koodiarvo: 'ammatillinenkoulutus',
                nimi: {
                    fi: 'Ammatillinen koulutus',
                    sv: 'Yrkesutbildning',
                },
                lyhytNimi: {
                    fi: 'Ammatillinen koulutus',
                },
                koodistoUri: 'opiskeluoikeudentyyppi',
                koodistoVersio: 1,
            },
            alkamispäivä: '2016-09-01',
        },
        {
            oid: '1.2.246.562.15.60307508576',
            versionumero: 1,
            aikaleima: '2018-10-04T13:42:12.080513',
            oppilaitos: {
                oid: '1.2.246.562.10.14613773812',
                oppilaitosnumero: {
                    koodiarvo: '00204',
                    nimi: {
                        fi: 'Jyväskylän normaalikoulu',
                    },
                    lyhytNimi: {
                        fi: 'Jyväskylän normaalikoulu',
                    },
                    koodistoUri: 'oppilaitosnumero',
                    koodistoVersio: 1,
                },
                nimi: {
                    fi: 'Jyväskylän normaalikoulu',
                },
                kotipaikka: {
                    koodiarvo: '179',
                    nimi: {
                        fi: 'Jyväskylä',
                        sv: 'Jyväskylä',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 1,
                },
            },
            koulutustoimija: {
                oid: '1.2.246.562.10.77055527103',
                nimi: {
                    fi: 'Jyväskylän yliopisto',
                },
                yTunnus: '0245894-7',
                kotipaikka: {
                    koodiarvo: '179',
                    nimi: {
                        fi: 'Jyväskylä',
                        sv: 'Jyväskylä',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 1,
                },
            },
            päättymispäivä: '2016-06-04',
            tila: {
                opiskeluoikeusjaksot: [
                    {
                        alku: '2008-08-15',
                        tila: {
                            koodiarvo: 'lasna',
                            nimi: {
                                fi: 'Läsnä',
                                sv: 'Närvarande',
                            },
                            koodistoUri: 'koskiopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2016-06-04',
                        tila: {
                            koodiarvo: 'valmistunut',
                            nimi: {
                                fi: 'Valmistunut',
                                sv: 'Utexaminerad',
                            },
                            koodistoUri: 'koskiopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                ],
            },
            suoritukset: [
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '7',
                            nimi: {
                                fi: '7. vuosiluokka',
                                sv: 'Årskurs 7',
                            },
                            koodistoUri: 'perusopetuksenluokkaaste',
                            koodistoVersio: 1,
                        },
                        perusteenDiaarinumero: '104/011/2014',
                    },
                    luokka: '7C',
                    toimipiste: {
                        oid: '1.2.246.562.10.14613773812',
                        oppilaitosnumero: {
                            koodiarvo: '00204',
                            nimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            lyhytNimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Jyväskylän normaalikoulu',
                        },
                        kotipaikka: {
                            koodiarvo: '179',
                            nimi: {
                                fi: 'Jyväskylä',
                                sv: 'Jyväskylä',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 1,
                        },
                    },
                    alkamispäivä: '2013-08-15',
                    vahvistus: {
                        päivä: '2014-05-30',
                        paikkakunta: {
                            koodiarvo: '179',
                            nimi: {
                                fi: 'Jyväskylä',
                                sv: 'Jyväskylä',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 1,
                        },
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.14613773812',
                            oppilaitosnumero: {
                                koodiarvo: '00204',
                                nimi: {
                                    fi: 'Jyväskylän normaalikoulu',
                                },
                                lyhytNimi: {
                                    fi: 'Jyväskylän normaalikoulu',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            kotipaikka: {
                                koodiarvo: '179',
                                nimi: {
                                    fi: 'Jyväskylä',
                                    sv: 'Jyväskylä',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 1,
                            },
                        },
                        myöntäjäHenkilöt: [
                            {
                                nimi: 'Reijo Reksi',
                                titteli: {
                                    fi: 'rehtori',
                                },
                                organisaatio: {
                                    oid: '1.2.246.562.10.14613773812',
                                    oppilaitosnumero: {
                                        koodiarvo: '00204',
                                        nimi: {
                                            fi: 'Jyväskylän normaalikoulu',
                                        },
                                        lyhytNimi: {
                                            fi: 'Jyväskylän normaalikoulu',
                                        },
                                        koodistoUri: 'oppilaitosnumero',
                                        koodistoVersio: 1,
                                    },
                                    nimi: {
                                        fi: 'Jyväskylän normaalikoulu',
                                    },
                                    kotipaikka: {
                                        koodiarvo: '179',
                                        nimi: {
                                            fi: 'Jyväskylä',
                                            sv: 'Jyväskylä',
                                        },
                                        koodistoUri: 'kunta',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                        ],
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    jääLuokalle: true,
                    osasuoritukset: [
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'AI',
                                    nimi: {
                                        fi: 'Äidinkieli ja kirjallisuus',
                                        sv: 'Modersmålet och litteratur',
                                    },
                                    lyhytNimi: {
                                        fi: 'Äidinkieli ja kirjallisuus',
                                        sv: 'Modersmålet och litteratur',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'AI1',
                                    nimi: {
                                        fi: 'Suomen kieli ja kirjallisuus',
                                    },
                                    koodistoUri: 'oppiaineaidinkielijakirjallisuus',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                            suoritustapa: {
                                koodiarvo: 'erityinentutkinto',
                                nimi: {
                                    fi: 'Erityinen tutkinto',
                                    sv: 'Särskild examen',
                                },
                                koodistoUri: 'perusopetuksensuoritustapa',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'B1',
                                    nimi: {
                                        fi: 'B1-kieli',
                                        sv: 'B1-språk',
                                    },
                                    lyhytNimi: {
                                        fi: 'B1-kieli',
                                        sv: 'B1-språk',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'SV',
                                    nimi: {
                                        fi: 'ruotsi',
                                        sv: 'svenska',
                                        en: 'Swedish',
                                    },
                                    lyhytNimi: {
                                        fi: 'ruotsi',
                                        sv: 'svenska',
                                        en: 'Swedish',
                                    },
                                    koodistoUri: 'kielivalikoima',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'A1',
                                    nimi: {
                                        fi: 'A1-kieli',
                                        sv: 'A1-språk',
                                    },
                                    lyhytNimi: {
                                        fi: 'A1-kieli',
                                        sv: 'A1-språk',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'EN',
                                    nimi: {
                                        fi: 'englanti',
                                        sv: 'engelska',
                                        en: 'English',
                                    },
                                    lyhytNimi: {
                                        fi: 'englanti',
                                        sv: 'engelska',
                                        en: 'English',
                                    },
                                    koodistoUri: 'kielivalikoima',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KT',
                                    nimi: {
                                        fi: 'Uskonto/Elämänkatsomustieto',
                                        sv: 'Religion/Livsåskådningskunskap',
                                    },
                                    lyhytNimi: {
                                        fi: 'Uskonto',
                                        sv: 'Religion',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'HI',
                                    nimi: {
                                        fi: 'Historia',
                                        sv: 'Historia',
                                    },
                                    lyhytNimi: {
                                        fi: 'Historia',
                                        sv: 'Historia',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'YH',
                                    nimi: {
                                        fi: 'Yhteiskuntaoppi',
                                        sv: 'Samhällslära',
                                    },
                                    lyhytNimi: {
                                        fi: 'Yhteiskuntaoppi',
                                        sv: 'Samhällslära',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'MA',
                                    nimi: {
                                        fi: 'Matematiikka',
                                        sv: 'Matematik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Matematiikka',
                                        sv: 'Matematik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KE',
                                    nimi: {
                                        fi: 'Kemia',
                                        sv: 'Kemi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kemia',
                                        sv: 'Kemi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'FY',
                                    nimi: {
                                        fi: 'Fysiikka',
                                        sv: 'Fysik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Fysiikka',
                                        sv: 'Fysik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'BI',
                                    nimi: {
                                        fi: 'Biologia',
                                        sv: 'Biologi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Biologia',
                                        sv: 'Biologi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'GE',
                                    nimi: {
                                        fi: 'Maantieto',
                                        sv: 'Geografi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Maantieto',
                                        sv: 'Geografi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'MU',
                                    nimi: {
                                        fi: 'Musiikki',
                                        sv: 'Musik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Musiikki',
                                        sv: 'Musik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KU',
                                    nimi: {
                                        fi: 'Kuvataide',
                                        sv: 'Bildkonst',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kuvataide',
                                        sv: 'Bildkonst',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KO',
                                    nimi: {
                                        fi: 'Kotitalous',
                                        sv: 'Huslig ekonomi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kotitalous',
                                        sv: 'Huslig ekonomi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'TE',
                                    nimi: {
                                        fi: 'Terveystieto',
                                        sv: 'Hälsokunskap',
                                    },
                                    lyhytNimi: {
                                        fi: 'Terveystieto',
                                        sv: 'Hälsokunskap',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KS',
                                    nimi: {
                                        fi: 'Käsityö',
                                        sv: 'Slöjd',
                                    },
                                    lyhytNimi: {
                                        fi: 'Käsityö',
                                        sv: 'Slöjd',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'LI',
                                    nimi: {
                                        fi: 'Liikunta',
                                        sv: 'Gymnastik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Liikunta',
                                        sv: 'Gymnastik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: true,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '4',
                                        nimi: {
                                            fi: 'hylätty',
                                        },
                                        lyhytNimi: {
                                            fi: '4',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: false,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                    ],
                    tyyppi: {
                        koodiarvo: 'perusopetuksenvuosiluokka',
                        nimi: {
                            fi: 'Perusopetuksen vuosiluokka',
                            sv: 'Årskurs i grundläggande utbildning',
                        },
                        koodistoUri: 'suorituksentyyppi',
                        koodistoVersio: 1,
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '8',
                            nimi: {
                                fi: '8. vuosiluokka',
                                sv: 'Årskurs 8',
                            },
                            koodistoUri: 'perusopetuksenluokkaaste',
                            koodistoVersio: 1,
                        },
                        perusteenDiaarinumero: '104/011/2014',
                    },
                    luokka: '8C',
                    toimipiste: {
                        oid: '1.2.246.562.10.14613773812',
                        oppilaitosnumero: {
                            koodiarvo: '00204',
                            nimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            lyhytNimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Jyväskylän normaalikoulu',
                        },
                        kotipaikka: {
                            koodiarvo: '179',
                            nimi: {
                                fi: 'Jyväskylä',
                                sv: 'Jyväskylä',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 1,
                        },
                    },
                    alkamispäivä: '2014-08-15',
                    vahvistus: {
                        päivä: '2015-05-30',
                        paikkakunta: {
                            koodiarvo: '179',
                            nimi: {
                                fi: 'Jyväskylä',
                                sv: 'Jyväskylä',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 1,
                        },
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.14613773812',
                            oppilaitosnumero: {
                                koodiarvo: '00204',
                                nimi: {
                                    fi: 'Jyväskylän normaalikoulu',
                                },
                                lyhytNimi: {
                                    fi: 'Jyväskylän normaalikoulu',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            kotipaikka: {
                                koodiarvo: '179',
                                nimi: {
                                    fi: 'Jyväskylä',
                                    sv: 'Jyväskylä',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 1,
                            },
                        },
                        myöntäjäHenkilöt: [
                            {
                                nimi: 'Reijo Reksi',
                                titteli: {
                                    fi: 'rehtori',
                                },
                                organisaatio: {
                                    oid: '1.2.246.562.10.14613773812',
                                    oppilaitosnumero: {
                                        koodiarvo: '00204',
                                        nimi: {
                                            fi: 'Jyväskylän normaalikoulu',
                                        },
                                        lyhytNimi: {
                                            fi: 'Jyväskylän normaalikoulu',
                                        },
                                        koodistoUri: 'oppilaitosnumero',
                                        koodistoVersio: 1,
                                    },
                                    nimi: {
                                        fi: 'Jyväskylän normaalikoulu',
                                    },
                                    kotipaikka: {
                                        koodiarvo: '179',
                                        nimi: {
                                            fi: 'Jyväskylä',
                                            sv: 'Jyväskylä',
                                        },
                                        koodistoUri: 'kunta',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                        ],
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    muutSuorituskielet: [
                        {
                            koodiarvo: 'SL',
                            nimi: {
                                fi: 'sloveeni',
                                sv: 'slovenska',
                                en: 'Slovenian',
                            },
                            lyhytNimi: {
                                fi: 'sloveeni',
                                sv: 'slovenska',
                                en: 'Slovenian',
                            },
                            koodistoUri: 'kieli',
                            koodistoVersio: 1,
                        },
                    ],
                    kielikylpykieli: {
                        koodiarvo: 'SV',
                        nimi: {
                            fi: 'ruotsi',
                            sv: 'svenska',
                            en: 'Swedish',
                        },
                        lyhytNimi: {
                            fi: 'ruotsi',
                            sv: 'svenska',
                            en: 'Swedish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    jääLuokalle: false,
                    käyttäytymisenArvio: {
                        arvosana: {
                            koodiarvo: 'S',
                            nimi: {
                                fi: 'hyväksytty',
                            },
                            lyhytNimi: {
                                fi: 'S',
                            },
                            koodistoUri: 'arviointiasteikkoyleissivistava',
                            koodistoVersio: 1,
                        },
                        kuvaus: {
                            fi: 'Esimerkillistä käyttäytymistä koko vuoden ajan',
                        },
                        hyväksytty: true,
                    },
                    osasuoritukset: [
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'AI',
                                    nimi: {
                                        fi: 'Äidinkieli ja kirjallisuus',
                                        sv: 'Modersmålet och litteratur',
                                    },
                                    lyhytNimi: {
                                        fi: 'Äidinkieli ja kirjallisuus',
                                        sv: 'Modersmålet och litteratur',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'AI1',
                                    nimi: {
                                        fi: 'Suomen kieli ja kirjallisuus',
                                    },
                                    koodistoUri: 'oppiaineaidinkielijakirjallisuus',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                            suoritustapa: {
                                koodiarvo: 'erityinentutkinto',
                                nimi: {
                                    fi: 'Erityinen tutkinto',
                                    sv: 'Särskild examen',
                                },
                                koodistoUri: 'perusopetuksensuoritustapa',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'B1',
                                    nimi: {
                                        fi: 'B1-kieli',
                                        sv: 'B1-språk',
                                    },
                                    lyhytNimi: {
                                        fi: 'B1-kieli',
                                        sv: 'B1-språk',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'SV',
                                    nimi: {
                                        fi: 'ruotsi',
                                        sv: 'svenska',
                                        en: 'Swedish',
                                    },
                                    lyhytNimi: {
                                        fi: 'ruotsi',
                                        sv: 'svenska',
                                        en: 'Swedish',
                                    },
                                    koodistoUri: 'kielivalikoima',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '8',
                                        nimi: {
                                            fi: 'hyvä',
                                        },
                                        lyhytNimi: {
                                            fi: '8',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'B1',
                                    nimi: {
                                        fi: 'B1-kieli',
                                        sv: 'B1-språk',
                                    },
                                    lyhytNimi: {
                                        fi: 'B1-kieli',
                                        sv: 'B1-språk',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'SV',
                                    nimi: {
                                        fi: 'ruotsi',
                                        sv: 'svenska',
                                        en: 'Swedish',
                                    },
                                    lyhytNimi: {
                                        fi: 'ruotsi',
                                        sv: 'svenska',
                                        en: 'Swedish',
                                    },
                                    koodistoUri: 'kielivalikoima',
                                    koodistoVersio: 1,
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 1,
                                    yksikkö: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        lyhytNimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: 'S',
                                        nimi: {
                                            fi: 'hyväksytty',
                                        },
                                        lyhytNimi: {
                                            fi: 'S',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'A1',
                                    nimi: {
                                        fi: 'A1-kieli',
                                        sv: 'A1-språk',
                                    },
                                    lyhytNimi: {
                                        fi: 'A1-kieli',
                                        sv: 'A1-språk',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'EN',
                                    nimi: {
                                        fi: 'englanti',
                                        sv: 'engelska',
                                        en: 'English',
                                    },
                                    lyhytNimi: {
                                        fi: 'englanti',
                                        sv: 'engelska',
                                        en: 'English',
                                    },
                                    koodistoUri: 'kielivalikoima',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '8',
                                        nimi: {
                                            fi: 'hyvä',
                                        },
                                        lyhytNimi: {
                                            fi: '8',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KT',
                                    nimi: {
                                        fi: 'Uskonto/Elämänkatsomustieto',
                                        sv: 'Religion/Livsåskådningskunskap',
                                    },
                                    lyhytNimi: {
                                        fi: 'Uskonto',
                                        sv: 'Religion',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '10',
                                        nimi: {
                                            fi: 'erinomainen',
                                        },
                                        lyhytNimi: {
                                            fi: '10',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'HI',
                                    nimi: {
                                        fi: 'Historia',
                                        sv: 'Historia',
                                    },
                                    lyhytNimi: {
                                        fi: 'Historia',
                                        sv: 'Historia',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '8',
                                        nimi: {
                                            fi: 'hyvä',
                                        },
                                        lyhytNimi: {
                                            fi: '8',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'YH',
                                    nimi: {
                                        fi: 'Yhteiskuntaoppi',
                                        sv: 'Samhällslära',
                                    },
                                    lyhytNimi: {
                                        fi: 'Yhteiskuntaoppi',
                                        sv: 'Samhällslära',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '10',
                                        nimi: {
                                            fi: 'erinomainen',
                                        },
                                        lyhytNimi: {
                                            fi: '10',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'MA',
                                    nimi: {
                                        fi: 'Matematiikka',
                                        sv: 'Matematik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Matematiikka',
                                        sv: 'Matematik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KE',
                                    nimi: {
                                        fi: 'Kemia',
                                        sv: 'Kemi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kemia',
                                        sv: 'Kemi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '7',
                                        nimi: {
                                            fi: 'tyydyttävä',
                                        },
                                        lyhytNimi: {
                                            fi: '7',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'FY',
                                    nimi: {
                                        fi: 'Fysiikka',
                                        sv: 'Fysik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Fysiikka',
                                        sv: 'Fysik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'BI',
                                    nimi: {
                                        fi: 'Biologia',
                                        sv: 'Biologi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Biologia',
                                        sv: 'Biologi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: true,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'GE',
                                    nimi: {
                                        fi: 'Maantieto',
                                        sv: 'Geografi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Maantieto',
                                        sv: 'Geografi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'MU',
                                    nimi: {
                                        fi: 'Musiikki',
                                        sv: 'Musik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Musiikki',
                                        sv: 'Musik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '7',
                                        nimi: {
                                            fi: 'tyydyttävä',
                                        },
                                        lyhytNimi: {
                                            fi: '7',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KU',
                                    nimi: {
                                        fi: 'Kuvataide',
                                        sv: 'Bildkonst',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kuvataide',
                                        sv: 'Bildkonst',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '8',
                                        nimi: {
                                            fi: 'hyvä',
                                        },
                                        lyhytNimi: {
                                            fi: '8',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KO',
                                    nimi: {
                                        fi: 'Kotitalous',
                                        sv: 'Huslig ekonomi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kotitalous',
                                        sv: 'Huslig ekonomi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '8',
                                        nimi: {
                                            fi: 'hyvä',
                                        },
                                        lyhytNimi: {
                                            fi: '8',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KO',
                                    nimi: {
                                        fi: 'Kotitalous',
                                        sv: 'Huslig ekonomi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kotitalous',
                                        sv: 'Huslig ekonomi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 1,
                                    yksikkö: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        lyhytNimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: 'S',
                                        nimi: {
                                            fi: 'hyväksytty',
                                        },
                                        lyhytNimi: {
                                            fi: 'S',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'TE',
                                    nimi: {
                                        fi: 'Terveystieto',
                                        sv: 'Hälsokunskap',
                                    },
                                    lyhytNimi: {
                                        fi: 'Terveystieto',
                                        sv: 'Hälsokunskap',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '8',
                                        nimi: {
                                            fi: 'hyvä',
                                        },
                                        lyhytNimi: {
                                            fi: '8',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KS',
                                    nimi: {
                                        fi: 'Käsityö',
                                        sv: 'Slöjd',
                                    },
                                    lyhytNimi: {
                                        fi: 'Käsityö',
                                        sv: 'Slöjd',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'LI',
                                    nimi: {
                                        fi: 'Liikunta',
                                        sv: 'Gymnastik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Liikunta',
                                        sv: 'Gymnastik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: true,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'LI',
                                    nimi: {
                                        fi: 'Liikunta',
                                        sv: 'Gymnastik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Liikunta',
                                        sv: 'Gymnastik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 0.5,
                                    yksikkö: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        lyhytNimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: 'S',
                                        nimi: {
                                            fi: 'hyväksytty',
                                        },
                                        lyhytNimi: {
                                            fi: 'S',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'B2',
                                    nimi: {
                                        fi: 'B2-kieli',
                                        sv: 'B2-språk',
                                    },
                                    lyhytNimi: {
                                        fi: 'B2-kieli',
                                        sv: 'B2-språk',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'DE',
                                    nimi: {
                                        fi: 'saksa',
                                        sv: 'tyska',
                                        en: 'German',
                                    },
                                    lyhytNimi: {
                                        fi: 'saksa',
                                        sv: 'tyska',
                                        en: 'German',
                                    },
                                    koodistoUri: 'kielivalikoima',
                                    koodistoVersio: 1,
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 4,
                                    yksikkö: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        lyhytNimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'TH',
                                    nimi: {
                                        fi: 'Tietokoneen hyötykäyttö',
                                    },
                                },
                                kuvaus: {
                                    fi: 'Kurssilla tarjotaan yksityiskohtaisempaa tietokoneen, oheislaitteiden sekä käyttöjärjestelmän ja ohjelmien tuntemusta.',
                                },
                                pakollinen: false,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                    ],
                    tyyppi: {
                        koodiarvo: 'perusopetuksenvuosiluokka',
                        nimi: {
                            fi: 'Perusopetuksen vuosiluokka',
                            sv: 'Årskurs i grundläggande utbildning',
                        },
                        koodistoUri: 'suorituksentyyppi',
                        koodistoVersio: 1,
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '9',
                            nimi: {
                                fi: '9. vuosiluokka',
                                sv: 'Årskurs 9',
                            },
                            koodistoUri: 'perusopetuksenluokkaaste',
                            koodistoVersio: 1,
                        },
                        perusteenDiaarinumero: '104/011/2014',
                    },
                    luokka: '9C',
                    toimipiste: {
                        oid: '1.2.246.562.10.14613773812',
                        oppilaitosnumero: {
                            koodiarvo: '00204',
                            nimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            lyhytNimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Jyväskylän normaalikoulu',
                        },
                        kotipaikka: {
                            koodiarvo: '179',
                            nimi: {
                                fi: 'Jyväskylä',
                                sv: 'Jyväskylä',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 1,
                        },
                    },
                    alkamispäivä: '2015-08-15',
                    vahvistus: {
                        päivä: '2016-05-30',
                        paikkakunta: {
                            koodiarvo: '179',
                            nimi: {
                                fi: 'Jyväskylä',
                                sv: 'Jyväskylä',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 1,
                        },
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.14613773812',
                            oppilaitosnumero: {
                                koodiarvo: '00204',
                                nimi: {
                                    fi: 'Jyväskylän normaalikoulu',
                                },
                                lyhytNimi: {
                                    fi: 'Jyväskylän normaalikoulu',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            kotipaikka: {
                                koodiarvo: '179',
                                nimi: {
                                    fi: 'Jyväskylä',
                                    sv: 'Jyväskylä',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 1,
                            },
                        },
                        myöntäjäHenkilöt: [
                            {
                                nimi: 'Reijo Reksi',
                                titteli: {
                                    fi: 'rehtori',
                                },
                                organisaatio: {
                                    oid: '1.2.246.562.10.14613773812',
                                    oppilaitosnumero: {
                                        koodiarvo: '00204',
                                        nimi: {
                                            fi: 'Jyväskylän normaalikoulu',
                                        },
                                        lyhytNimi: {
                                            fi: 'Jyväskylän normaalikoulu',
                                        },
                                        koodistoUri: 'oppilaitosnumero',
                                        koodistoVersio: 1,
                                    },
                                    nimi: {
                                        fi: 'Jyväskylän normaalikoulu',
                                    },
                                    kotipaikka: {
                                        koodiarvo: '179',
                                        nimi: {
                                            fi: 'Jyväskylä',
                                            sv: 'Jyväskylä',
                                        },
                                        koodistoUri: 'kunta',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                        ],
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    jääLuokalle: false,
                    tyyppi: {
                        koodiarvo: 'perusopetuksenvuosiluokka',
                        nimi: {
                            fi: 'Perusopetuksen vuosiluokka',
                            sv: 'Årskurs i grundläggande utbildning',
                        },
                        koodistoUri: 'suorituksentyyppi',
                        koodistoVersio: 1,
                    },
                },
                {
                    koulutusmoduuli: {
                        perusteenDiaarinumero: '104/011/2014',
                        tunniste: {
                            koodiarvo: '201101',
                            nimi: {
                                fi: 'Perusopetus',
                                sv: 'Grundläggande utbildning',
                                en: 'Basic education',
                            },
                            koodistoUri: 'koulutus',
                            koodistoVersio: 6,
                        },
                        koulutustyyppi: {
                            koodiarvo: '16',
                            nimi: {
                                fi: 'Perusopetus',
                                sv: 'Grundläggande utbildning',
                            },
                            lyhytNimi: {
                                fi: 'Perusopetus',
                                sv: 'Grundläggande utbildning',
                            },
                            koodistoUri: 'koulutustyyppi',
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.14613773812',
                        oppilaitosnumero: {
                            koodiarvo: '00204',
                            nimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            lyhytNimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Jyväskylän normaalikoulu',
                        },
                        kotipaikka: {
                            koodiarvo: '179',
                            nimi: {
                                fi: 'Jyväskylä',
                                sv: 'Jyväskylä',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 1,
                        },
                    },
                    vahvistus: {
                        päivä: '2016-06-04',
                        paikkakunta: {
                            koodiarvo: '179',
                            nimi: {
                                fi: 'Jyväskylä',
                                sv: 'Jyväskylä',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 1,
                        },
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.14613773812',
                            oppilaitosnumero: {
                                koodiarvo: '00204',
                                nimi: {
                                    fi: 'Jyväskylän normaalikoulu',
                                },
                                lyhytNimi: {
                                    fi: 'Jyväskylän normaalikoulu',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            kotipaikka: {
                                koodiarvo: '179',
                                nimi: {
                                    fi: 'Jyväskylä',
                                    sv: 'Jyväskylä',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 1,
                            },
                        },
                        myöntäjäHenkilöt: [
                            {
                                nimi: 'Reijo Reksi',
                                titteli: {
                                    fi: 'rehtori',
                                },
                                organisaatio: {
                                    oid: '1.2.246.562.10.14613773812',
                                    oppilaitosnumero: {
                                        koodiarvo: '00204',
                                        nimi: {
                                            fi: 'Jyväskylän normaalikoulu',
                                        },
                                        lyhytNimi: {
                                            fi: 'Jyväskylän normaalikoulu',
                                        },
                                        koodistoUri: 'oppilaitosnumero',
                                        koodistoVersio: 1,
                                    },
                                    nimi: {
                                        fi: 'Jyväskylän normaalikoulu',
                                    },
                                    kotipaikka: {
                                        koodiarvo: '179',
                                        nimi: {
                                            fi: 'Jyväskylä',
                                            sv: 'Jyväskylä',
                                        },
                                        koodistoUri: 'kunta',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                        ],
                    },
                    suoritustapa: {
                        koodiarvo: 'koulutus',
                        nimi: {
                            fi: 'Koulutus',
                            sv: 'Utbildning',
                        },
                        koodistoUri: 'perusopetuksensuoritustapa',
                        koodistoVersio: 1,
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    osasuoritukset: [
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'AI',
                                    nimi: {
                                        fi: 'Äidinkieli ja kirjallisuus',
                                        sv: 'Modersmålet och litteratur',
                                    },
                                    lyhytNimi: {
                                        fi: 'Äidinkieli ja kirjallisuus',
                                        sv: 'Modersmålet och litteratur',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'AI1',
                                    nimi: {
                                        fi: 'Suomen kieli ja kirjallisuus',
                                    },
                                    koodistoUri: 'oppiaineaidinkielijakirjallisuus',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                            suoritustapa: {
                                koodiarvo: 'erityinentutkinto',
                                nimi: {
                                    fi: 'Erityinen tutkinto',
                                    sv: 'Särskild examen',
                                },
                                koodistoUri: 'perusopetuksensuoritustapa',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'B1',
                                    nimi: {
                                        fi: 'B1-kieli',
                                        sv: 'B1-språk',
                                    },
                                    lyhytNimi: {
                                        fi: 'B1-kieli',
                                        sv: 'B1-språk',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'SV',
                                    nimi: {
                                        fi: 'ruotsi',
                                        sv: 'svenska',
                                        en: 'Swedish',
                                    },
                                    lyhytNimi: {
                                        fi: 'ruotsi',
                                        sv: 'svenska',
                                        en: 'Swedish',
                                    },
                                    koodistoUri: 'kielivalikoima',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '8',
                                        nimi: {
                                            fi: 'hyvä',
                                        },
                                        lyhytNimi: {
                                            fi: '8',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'B1',
                                    nimi: {
                                        fi: 'B1-kieli',
                                        sv: 'B1-språk',
                                    },
                                    lyhytNimi: {
                                        fi: 'B1-kieli',
                                        sv: 'B1-språk',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'SV',
                                    nimi: {
                                        fi: 'ruotsi',
                                        sv: 'svenska',
                                        en: 'Swedish',
                                    },
                                    lyhytNimi: {
                                        fi: 'ruotsi',
                                        sv: 'svenska',
                                        en: 'Swedish',
                                    },
                                    koodistoUri: 'kielivalikoima',
                                    koodistoVersio: 1,
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 1,
                                    yksikkö: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        lyhytNimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: 'S',
                                        nimi: {
                                            fi: 'hyväksytty',
                                        },
                                        lyhytNimi: {
                                            fi: 'S',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'A1',
                                    nimi: {
                                        fi: 'A1-kieli',
                                        sv: 'A1-språk',
                                    },
                                    lyhytNimi: {
                                        fi: 'A1-kieli',
                                        sv: 'A1-språk',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'EN',
                                    nimi: {
                                        fi: 'englanti',
                                        sv: 'engelska',
                                        en: 'English',
                                    },
                                    lyhytNimi: {
                                        fi: 'englanti',
                                        sv: 'engelska',
                                        en: 'English',
                                    },
                                    koodistoUri: 'kielivalikoima',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '8',
                                        nimi: {
                                            fi: 'hyvä',
                                        },
                                        lyhytNimi: {
                                            fi: '8',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KT',
                                    nimi: {
                                        fi: 'Uskonto/Elämänkatsomustieto',
                                        sv: 'Religion/Livsåskådningskunskap',
                                    },
                                    lyhytNimi: {
                                        fi: 'Uskonto',
                                        sv: 'Religion',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '10',
                                        nimi: {
                                            fi: 'erinomainen',
                                        },
                                        lyhytNimi: {
                                            fi: '10',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'HI',
                                    nimi: {
                                        fi: 'Historia',
                                        sv: 'Historia',
                                    },
                                    lyhytNimi: {
                                        fi: 'Historia',
                                        sv: 'Historia',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '8',
                                        nimi: {
                                            fi: 'hyvä',
                                        },
                                        lyhytNimi: {
                                            fi: '8',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'YH',
                                    nimi: {
                                        fi: 'Yhteiskuntaoppi',
                                        sv: 'Samhällslära',
                                    },
                                    lyhytNimi: {
                                        fi: 'Yhteiskuntaoppi',
                                        sv: 'Samhällslära',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '10',
                                        nimi: {
                                            fi: 'erinomainen',
                                        },
                                        lyhytNimi: {
                                            fi: '10',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'MA',
                                    nimi: {
                                        fi: 'Matematiikka',
                                        sv: 'Matematik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Matematiikka',
                                        sv: 'Matematik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KE',
                                    nimi: {
                                        fi: 'Kemia',
                                        sv: 'Kemi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kemia',
                                        sv: 'Kemi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '7',
                                        nimi: {
                                            fi: 'tyydyttävä',
                                        },
                                        lyhytNimi: {
                                            fi: '7',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'FY',
                                    nimi: {
                                        fi: 'Fysiikka',
                                        sv: 'Fysik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Fysiikka',
                                        sv: 'Fysik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'BI',
                                    nimi: {
                                        fi: 'Biologia',
                                        sv: 'Biologi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Biologia',
                                        sv: 'Biologi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: true,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'GE',
                                    nimi: {
                                        fi: 'Maantieto',
                                        sv: 'Geografi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Maantieto',
                                        sv: 'Geografi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'MU',
                                    nimi: {
                                        fi: 'Musiikki',
                                        sv: 'Musik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Musiikki',
                                        sv: 'Musik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '7',
                                        nimi: {
                                            fi: 'tyydyttävä',
                                        },
                                        lyhytNimi: {
                                            fi: '7',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KU',
                                    nimi: {
                                        fi: 'Kuvataide',
                                        sv: 'Bildkonst',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kuvataide',
                                        sv: 'Bildkonst',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '8',
                                        nimi: {
                                            fi: 'hyvä',
                                        },
                                        lyhytNimi: {
                                            fi: '8',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KO',
                                    nimi: {
                                        fi: 'Kotitalous',
                                        sv: 'Huslig ekonomi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kotitalous',
                                        sv: 'Huslig ekonomi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '8',
                                        nimi: {
                                            fi: 'hyvä',
                                        },
                                        lyhytNimi: {
                                            fi: '8',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KO',
                                    nimi: {
                                        fi: 'Kotitalous',
                                        sv: 'Huslig ekonomi',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kotitalous',
                                        sv: 'Huslig ekonomi',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 1,
                                    yksikkö: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        lyhytNimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: 'S',
                                        nimi: {
                                            fi: 'hyväksytty',
                                        },
                                        lyhytNimi: {
                                            fi: 'S',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'TE',
                                    nimi: {
                                        fi: 'Terveystieto',
                                        sv: 'Hälsokunskap',
                                    },
                                    lyhytNimi: {
                                        fi: 'Terveystieto',
                                        sv: 'Hälsokunskap',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '8',
                                        nimi: {
                                            fi: 'hyvä',
                                        },
                                        lyhytNimi: {
                                            fi: '8',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'KS',
                                    nimi: {
                                        fi: 'Käsityö',
                                        sv: 'Slöjd',
                                    },
                                    lyhytNimi: {
                                        fi: 'Käsityö',
                                        sv: 'Slöjd',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'LI',
                                    nimi: {
                                        fi: 'Liikunta',
                                        sv: 'Gymnastik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Liikunta',
                                        sv: 'Gymnastik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: true,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: true,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'LI',
                                    nimi: {
                                        fi: 'Liikunta',
                                        sv: 'Gymnastik',
                                    },
                                    lyhytNimi: {
                                        fi: 'Liikunta',
                                        sv: 'Gymnastik',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 0.5,
                                    yksikkö: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        lyhytNimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: 'S',
                                        nimi: {
                                            fi: 'hyväksytty',
                                        },
                                        lyhytNimi: {
                                            fi: 'S',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'B2',
                                    nimi: {
                                        fi: 'B2-kieli',
                                        sv: 'B2-språk',
                                    },
                                    lyhytNimi: {
                                        fi: 'B2-kieli',
                                        sv: 'B2-språk',
                                    },
                                    koodistoUri: 'koskioppiaineetyleissivistava',
                                    koodistoVersio: 1,
                                },
                                kieli: {
                                    koodiarvo: 'DE',
                                    nimi: {
                                        fi: 'saksa',
                                        sv: 'tyska',
                                        en: 'German',
                                    },
                                    lyhytNimi: {
                                        fi: 'saksa',
                                        sv: 'tyska',
                                        en: 'German',
                                    },
                                    koodistoUri: 'kielivalikoima',
                                    koodistoVersio: 1,
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 4,
                                    yksikkö: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        lyhytNimi: {
                                            fi: 'vuosiviikkotuntia',
                                            sv: 'årsveckotimmar',
                                            en: 'weekly lessons per year',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: 'TH',
                                    nimi: {
                                        fi: 'Tietokoneen hyötykäyttö',
                                    },
                                },
                                kuvaus: {
                                    fi: 'Kurssilla tarjotaan yksityiskohtaisempaa tietokoneen, oheislaitteiden sekä käyttöjärjestelmän ja ohjelmien tuntemusta.',
                                },
                                pakollinen: false,
                            },
                            yksilöllistettyOppimäärä: false,
                            painotettuOpetus: false,
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '9',
                                        nimi: {
                                            fi: 'kiitettävä',
                                        },
                                        lyhytNimi: {
                                            fi: '9',
                                        },
                                        koodistoUri: 'arviointiasteikkoyleissivistava',
                                        koodistoVersio: 1,
                                    },
                                    hyväksytty: true,
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'perusopetuksenoppiaine',
                                nimi: {
                                    fi: 'Perusopetuksen oppiaine',
                                    sv: 'Läroämne i grundläggande utbildning',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                    ],
                    tyyppi: {
                        koodiarvo: 'perusopetuksenoppimaara',
                        nimi: {
                            fi: 'Perusopetuksen oppimäärä',
                            sv: 'Grundläggande utbildningens lärokurs',
                        },
                        koodistoUri: 'suorituksentyyppi',
                        koodistoVersio: 1,
                    },
                },
            ],
            tyyppi: {
                koodiarvo: 'perusopetus',
                nimi: {
                    fi: 'Perusopetus',
                    sv: 'Grundläggande utbildning',
                },
                lyhytNimi: {
                    fi: 'Perusopetus',
                },
                koodistoUri: 'opiskeluoikeudentyyppi',
                koodistoVersio: 1,
            },
            alkamispäivä: '2008-08-15',
        },
        {
            oid: '1.2.246.562.15.80877052243',
            versionumero: 1,
            aikaleima: '2018-10-04T13:42:12.171262',
            oppilaitos: {
                oid: '1.2.246.562.10.14613773812',
                oppilaitosnumero: {
                    koodiarvo: '00204',
                    nimi: {
                        fi: 'Jyväskylän normaalikoulu',
                    },
                    lyhytNimi: {
                        fi: 'Jyväskylän normaalikoulu',
                    },
                    koodistoUri: 'oppilaitosnumero',
                    koodistoVersio: 1,
                },
                nimi: {
                    fi: 'Jyväskylän normaalikoulu',
                },
                kotipaikka: {
                    koodiarvo: '179',
                    nimi: {
                        fi: 'Jyväskylä',
                        sv: 'Jyväskylä',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 1,
                },
            },
            koulutustoimija: {
                oid: '1.2.246.562.10.77055527103',
                nimi: {
                    fi: 'Jyväskylän yliopisto',
                },
                yTunnus: '0245894-7',
                kotipaikka: {
                    koodiarvo: '179',
                    nimi: {
                        fi: 'Jyväskylä',
                        sv: 'Jyväskylä',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 1,
                },
            },
            tila: {
                opiskeluoikeusjaksot: [
                    {
                        alku: '2016-09-01',
                        tila: {
                            koodiarvo: 'lasna',
                            nimi: {
                                fi: 'Läsnä',
                                sv: 'Närvarande',
                            },
                            koodistoUri: 'koskiopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2016-10-04',
                        tila: {
                            koodiarvo: 'eronnut',
                            nimi: {
                                fi: 'Eronnut',
                                sv: 'Utskriven',
                            },
                            koodistoUri: 'koskiopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                ],
            },
            suoritukset: [
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '309902',
                            nimi: {
                                fi: 'Lukion oppimäärä',
                                sv: 'Gymnasiets lärokurs',
                            },
                            koodistoUri: 'koulutus',
                            koodistoVersio: 6,
                        },
                        perusteenDiaarinumero: '60/011/2015',
                    },
                    oppimäärä: {
                        koodiarvo: 'nuortenops',
                        nimi: {
                            fi: 'Lukio suoritetaan nuorten opetussuunnitelman mukaan',
                            sv: 'Gymnasiet genomförs enligt läroplanen för unga',
                        },
                        koodistoUri: 'lukionoppimaara',
                        koodistoVersio: 1,
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.14613773812',
                        oppilaitosnumero: {
                            koodiarvo: '00204',
                            nimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            lyhytNimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Jyväskylän normaalikoulu',
                        },
                        kotipaikka: {
                            koodiarvo: '179',
                            nimi: {
                                fi: 'Jyväskylä',
                                sv: 'Jyväskylä',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 1,
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'lukionoppimaara',
                        nimi: {
                            fi: 'Lukion oppimäärä',
                            sv: 'Gymnasiets lärokurs',
                        },
                        koodistoUri: 'suorituksentyyppi',
                        koodistoVersio: 1,
                    },
                },
            ],
            tyyppi: {
                koodiarvo: 'lukiokoulutus',
                nimi: {
                    fi: 'Lukiokoulutus',
                    sv: 'Gymnasieutbildning',
                },
                lyhytNimi: {
                    fi: 'Lukiokoulutus',
                },
                koodistoUri: 'opiskeluoikeudentyyppi',
                koodistoVersio: 1,
            },
            alkamispäivä: '2016-09-01',
        },
        {
            oid: '1.2.246.562.15.33507744143',
            versionumero: 1,
            aikaleima: '2018-10-04T13:42:12.249077',
            oppilaitos: {
                oid: '1.2.246.562.10.14613773812',
                oppilaitosnumero: {
                    koodiarvo: '00204',
                    nimi: {
                        fi: 'Jyväskylän normaalikoulu',
                    },
                    lyhytNimi: {
                        fi: 'Jyväskylän normaalikoulu',
                    },
                    koodistoUri: 'oppilaitosnumero',
                    koodistoVersio: 1,
                },
                nimi: {
                    fi: 'Jyväskylän normaalikoulu',
                },
                kotipaikka: {
                    koodiarvo: '179',
                    nimi: {
                        fi: 'Jyväskylä',
                        sv: 'Jyväskylä',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 1,
                },
            },
            koulutustoimija: {
                oid: '1.2.246.562.10.77055527103',
                nimi: {
                    fi: 'Jyväskylän yliopisto',
                },
                yTunnus: '0245894-7',
                kotipaikka: {
                    koodiarvo: '179',
                    nimi: {
                        fi: 'Jyväskylä',
                        sv: 'Jyväskylä',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 1,
                },
            },
            päättymispäivä: '2007-06-03',
            tila: {
                opiskeluoikeusjaksot: [
                    {
                        alku: '2006-08-13',
                        tila: {
                            koodiarvo: 'lasna',
                            nimi: {
                                fi: 'Läsnä',
                                sv: 'Närvarande',
                            },
                            koodistoUri: 'koskiopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2007-06-03',
                        tila: {
                            koodiarvo: 'valmistunut',
                            nimi: {
                                fi: 'Valmistunut',
                                sv: 'Utexaminerad',
                            },
                            koodistoUri: 'koskiopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                ],
            },
            lisätiedot: {
                pidennettyOppivelvollisuus: {
                    alku: '2008-08-15',
                    loppu: '2016-06-04',
                },
            },
            suoritukset: [
                {
                    koulutusmoduuli: {
                        perusteenDiaarinumero: '102/011/2014',
                        tunniste: {
                            koodiarvo: '001101',
                            nimi: {
                                fi: 'Peruskoulun esiopetus',
                                sv: 'Förskoleundervisning i grundskolan',
                                en: 'Pre-Primary Education in Comprehensive Schools',
                            },
                            koodistoUri: 'koulutus',
                            koodistoVersio: 6,
                        },
                        kuvaus: {
                            fi: 'Kaksikielinen esiopetus (suomi-portugali)',
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.14613773812',
                        oppilaitosnumero: {
                            koodiarvo: '00204',
                            nimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            lyhytNimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Jyväskylän normaalikoulu',
                        },
                        kotipaikka: {
                            koodiarvo: '179',
                            nimi: {
                                fi: 'Jyväskylä',
                                sv: 'Jyväskylä',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 1,
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    muutSuorituskielet: [
                        {
                            koodiarvo: 'SV',
                            nimi: {
                                fi: 'ruotsi',
                                sv: 'svenska',
                                en: 'Swedish',
                            },
                            lyhytNimi: {
                                fi: 'ruotsi',
                                sv: 'svenska',
                                en: 'Swedish',
                            },
                            koodistoUri: 'kieli',
                            koodistoVersio: 1,
                        },
                    ],
                    tyyppi: {
                        koodiarvo: 'esiopetuksensuoritus',
                        nimi: {
                            fi: 'Esiopetuksen suoritus',
                            sv: 'Förskoleundervisning',
                        },
                        koodistoUri: 'suorituksentyyppi',
                        koodistoVersio: 1,
                    },
                    vahvistus: {
                        päivä: '2007-06-03',
                        paikkakunta: {
                            koodiarvo: '179',
                            nimi: {
                                fi: 'Jyväskylä',
                                sv: 'Jyväskylä',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 1,
                        },
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.14613773812',
                            oppilaitosnumero: {
                                koodiarvo: '00204',
                                nimi: {
                                    fi: 'Jyväskylän normaalikoulu',
                                },
                                lyhytNimi: {
                                    fi: 'Jyväskylän normaalikoulu',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Jyväskylän normaalikoulu',
                            },
                            kotipaikka: {
                                koodiarvo: '179',
                                nimi: {
                                    fi: 'Jyväskylä',
                                    sv: 'Jyväskylä',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 1,
                            },
                        },
                        myöntäjäHenkilöt: [
                            {
                                nimi: 'Reijo Reksi',
                                titteli: {
                                    fi: 'rehtori',
                                },
                                organisaatio: {
                                    oid: '1.2.246.562.10.14613773812',
                                    oppilaitosnumero: {
                                        koodiarvo: '00204',
                                        nimi: {
                                            fi: 'Jyväskylän normaalikoulu',
                                        },
                                        lyhytNimi: {
                                            fi: 'Jyväskylän normaalikoulu',
                                        },
                                        koodistoUri: 'oppilaitosnumero',
                                        koodistoVersio: 1,
                                    },
                                    nimi: {
                                        fi: 'Jyväskylän normaalikoulu',
                                    },
                                    kotipaikka: {
                                        koodiarvo: '179',
                                        nimi: {
                                            fi: 'Jyväskylä',
                                            sv: 'Jyväskylä',
                                        },
                                        koodistoUri: 'kunta',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                        ],
                    },
                },
            ],
            tyyppi: {
                koodiarvo: 'esiopetus',
                nimi: {
                    fi: 'Esiopetus',
                    sv: 'Förskoleundervisning',
                },
                lyhytNimi: {
                    fi: 'Esiopetus',
                },
                koodistoUri: 'opiskeluoikeudentyyppi',
                koodistoVersio: 1,
            },
            alkamispäivä: '2006-08-13',
        },
    ],
};

export const valleVirta = {
    henkilö: {
        oid: '1.2.246.562.24.36140094212',
        hetu: '060696-5219',
        syntymäaika: '1996-06-06',
        etunimet: 'Valle',
        kutsumanimi: 'Valle',
        sukunimi: 'Virta',
        turvakielto: false,
    },
    opiskeluoikeudet: [
        {
            lähdejärjestelmänId: {
                id: 'oo1c6',
                lähdejärjestelmä: {
                    koodiarvo: 'virta',
                    nimi: {
                        fi: 'virta',
                    },
                    koodistoUri: 'lahdejarjestelma',
                    koodistoVersio: 1,
                },
            },
            oppilaitos: {
                oid: '1.2.246.562.10.64733493619',
                oppilaitosnumero: {
                    koodiarvo: '01903',
                    nimi: {
                        fi: 'Åbo Akademi',
                        sv: 'Åbo Akademi',
                        en: 'Åbo Akademi University',
                    },
                    lyhytNimi: {
                        fi: 'Åbo Akademi',
                        sv: 'Åbo Akademi',
                    },
                    koodistoUri: 'oppilaitosnumero',
                    koodistoVersio: 1,
                },
                nimi: {
                    fi: 'Åbo Akademi',
                    sv: 'Åbo Akademi',
                    en: 'Åbo Akademi University',
                },
                kotipaikka: {
                    koodiarvo: '853',
                    nimi: {
                        fi: 'Turku',
                        sv: 'Åbo',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 2,
                },
            },
            päättymispäivä: '2020-07-31',
            tila: {
                opiskeluoikeusjaksot: [
                    {
                        alku: '2013-08-01',
                        tila: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'aktiivinen',
                                sv: 'aktiv',
                            },
                            koodistoUri: 'virtaopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2014-08-01',
                        tila: {
                            koodiarvo: '4',
                            nimi: {
                                fi: 'passivoitu',
                                sv: 'passiverad',
                            },
                            koodistoUri: 'virtaopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2015-08-01',
                        tila: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'aktiivinen',
                                sv: 'aktiv',
                            },
                            koodistoUri: 'virtaopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2017-08-01',
                        tila: {
                            koodiarvo: '4',
                            nimi: {
                                fi: 'passivoitu',
                                sv: 'passiverad',
                            },
                            koodistoUri: 'virtaopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2018-01-01',
                        tila: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'aktiivinen',
                                sv: 'aktiv',
                            },
                            koodistoUri: 'virtaopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                ],
            },
            lisätiedot: {
                ensisijaisuus: [
                    {
                        alku: '2013-08-01',
                    },
                ],
                virtaOpiskeluoikeudenTyyppi: {
                    koodiarvo: '2',
                    nimi: {
                        fi: 'Alempi korkeakoulututkinto',
                        sv: 'Lägre högskoleexamen',
                    },
                    koodistoUri: 'virtaopiskeluoikeudentyyppi',
                    koodistoVersio: 1,
                },
                lukukausiIlmoittautuminen: {
                    ilmoittautumisjaksot: [
                        {
                            alku: '2013-08-01',
                            loppu: '2013-12-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2014-01-01',
                            loppu: '2014-07-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2014-08-01',
                            loppu: '2014-12-31',
                            tila: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: 'Puuttuu',
                                    sv: 'Saknas',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: false,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2015-08-01',
                            loppu: '2015-12-31',
                            tila: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'Poissa',
                                    sv: 'Frånvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: false,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2016-01-01',
                            loppu: '2016-07-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2016-08-01',
                            loppu: '2016-12-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2017-01-01',
                            loppu: '2017-07-31',
                            tila: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: 'Puuttuu',
                                    sv: 'Saknas',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2017-08-01',
                            loppu: '2017-12-31',
                            tila: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: 'Puuttuu',
                                    sv: 'Saknas',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2018-01-01',
                            loppu: '2018-07-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2018-08-01',
                            loppu: '2018-12-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2019-01-01',
                            loppu: '2019-07-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2019-08-01',
                            loppu: '2019-12-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2020-01-01',
                            loppu: '2020-07-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2020-08-01',
                            loppu: '2020-12-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                    ],
                },
            },
            suoritukset: [
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '612101',
                            nimi: {
                                fi: 'Kasvatust. kand. (alempi), lastentarhanopettaja',
                                sv: 'Ped. kand. (lägre), barnträdgårdslärare',
                                en: 'BA, Kindergarten Teacher',
                            },
                            lyhytNimi: {
                                fi: 'KK (al), lastentarhanopettaja',
                                sv: 'PeK (lägre), barntr.',
                                en: 'Bachelor of Arts (Education), Kindergarten Teacher',
                            },
                            koodistoUri: 'koulutus',
                            koodistoVersio: 11,
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    osasuoritukset: [],
                    tyyppi: {
                        koodiarvo: 'korkeakoulututkinto',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
            ],
            tyyppi: {
                koodiarvo: 'korkeakoulutus',
                koodistoUri: 'opiskeluoikeudentyyppi',
            },
            synteettinen: false,
            alkamispäivä: '2013-08-01',
        },
        {
            lähdejärjestelmänId: {
                lähdejärjestelmä: {
                    koodiarvo: 'virta',
                    nimi: {
                        fi: 'virta',
                    },
                    koodistoUri: 'lahdejarjestelma',
                    koodistoVersio: 1,
                },
            },
            oppilaitos: {
                oid: '1.2.246.562.10.64733493619',
                oppilaitosnumero: {
                    koodiarvo: '01903',
                    nimi: {
                        fi: 'Åbo Akademi',
                        sv: 'Åbo Akademi',
                        en: 'Åbo Akademi University',
                    },
                    lyhytNimi: {
                        fi: 'Åbo Akademi',
                        sv: 'Åbo Akademi',
                    },
                    koodistoUri: 'oppilaitosnumero',
                    koodistoVersio: 1,
                },
                nimi: {
                    fi: 'Åbo Akademi',
                    sv: 'Åbo Akademi',
                    en: 'Åbo Akademi University',
                },
                kotipaikka: {
                    koodiarvo: '853',
                    nimi: {
                        fi: 'Turku',
                        sv: 'Åbo',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 2,
                },
            },
            tila: {
                opiskeluoikeusjaksot: [],
            },
            suoritukset: [
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '51856524',
                            nimi: {
                                fi: 'Didaktiikka (KK)',
                                sv: 'Didaktik',
                                en: 'Didactics',
                            },
                        },
                        nimi: {
                            fi: 'Didaktiikka (KK)',
                            sv: 'Didaktik',
                            en: 'Didactics',
                        },
                        laajuus: {
                            arvo: 2,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                lyhytNimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2013-10-09',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2013-10-09',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '2019140',
                            nimi: {
                                fi: 'Liikunnan ja terveyden didaktiikka 1',
                                sv: 'Idrottsdidaktik 1',
                                en: 'Physical education 1',
                            },
                        },
                        nimi: {
                            fi: 'Liikunnan ja terveyden didaktiikka 1',
                            sv: 'Idrottsdidaktik 1',
                            en: 'Physical education 1',
                        },
                        laajuus: {
                            arvo: 4,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: '2',
                                    sv: '2',
                                },
                                lyhytNimi: {
                                    fi: '2',
                                    sv: '2',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-03-13',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-03-13',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '2019169',
                            nimi: {
                                fi: 'Lapsen biologinen, sosiaalinen ja psykologinen kehitys',
                                sv: 'Barnets biologisk, social och psykisk utveckling',
                                en: 'Children\'s biological, social and psychological development',
                            },
                        },
                        nimi: {
                            fi: 'Lapsen biologinen, sosiaalinen ja psykologinen kehitys',
                            sv: 'Barnets biologisk, social och psykisk utveckling',
                            en: 'Children\'s biological, social and psychological development',
                        },
                        laajuus: {
                            arvo: 5,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: '2',
                                    sv: '2',
                                },
                                lyhytNimi: {
                                    fi: '2',
                                    sv: '2',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-05-06',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-05-06',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '2019172',
                            nimi: {
                                fi: 'Liikunta ja terveys',
                                sv: 'Idrott, motion och hälsa',
                                en: 'Physical education and health',
                            },
                        },
                        nimi: {
                            fi: 'Liikunta ja terveys',
                            sv: 'Idrott, motion och hälsa',
                            en: 'Physical education and health',
                        },
                        laajuus: {
                            arvo: 3,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '3',
                                nimi: {
                                    fi: '3',
                                    sv: '3',
                                },
                                lyhytNimi: {
                                    fi: '3',
                                    sv: '3',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2013-10-14',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2013-10-14',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '86390265',
                            nimi: {
                                fi: 'Kasvatuksen yhteiskunnalliset, historialliset ja filosofiset perusteet, ryhmät',
                                sv: 'Uppfostringens sociala, historiska och filosofiska grunder, grupper',
                                en: 'Social, Historical and Philosophical Foundations of Education, groups',
                            },
                        },
                        nimi: {
                            fi: 'Kasvatuksen yhteiskunnalliset, historialliset ja filosofiset perusteet, ryhmät',
                            sv: 'Uppfostringens sociala, historiska och filosofiska grunder, grupper',
                            en: 'Social, Historical and Philosophical Foundations of Education, groups',
                        },
                        laajuus: {
                            arvo: 1,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: 'HYV',
                                nimi: {
                                    fi: 'hyväksytty',
                                    sv: 'godkänd',
                                },
                                lyhytNimi: {
                                    fi: 'HYV',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2013-12-04',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2013-12-04',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '38896527',
                            nimi: {
                                fi: 'Varhaiskasvatuksen pedagogiikka',
                                sv: 'Småbarnspedagogik',
                                en: 'Basics of early childhood education',
                            },
                        },
                        nimi: {
                            fi: 'Varhaiskasvatuksen pedagogiikka',
                            sv: 'Småbarnspedagogik',
                            en: 'Basics of early childhood education',
                        },
                        laajuus: {
                            arvo: 4,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                lyhytNimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-05-20',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-05-20',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '2019133',
                            nimi: {
                                fi: 'Musiikin didaktiikka 1',
                                sv: 'Musikdidaktik 1',
                                en: 'Music education 1',
                            },
                        },
                        nimi: {
                            fi: 'Musiikin didaktiikka 1',
                            sv: 'Musikdidaktik 1',
                            en: 'Music education 1',
                        },
                        laajuus: {
                            arvo: 4,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '5',
                                nimi: {
                                    fi: '5',
                                    sv: '5',
                                },
                                lyhytNimi: {
                                    fi: '5',
                                    sv: '5',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-02-10',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-02-10',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '36391237',
                            nimi: {
                                fi: 'Opettajuuteen kasvu ja opintojen suunnittelu',
                                sv: 'Planering av studierna och uteckling av lärarskapet',
                                en: 'Orientation to university studies and kindergarten teacher`s profession',
                            },
                        },
                        nimi: {
                            fi: 'Opettajuuteen kasvu ja opintojen suunnittelu',
                            sv: 'Planering av studierna och uteckling av lärarskapet',
                            en: 'Orientation to university studies and kindergarten teacher`s profession',
                        },
                        laajuus: {
                            arvo: 2,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: 'HYV',
                                nimi: {
                                    fi: 'hyväksytty',
                                    sv: 'godkänd',
                                },
                                lyhytNimi: {
                                    fi: 'HYV',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-03-24',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-03-24',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '45476394',
                            nimi: {
                                fi: 'Lapsuuden muuttuminen',
                                sv: 'Barndomens förändring',
                                en: 'Changing childhood',
                            },
                        },
                        nimi: {
                            fi: 'Lapsuuden muuttuminen',
                            sv: 'Barndomens förändring',
                            en: 'Changing childhood',
                        },
                        laajuus: {
                            arvo: 4,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '3',
                                nimi: {
                                    fi: '3',
                                    sv: '3',
                                },
                                lyhytNimi: {
                                    fi: '3',
                                    sv: '3',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-04-15',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-04-15',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '51856310',
                            nimi: {
                                fi: 'Johdatus kasvatuspsykologiaan',
                                sv: 'Utveckling, uppväxt och lärande',
                                en: 'Growth, development and learning',
                            },
                        },
                        nimi: {
                            fi: 'Johdatus kasvatuspsykologiaan',
                            sv: 'Utveckling, uppväxt och lärande',
                            en: 'Growth, development and learning',
                        },
                        laajuus: {
                            arvo: 3,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                lyhytNimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2013-12-04',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2013-12-04',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '2019145',
                            nimi: {
                                fi: 'Kuvataiteen didaktiikka 1',
                                sv: 'Bilddidaktik 1',
                                en: 'Arts education 1',
                            },
                        },
                        nimi: {
                            fi: 'Kuvataiteen didaktiikka 1',
                            sv: 'Bilddidaktik 1',
                            en: 'Arts education 1',
                        },
                        laajuus: {
                            arvo: 4,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                lyhytNimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2013-12-16',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2013-12-16',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '2019179',
                            nimi: {
                                fi: 'Perusharjoittelu',
                                sv: 'Grundpraktik',
                                en: 'Basic practice',
                            },
                        },
                        nimi: {
                            fi: 'Perusharjoittelu',
                            sv: 'Grundpraktik',
                            en: 'Basic practice',
                        },
                        laajuus: {
                            arvo: 3,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: 'HYV',
                                nimi: {
                                    fi: 'hyväksytty',
                                    sv: 'godkänd',
                                },
                                lyhytNimi: {
                                    fi: 'HYV',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-02-07',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-02-07',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
            ],
            tyyppi: {
                koodiarvo: 'korkeakoulutus',
                koodistoUri: 'opiskeluoikeudentyyppi',
            },
            synteettinen: true,
        },
    ],
};

export const minnaMonirahoitteinen = {
    henkilö: {
        oid: '1.2.246.562.24.28837147778',
        hetu: '250689-466Y',
        syntymäaika: '1989-06-25',
        etunimet: 'Minna',
        kutsumanimi: 'Minna',
        sukunimi: 'Monirahoitteinen',
        turvakielto: false,
    },
    opiskeluoikeudet: [
        {
            oid: '1.2.246.562.15.14043810895',
            versionumero: 2,
            aikaleima: '2019-03-08T11:36:59.749538',
            oppilaitos: {
                oid: '1.2.246.562.10.52251087186',
                oppilaitosnumero: {
                    koodiarvo: '10105',
                    nimi: {
                        fi: 'Stadin ammatti- ja aikuisopisto',
                    },
                    lyhytNimi: {
                        fi: 'Stadin ammattiopisto',
                    },
                    koodistoUri: 'oppilaitosnumero',
                    koodistoVersio: 1,
                },
                nimi: {
                    fi: 'Stadin ammatti- ja aikuisopisto',
                },
                kotipaikka: {
                    koodiarvo: '091',
                    nimi: {
                        fi: 'Helsinki',
                        sv: 'Helsingfors',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 2,
                },
            },
            koulutustoimija: {
                oid: '1.2.246.562.10.346830761110',
                nimi: {
                    fi: 'Helsingin kaupunki',
                    sv: 'Helsingfors stad',
                },
                yTunnus: '0201256-6',
                kotipaikka: {
                    koodiarvo: '091',
                    nimi: {
                        fi: 'Helsinki',
                        sv: 'Helsingfors',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 2,
                },
            },
            päättymispäivä: '2010-04-01',
            tila: {
                opiskeluoikeusjaksot: [
                    {
                        alku: '2010-03-01',
                        tila: {
                            koodiarvo: 'lasna',
                            nimi: {
                                fi: 'Läsnä',
                                sv: 'Närvarande',
                                en: 'Present',
                            },
                            koodistoUri: 'koskiopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                        opintojenRahoitus: {
                            koodiarvo: '9',
                            nimi: {
                                fi: 'Maahanmuuttajien ammatillinen koulutus (valtionavustus)',
                                sv: 'Yrkesutbildning för invandrare (statsunderstöd)',
                            },
                            koodistoUri: 'opintojenrahoitus',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2010-04-01',
                        tila: {
                            koodiarvo: 'eronnut',
                            nimi: {
                                fi: 'Eronnut',
                                sv: 'Utskriven',
                                en: 'Discontinued',
                            },
                            koodistoUri: 'koskiopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                        opintojenRahoitus: {
                            koodiarvo: '6',
                            nimi: {
                                fi: 'Muuta kautta rahoitettu',
                                sv: 'Finansierad på annat sätt',
                            },
                            koodistoUri: 'opintojenrahoitus',
                            koodistoVersio: 1,
                        },
                    },
                ],
            },
            suoritukset: [
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '354401',
                            nimi: {
                                fi: 'Automaatioasentajan ammattitutkinto',
                                sv: 'Yrkesexamen för automationsmontör',
                                en: 'Automation Assembler, FQ',
                            },
                            lyhytNimi: {
                                fi: 'Automaatioasentajan at',
                                sv: 'Yrkesexamen för automationsmontör',
                                en: 'Automation Assembler, Further Qualification',
                            },
                            koodistoUri: 'koulutus',
                            koodistoVersio: 11,
                        },
                        perusteenDiaarinumero: '3/011/2013',
                        perusteenNimi: {
                            fi: 'Automaatioasentajan ammattitutkinto',
                            sv: 'Yrkesexamen för automationsmontör',
                        },
                        koulutustyyppi: {
                            koodiarvo: '11',
                            nimi: {
                                fi: 'Ammattitutkinto',
                                sv: 'Yrkesexamen',
                            },
                            lyhytNimi: {
                                fi: 'Ammattitutkinto',
                                sv: 'Yrkesexamen',
                            },
                            koodistoUri: 'koulutustyyppi',
                            koodistoVersio: 2,
                        },
                    },
                    suoritustapa: {
                        koodiarvo: 'naytto',
                        nimi: {
                            fi: 'Näyttötutkinto',
                            sv: 'Fristående examen',
                            en: 'Näyttö',
                        },
                        koodistoUri: 'ammatillisentutkinnonsuoritustapa',
                        koodistoVersio: 1,
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.52251087186',
                        oppilaitosnumero: {
                            koodiarvo: '10105',
                            nimi: {
                                fi: 'Stadin ammatti- ja aikuisopisto',
                            },
                            lyhytNimi: {
                                fi: 'Stadin ammattiopisto',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Stadin ammatti- ja aikuisopisto',
                        },
                        kotipaikka: {
                            koodiarvo: '091',
                            nimi: {
                                fi: 'Helsinki',
                                sv: 'Helsingfors',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'ammatillinentutkinto',
                        nimi: {
                            fi: 'Ammatillinen tutkinto',
                            sv: 'Yrkesinriktad examen',
                            en: 'Vocational education  qualification',
                        },
                        koodistoUri: 'suorituksentyyppi',
                        koodistoVersio: 1,
                    },
                },
            ],
            tyyppi: {
                koodiarvo: 'ammatillinenkoulutus',
                nimi: {
                    fi: 'Ammatillinen koulutus',
                    sv: 'Yrkesutbildning',
                },
                lyhytNimi: {
                    fi: 'Ammatillinen koulutus',
                },
                koodistoUri: 'opiskeluoikeudentyyppi',
                koodistoVersio: 1,
            },
            alkamispäivä: '2010-03-01',
        },
    ],
};

export const koulutussopimusopiskelija = {
    henkilö: {
        oid: '1.2.246.562.24.56199242273',
        hetu: '190804A0168',
        syntymäaika: '2004-08-19',
        etunimet: 'Ammatti',
        kutsumanimi: 'Ammatti',
        sukunimi: 'Oppisopimus-Koulutussopimus',
        turvakielto: false,
    },
    opiskeluoikeudet: [
        {
            oid: '1.2.246.562.15.56720600354',
            versionumero: 7,
            aikaleima: '2019-10-25T12:45:45.114938',
            oppilaitos: {
                oid: '1.2.246.562.10.52251087186',
                oppilaitosnumero: {
                    koodiarvo: '10105',
                    nimi: {
                        fi: 'Stadin ammatti- ja aikuisopisto',
                    },
                    lyhytNimi: {
                        fi: 'Stadin ammatti- ja aikuisopisto',
                    },
                    koodistoUri: 'oppilaitosnumero',
                    koodistoVersio: 1,
                },
                nimi: {
                    fi: 'Stadin ammattiopisto',
                },
                kotipaikka: {
                    koodiarvo: '091',
                    nimi: {
                        fi: 'Helsinki',
                        sv: 'Helsingfors',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 2,
                },
            },
            koulutustoimija: {
                oid: '1.2.246.562.10.346830761110',
                nimi: {
                    fi: 'Helsingin kaupunki',
                    sv: 'Helsingfors stad',
                },
                yTunnus: '0201256-6',
                kotipaikka: {
                    koodiarvo: '091',
                    nimi: {
                        fi: 'Helsinki',
                        sv: 'Helsingfors',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 2,
                },
            },
            ostettu: false,
            tila: {
                opiskeluoikeusjaksot: [
                    {
                        alku: '2017-04-03',
                        tila: {
                            koodiarvo: 'lasna',
                            nimi: {
                                fi: 'Läsnä',
                                sv: 'Närvarande',
                                en: 'Present',
                            },
                            koodistoUri: 'koskiopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                        opintojenRahoitus: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'Valtionosuusrahoitteinen koulutus',
                                sv: 'Statsandelsfinansierad utbildning',
                            },
                            koodistoUri: 'opintojenrahoitus',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2018-10-31',
                        tila: {
                            koodiarvo: 'katsotaaneronneeksi',
                            nimi: {
                                fi: 'Katsotaan eronneeksi',
                                sv: 'Anses utskriven',
                                en: 'Considered as discontinued',
                            },
                            koodistoUri: 'koskiopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                        opintojenRahoitus: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'Valtionosuusrahoitteinen koulutus',
                                sv: 'Statsandelsfinansierad utbildning',
                            },
                            koodistoUri: 'opintojenrahoitus',
                            koodistoVersio: 1,
                        },
                    },
                ],
            },
            suoritukset: [
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '381304',
                            nimi: {
                                fi: 'Kauneudenhoitoalan perustutkinto',
                                sv: 'Grundexamen inom skönhetsbranschen',
                                en: 'Beauty Care, VQ',
                            },
                            lyhytNimi: {
                                fi: 'Kauneudenhoitoalan perustutk',
                                sv: 'Skönhetsbr., gr.ex.',
                                en: 'Beauty Care, Vocational Qualification',
                            },
                            koodistoUri: 'koulutus',
                            koodistoVersio: 11,
                        },
                        perusteenDiaarinumero: '47/011/2014',
                        perusteenNimi: {
                            fi: 'Kauneudenhoitoalan perustutkinto',
                            sv: 'Grundexamen inom skönhetsbranschen',
                        },
                        koulutustyyppi: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'Ammatillinen perustutkinto',
                                sv: 'Yrkesinriktad grundexamen',
                                en: 'Vocational upper secondary qualification',
                            },
                            lyhytNimi: {
                                fi: 'Ammatillinen perustutkinto',
                                sv: 'Yrkesinriktad grundexamen',
                            },
                            koodistoUri: 'koulutustyyppi',
                            koodistoVersio: 2,
                        },
                    },
                    suoritustapa: {
                        koodiarvo: 'ops',
                        nimi: {
                            fi: 'Ammatillinen perustutkinto',
                            sv: 'Läroplansbaserad',
                            en: 'Opetussuunnitelman mukainen',
                        },
                        lyhytNimi: {
                            fi: 'ops',
                            sv: 'ops',
                            en: 'ops',
                        },
                        koodistoUri: 'ammatillisentutkinnonsuoritustapa',
                        koodistoVersio: 1,
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.52251087186',
                        oppilaitosnumero: {
                            koodiarvo: '10105',
                            nimi: {
                                fi: 'Stadin ammatti- ja aikuisopisto',
                            },
                            lyhytNimi: {
                                fi: 'Stadin ammatti- ja aikuisopisto',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Stadin ammattiopisto',
                        },
                        kotipaikka: {
                            koodiarvo: '091',
                            nimi: {
                                fi: 'Helsinki',
                                sv: 'Helsingfors',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    järjestämismuodot: [
                        {
                            alku: '2017-10-01',
                            loppu: '2017-11-30',
                            järjestämismuoto: {
                                tunniste: {
                                    koodiarvo: '20',
                                    nimi: {
                                        fi: 'Koulutuksen järjestäminen oppisopimuskoulutuksena',
                                        sv: 'Att ordna utbildningen som läroavtalsutbildning',
                                    },
                                    koodistoUri: 'jarjestamismuoto',
                                    koodistoVersio: 1,
                                },
                                oppisopimus: {
                                    työnantaja: {
                                        nimi: {
                                            fi: 'Kampaamo Kauneus',
                                        },
                                        yTunnus: '1234567-8',
                                    },
                                },
                            },
                        },
                    ],
                    osaamisenHankkimistavat: [
                        {
                            alku: '2018-03-01',
                            loppu: '2018-05-01',
                            osaamisenHankkimistapa: {
                                tunniste: {
                                    koodiarvo: 'oppisopimus',
                                    nimi: {
                                        fi: 'Oppisopimus',
                                        sv: 'Läroavtalsutbildning',
                                    },
                                    koodistoUri: 'osaamisenhankkimistapa',
                                    koodistoVersio: 1,
                                },
                                oppisopimus: {
                                    työnantaja: {
                                        nimi: {
                                            fi: 'Kampaamo Kauneus',
                                        },
                                        yTunnus: '1234567-8',
                                    },
                                    oppisopimuksenPurkaminen: {
                                        päivä: '2019-11-13',
                                        purettuKoeajalla: true,
                                    },
                                },
                            },
                        },
                    ],
                    työssäoppimisjaksot: [
                        {
                            alku: '2017-12-01',
                            loppu: '2018-01-31',
                            työssäoppimispaikka: {
                                fi: 'Huiskiharruslaitos',
                            },
                            paikkakunta: {
                                koodiarvo: '005',
                                nimi: {
                                    fi: 'Alajärvi',
                                    sv: 'Alajärvi',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                            maa: {
                                koodiarvo: '246',
                                nimi: {
                                    fi: 'Suomi',
                                    sv: 'Finland',
                                    en: 'Finland',
                                },
                                lyhytNimi: {
                                    fi: 'FI',
                                    sv: 'FI',
                                    en: 'FI',
                                },
                                koodistoUri: 'maatjavaltiot2',
                                koodistoVersio: 2,
                            },
                            työtehtävät: {
                                fi: 'Työtehtävien kuvaus',
                            },
                            laajuus: {
                                arvo: 10,
                                yksikkö: {
                                    koodiarvo: '6',
                                    nimi: {
                                        fi: 'osaamispistettä',
                                        sv: 'kompetenspoäng',
                                        en: 'ECVET competence points',
                                    },
                                    lyhytNimi: {
                                        fi: 'osp',
                                        sv: 'kp',
                                        en: 'competence points',
                                    },
                                    koodistoUri: 'opintojenlaajuusyksikko',
                                    koodistoVersio: 1,
                                },
                            },
                        },
                    ],
                    koulutussopimukset: [
                        {
                            alku: '2018-05-02',
                            loppu: '2018-07-31',
                            työssäoppimispaikka: {
                                fi: 'Huiskiharruslaitos',
                            },
                            työssäoppimispaikanYTunnus: '1234567-8',
                            paikkakunta: {
                                koodiarvo: '005',
                                nimi: {
                                    fi: 'Alajärvi',
                                    sv: 'Alajärvi',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                            maa: {
                                koodiarvo: '246',
                                nimi: {
                                    fi: 'Suomi',
                                    sv: 'Finland',
                                    en: 'Finland',
                                },
                                lyhytNimi: {
                                    fi: 'FI',
                                    sv: 'FI',
                                    en: 'FI',
                                },
                                koodistoUri: 'maatjavaltiot2',
                                koodistoVersio: 2,
                            },
                            työtehtävät: {
                                fi: 'Lattioiden huispaaminen',
                            },
                        },
                    ],
                    osasuoritukset: [
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '100170',
                                    nimi: {
                                        fi: 'Ehostus',
                                        sv: 'Makeup',
                                    },
                                    lyhytNimi: {
                                        fi: 'Ehostus',
                                        sv: 'Makeup',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 2,
                                },
                                pakollinen: true,
                                laajuus: {
                                    arvo: 15,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Ammatilliset tutkinnon osat',
                                    sv: 'Yrkesinriktade examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                            sv: 'berömlig',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-04-03',
                                    hyväksytty: true,
                                },
                            ],
                            näyttö: {
                                kuvaus: {
                                    fi: 'Näytön suorituksen sisällön kuvaus',
                                },
                                suorituspaikka: {
                                    tunniste: {
                                        koodiarvo: '2',
                                        nimi: {
                                            fi: 'oppilaitos',
                                            sv: 'läroanstalt',
                                        },
                                        koodistoUri: 'ammatillisennaytonsuorituspaikka',
                                        koodistoVersio: 1,
                                    },
                                    kuvaus: {
                                        fi: 'Koulun nimi',
                                    },
                                },
                                työssäoppimisenYhteydessä: false,
                                arviointi: {
                                    arvosana: {
                                        koodiarvo: '3',
                                        nimi: {
                                            fi: 'kiitettävä',
                                            sv: 'berömlig',
                                        },
                                        lyhytNimi: {
                                            fi: 'K3',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2018-04-03',
                                    arvioitsijat: [
                                        {
                                            nimi: 'Anne Arvioija',
                                            ntm: true,
                                        },
                                    ],
                                    arvioinnistaPäättäneet: [
                                        {
                                            koodiarvo: '1',
                                            nimi: {
                                                fi: 'Opettaja',
                                                sv: 'Lärare',
                                            },
                                            koodistoUri: 'ammatillisennaytonarvioinnistapaattaneet',
                                            koodistoVersio: 1,
                                        },
                                    ],
                                    arviointikeskusteluunOsallistuneet: [
                                        {
                                            koodiarvo: '1',
                                            nimi: {
                                                fi: 'Opettaja',
                                                sv: 'Lärare',
                                            },
                                            koodistoUri: 'ammatillisennaytonarviointikeskusteluunosallistuneet',
                                            koodistoVersio: 1,
                                        },
                                        {
                                            koodiarvo: '3',
                                            nimi: {
                                                fi: 'Työnantaja/Työelämän edustaja',
                                                sv: 'Arbetsgivare',
                                            },
                                            koodistoUri: 'ammatillisennaytonarviointikeskusteluunosallistuneet',
                                            koodistoVersio: 1,
                                        },
                                    ],
                                    hyväksytty: true,
                                },
                            },
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Yrkesexamensdel',
                                    en: 'A vocational education qualification unit',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '100175',
                                    nimi: {
                                        fi: 'Kylpylähoidot',
                                        sv: 'Spabehandlingar',
                                    },
                                    lyhytNimi: {
                                        fi: 'Kylpylähoidot',
                                        sv: 'Spabehandlingar',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 2,
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 20,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Ammatilliset tutkinnon osat',
                                    sv: 'Yrkesinriktade examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            arviointi: [
                                {
                                    arvosana: {
                                        koodiarvo: 'Hyväksytty',
                                        nimi: {
                                            fi: 'Hyväksytty',
                                            sv: 'Godkänd',
                                        },
                                        lyhytNimi: {
                                            fi: 'Hyväksytty',
                                        },
                                        koodistoUri: 'arviointiasteikkoammatillinenhyvaksyttyhylatty',
                                        koodistoVersio: 1,
                                    },
                                    päivä: '2019-04-03',
                                    hyväksytty: true,
                                },
                            ],
                            tunnustettu: {
                                selite: {
                                    fi: 'Tunnustettu aiemmasta tutkinnosta',
                                },
                                rahoituksenPiirissä: false,
                            },
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Yrkesexamensdel',
                                    en: 'A vocational education qualification unit',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '101054',
                                    nimi: {
                                        fi: 'Matemaattis-luonnontieteellinen osaaminen',
                                        sv: 'Kunnande i matematik och naturvetenskap',
                                    },
                                    lyhytNimi: {
                                        fi: 'Matemaattis-luonnontieteellinen osaaminen',
                                        sv: 'Kunnande i matematik och naturvetenskap',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 2,
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 10,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'Yhteiset tutkinnon osat',
                                    sv: 'Gemensamma examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            osasuoritukset: [
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'FK',
                                            nimi: {
                                                fi: 'Fysiikka ja kemia',
                                                sv: 'Fysik och kemi',
                                            },
                                            lyhytNimi: {
                                                fi: 'Fysiikka ja kemia',
                                            },
                                            koodistoUri: 'ammatillisenoppiaineet',
                                            koodistoVersio: 1,
                                        },
                                        pakollinen: false,
                                        laajuus: {
                                            arvo: 2,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                    sv: 'berömlig',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2019-04-03',
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                            sv: 'Delområde av en gemensam examendel',
                                            en: 'Section of vocational qualification unit',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'MA',
                                            nimi: {
                                                fi: 'Matematiikka',
                                                sv: 'Matematik',
                                            },
                                            lyhytNimi: {
                                                fi: 'Matematiikka',
                                                sv: 'Matematik',
                                            },
                                            koodistoUri: 'ammatillisenoppiaineet',
                                            koodistoVersio: 1,
                                        },
                                        pakollinen: true,
                                        laajuus: {
                                            arvo: 2,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: '3',
                                                nimi: {
                                                    fi: 'kiitettävä',
                                                    sv: 'berömlig',
                                                },
                                                lyhytNimi: {
                                                    fi: 'K3',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinent1k3',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2019-04-03',
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                            sv: 'Delområde av en gemensam examendel',
                                            en: 'Section of vocational qualification unit',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Yrkesexamensdel',
                                    en: 'A vocational education qualification unit',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '101056',
                                    nimi: {
                                        fi: 'Sosiaalinen ja kulttuurinen osaaminen',
                                        sv: 'Socialt och kulturellt kunnande',
                                    },
                                    lyhytNimi: {
                                        fi: 'Sosiaalinen ja kulttuurinen osaaminen',
                                        sv: 'Socialt och kulturellt kunnande',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 2,
                                },
                                pakollinen: false,
                                laajuus: {
                                    arvo: 15,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'Yhteiset tutkinnon osat',
                                    sv: 'Gemensamma examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Yrkesexamensdel',
                                    en: 'A vocational education qualification unit',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '101053',
                                    nimi: {
                                        fi: 'Viestintä- ja vuorovaikutusosaaminen',
                                        sv: 'Kunnande i kommunikation och interaktion',
                                    },
                                    lyhytNimi: {
                                        fi: 'Viestintä- ja vuorovaikutusosaaminen',
                                        sv: 'Kunnande i kommunikation och interaktion',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 2,
                                },
                                pakollinen: true,
                                laajuus: {
                                    arvo: 10,
                                    yksikkö: {
                                        koodiarvo: '6',
                                        nimi: {
                                            fi: 'osaamispistettä',
                                            sv: 'kompetenspoäng',
                                            en: 'ECVET competence points',
                                        },
                                        lyhytNimi: {
                                            fi: 'osp',
                                            sv: 'kp',
                                            en: 'competence points',
                                        },
                                        koodistoUri: 'opintojenlaajuusyksikko',
                                        koodistoVersio: 1,
                                    },
                                },
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'Yhteiset tutkinnon osat',
                                    sv: 'Gemensamma examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            osasuoritukset: [
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'TK1',
                                            nimi: {
                                                fi: 'Toinen kotimainen kieli, ruotsi',
                                                sv: 'Andra inhemska språket, svenska',
                                            },
                                            lyhytNimi: {
                                                fi: 'Toinen kotimainen kieli, ruotsi',
                                            },
                                            koodistoUri: 'ammatillisenoppiaineet',
                                            koodistoVersio: 1,
                                        },
                                        kieli: {
                                            koodiarvo: 'SV',
                                            nimi: {
                                                fi: 'ruotsi',
                                                sv: 'svenska',
                                                en: 'Swedish',
                                            },
                                            lyhytNimi: {
                                                fi: 'ruotsi',
                                                sv: 'svenska',
                                                en: 'Swedish',
                                            },
                                            koodistoUri: 'kielivalikoima',
                                            koodistoVersio: 1,
                                        },
                                        pakollinen: true,
                                        laajuus: {
                                            arvo: 2,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: 'Hyväksytty',
                                                nimi: {
                                                    fi: 'Hyväksytty',
                                                    sv: 'Godkänd',
                                                },
                                                lyhytNimi: {
                                                    fi: 'Hyväksytty',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinenhyvaksyttyhylatty',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2018-04-03',
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                            sv: 'Delområde av en gemensam examendel',
                                            en: 'Section of vocational qualification unit',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'VK',
                                            nimi: {
                                                fi: 'Vieraat kielet',
                                                sv: 'Främmande språk',
                                            },
                                            lyhytNimi: {
                                                fi: 'Vieraat kielet',
                                            },
                                            koodistoUri: 'ammatillisenoppiaineet',
                                            koodistoVersio: 1,
                                        },
                                        kieli: {
                                            koodiarvo: 'EN',
                                            nimi: {
                                                fi: 'englanti',
                                                sv: 'engelska',
                                                en: 'English',
                                            },
                                            lyhytNimi: {
                                                fi: 'englanti',
                                                sv: 'engelska',
                                                en: 'English',
                                            },
                                            koodistoUri: 'kielivalikoima',
                                            koodistoVersio: 1,
                                        },
                                        pakollinen: true,
                                        laajuus: {
                                            arvo: 2,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: 'Hyväksytty',
                                                nimi: {
                                                    fi: 'Hyväksytty',
                                                    sv: 'Godkänd',
                                                },
                                                lyhytNimi: {
                                                    fi: 'Hyväksytty',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinenhyvaksyttyhylatty',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2018-04-03',
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                            sv: 'Delområde av en gemensam examendel',
                                            en: 'Section of vocational qualification unit',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                                {
                                    koulutusmoduuli: {
                                        tunniste: {
                                            koodiarvo: 'VVAI',
                                            nimi: {
                                                fi: 'Viestintä ja vuorovaikutus äidinkielellä',
                                                sv: 'Kommunikation och interaktion på modersmålet',
                                            },
                                            lyhytNimi: {
                                                fi: 'viestintä ja vuorovaikutus äidinkielellä',
                                            },
                                            koodistoUri: 'ammatillisenoppiaineet',
                                            koodistoVersio: 1,
                                        },
                                        kieli: {
                                            koodiarvo: 'FI',
                                            nimi: {
                                                fi: 'suomi',
                                                sv: 'finska',
                                                en: 'Finnish',
                                            },
                                            lyhytNimi: {
                                                fi: 'suomi',
                                                sv: 'finska',
                                                en: 'Finnish',
                                            },
                                            koodistoUri: 'kielivalikoima',
                                            koodistoVersio: 1,
                                        },
                                        pakollinen: false,
                                        laajuus: {
                                            arvo: 2,
                                            yksikkö: {
                                                koodiarvo: '6',
                                                nimi: {
                                                    fi: 'osaamispistettä',
                                                    sv: 'kompetenspoäng',
                                                    en: 'ECVET competence points',
                                                },
                                                lyhytNimi: {
                                                    fi: 'osp',
                                                    sv: 'kp',
                                                    en: 'competence points',
                                                },
                                                koodistoUri: 'opintojenlaajuusyksikko',
                                                koodistoVersio: 1,
                                            },
                                        },
                                    },
                                    arviointi: [
                                        {
                                            arvosana: {
                                                koodiarvo: 'Hyväksytty',
                                                nimi: {
                                                    fi: 'Hyväksytty',
                                                    sv: 'Godkänd',
                                                },
                                                lyhytNimi: {
                                                    fi: 'Hyväksytty',
                                                },
                                                koodistoUri: 'arviointiasteikkoammatillinenhyvaksyttyhylatty',
                                                koodistoVersio: 1,
                                            },
                                            päivä: '2019-04-03',
                                            hyväksytty: true,
                                        },
                                    ],
                                    tyyppi: {
                                        koodiarvo: 'ammatillisentutkinnonosanosaalue',
                                        nimi: {
                                            fi: 'Ammatillisen tutkinnon osan osa-alue',
                                            sv: 'Delområde av en gemensam examendel',
                                            en: 'Section of vocational qualification unit',
                                        },
                                        koodistoUri: 'suorituksentyyppi',
                                        koodistoVersio: 1,
                                    },
                                },
                            ],
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Yrkesexamensdel',
                                    en: 'A vocational education qualification unit',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                    ],
                    tyyppi: {
                        koodiarvo: 'ammatillinentutkinto',
                        nimi: {
                            fi: 'Ammatillinen tutkinto',
                            sv: 'Yrkesinriktad examen',
                            en: 'Vocational education  qualification',
                        },
                        koodistoUri: 'suorituksentyyppi',
                        koodistoVersio: 1,
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '999904',
                            nimi: {
                                fi: 'Näyttötutkintoon valmistava koulutus',
                                sv: 'utbildning som förbereder för fristående examen',
                            },
                            koodistoUri: 'koulutus',
                            koodistoVersio: 11,
                        },
                    },
                    tutkinto: {
                        tunniste: {
                            koodiarvo: '381304',
                            nimi: {
                                fi: 'Kauneudenhoitoalan perustutkinto',
                                sv: 'Grundexamen inom skönhetsbranschen',
                                en: 'Beauty Care, VQ',
                            },
                            lyhytNimi: {
                                fi: 'Kauneudenhoitoalan perustutk',
                                sv: 'Skönhetsbr., gr.ex.',
                                en: 'Beauty Care, Vocational Qualification',
                            },
                            koodistoUri: 'koulutus',
                            koodistoVersio: 11,
                        },
                        perusteenDiaarinumero: '47/011/2014',
                        perusteenNimi: {
                            fi: 'Kauneudenhoitoalan perustutkinto',
                            sv: 'Grundexamen inom skönhetsbranschen',
                        },
                        koulutustyyppi: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'Ammatillinen perustutkinto',
                                sv: 'Yrkesinriktad grundexamen',
                                en: 'Vocational upper secondary qualification',
                            },
                            lyhytNimi: {
                                fi: 'Ammatillinen perustutkinto',
                                sv: 'Yrkesinriktad grundexamen',
                            },
                            koodistoUri: 'koulutustyyppi',
                            koodistoVersio: 2,
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.52251087186',
                        oppilaitosnumero: {
                            koodiarvo: '10105',
                            nimi: {
                                fi: 'Stadin ammatti- ja aikuisopisto',
                            },
                            lyhytNimi: {
                                fi: 'Stadin ammatti- ja aikuisopisto',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Stadin ammattiopisto',
                        },
                        kotipaikka: {
                            koodiarvo: '091',
                            nimi: {
                                fi: 'Helsinki',
                                sv: 'Helsingfors',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'nayttotutkintoonvalmistavakoulutus',
                        nimi: {
                            fi: 'Näyttötutkintoon valmistava koulutus',
                            sv: 'Utbildning som förbereder för fristående examen',
                            en: 'Education preparing for competence demonstration qualification',
                        },
                        koodistoUri: 'suorituksentyyppi',
                        koodistoVersio: 1,
                    },
                },
            ],
            tyyppi: {
                koodiarvo: 'ammatillinenkoulutus',
                nimi: {
                    fi: 'Ammatillinen koulutus',
                    sv: 'Yrkesutbildning',
                },
                lyhytNimi: {
                    fi: 'Ammatillinen koulutus',
                },
                koodistoUri: 'opiskeluoikeudentyyppi',
                koodistoVersio: 1,
            },
            alkamispäivä: '2017-04-03',
            päättymispäivä: '2018-10-31',
        },
        {
            oid: '1.2.246.562.15.73963850760',
            versionumero: 5,
            aikaleima: '2019-09-09T16:18:09.458061',
            oppilaitos: {
                oid: '1.2.246.562.10.51720121923',
                oppilaitosnumero: {
                    koodiarvo: '10054',
                    nimi: {
                        fi: 'Omnia',
                    },
                    koodistoUri: 'oppilaitosnumero',
                    koodistoVersio: 1,
                },
                nimi: {
                    fi: 'Omnia',
                },
                kotipaikka: {
                    koodiarvo: '049',
                    nimi: {
                        fi: 'Espoo',
                        sv: 'Esbo',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 2,
                },
            },
            koulutustoimija: {
                oid: '1.2.246.562.10.53642770753',
                nimi: {
                    fi: 'Espoon seudun koulutuskuntayhtymä Omnia',
                },
                yTunnus: '0502454-6',
                kotipaikka: {
                    koodiarvo: '049',
                    nimi: {
                        fi: 'Espoo',
                        sv: 'Esbo',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 2,
                },
            },
            ostettu: false,
            tila: {
                opiskeluoikeusjaksot: [
                    {
                        alku: '2019-01-01',
                        tila: {
                            koodiarvo: 'lasna',
                            nimi: {
                                fi: 'Läsnä',
                                sv: 'Närvarande',
                                en: 'Present',
                            },
                            koodistoUri: 'koskiopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                        opintojenRahoitus: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'Valtionosuusrahoitteinen koulutus',
                                sv: 'Statsandelsfinansierad utbildning',
                            },
                            koodistoUri: 'opintojenrahoitus',
                            koodistoVersio: 1,
                        },
                    },
                ],
            },
            suoritukset: [
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '381342',
                            nimi: {
                                fi: 'Hius- ja kauneudenhoitoalan perustutkinto',
                                sv: 'Grundexamen inom hår- och skönhetsbranschen',
                                en: 'Vocational qualification in Hairdressing and Beauty Care',
                            },
                            lyhytNimi: {
                                fi: 'Hius- ja kauneudenhoitoalan pt',
                                en: 'Vocational qualification in Hairdressing and Beauty Care',
                            },
                            koodistoUri: 'koulutus',
                            koodistoVersio: 11,
                        },
                        perusteenDiaarinumero: 'OPH-2532-2017',
                        perusteenNimi: {
                            fi: 'Hius- ja kauneudenhoitoalan perustutkinto',
                            sv: 'Grundexamen inom hår- och skönhetsbranschen',
                            en: 'Vocational qualification in Hairdressing and Beauty Care',
                        },
                        koulutustyyppi: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'Ammatillinen perustutkinto',
                                sv: 'Yrkesinriktad grundexamen',
                                en: 'Vocational upper secondary qualification',
                            },
                            lyhytNimi: {
                                fi: 'Ammatillinen perustutkinto',
                                sv: 'Yrkesinriktad grundexamen',
                            },
                            koodistoUri: 'koulutustyyppi',
                            koodistoVersio: 2,
                        },
                    },
                    suoritustapa: {
                        koodiarvo: 'reformi',
                        nimi: {
                            fi: 'Reformin mukainen näyttö',
                            sv: 'Reform',
                        },
                        lyhytNimi: {
                            fi: 'Reformi',
                        },
                        koodistoUri: 'ammatillisentutkinnonsuoritustapa',
                        koodistoVersio: 1,
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.51720121923',
                        oppilaitosnumero: {
                            koodiarvo: '10054',
                            nimi: {
                                fi: 'Omnia',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Omnia',
                        },
                        kotipaikka: {
                            koodiarvo: '049',
                            nimi: {
                                fi: 'Espoo',
                                sv: 'Esbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    osaamisenHankkimistavat: [
                        {
                            alku: '2019-10-11',
                            loppu: '2019-11-11',
                            osaamisenHankkimistapa: {
                                tunniste: {
                                    koodiarvo: 'oppisopimus',
                                    nimi: {
                                        fi: 'Oppisopimus',
                                        sv: 'Läroavtalsutbildning',
                                    },
                                    koodistoUri: 'osaamisenhankkimistapa',
                                    koodistoVersio: 1,
                                },
                                oppisopimus: {
                                    työnantaja: {
                                        nimi: {
                                            fi: 'Yrityksen nimi',
                                        },
                                        yTunnus: '1234567-8',
                                    },
                                },
                            },
                        },
                        {
                            alku: '2019-09-16',
                            loppu: '2019-09-20',
                            osaamisenHankkimistapa: {
                                tunniste: {
                                    koodiarvo: 'oppilaitosmuotoinenkoulutus',
                                    nimi: {
                                        fi: 'Oppilaitosmuotoinen koulutus',
                                        sv: 'Utbildningen som när-, distansundervisning eller på en arbetsplats',
                                    },
                                    koodistoUri: 'osaamisenhankkimistapa',
                                    koodistoVersio: 1,
                                },
                            },
                        },
                        {
                            alku: '2019-10-21',
                            loppu: '2019-10-25',
                            osaamisenHankkimistapa: {
                                tunniste: {
                                    koodiarvo: 'oppilaitosmuotoinenkoulutus',
                                    nimi: {
                                        fi: 'Oppilaitosmuotoinen koulutus',
                                        sv: 'Utbildningen som när-, distansundervisning eller på en arbetsplats',
                                    },
                                    koodistoUri: 'osaamisenhankkimistapa',
                                    koodistoVersio: 1,
                                },
                            },
                        },
                    ],
                    koulutussopimukset: [
                        {
                            alku: '2019-09-09',
                            loppu: '2019-10-10',
                            työssäoppimispaikka: {
                                fi: 'Työssäoppimispaikan nimi',
                            },
                            työssäoppimispaikanYTunnus: '1234567-8',
                            paikkakunta: {
                                koodiarvo: '002',
                                nimi: {
                                    fi: 'Aitolahti',
                                    sv: 'Aitolahti',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                            maa: {
                                koodiarvo: '246',
                                nimi: {
                                    fi: 'Suomi',
                                    sv: 'Finland',
                                    en: 'Finland',
                                },
                                lyhytNimi: {
                                    fi: 'FI',
                                    sv: 'FI',
                                    en: 'FI',
                                },
                                koodistoUri: 'maatjavaltiot2',
                                koodistoVersio: 2,
                            },
                            työtehtävät: {
                                fi: 'Lahden täyttäminen ja tyhjentäminen',
                            },
                        },
                    ],
                    osasuoritukset: [
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '105972',
                                    nimi: {
                                        fi: 'Ehostuspalvelut',
                                        sv: 'Makeuptjänster',
                                    },
                                    lyhytNimi: {
                                        fi: 'Ehostuspalvelut',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 2,
                                },
                                pakollinen: false,
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Ammatilliset tutkinnon osat',
                                    sv: 'Yrkesinriktade examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            tunnustettu: {
                                selite: {
                                    fi: 'Tunnustettu tutkinnosta "kauneudenhoitoalan perustutkinto 47/011/2014" Stadin ammattiopisto.',
                                },
                                rahoituksenPiirissä: false,
                            },
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Yrkesexamensdel',
                                    en: 'A vocational education qualification unit',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                        {
                            koulutusmoduuli: {
                                tunniste: {
                                    koodiarvo: '400013',
                                    nimi: {
                                        fi: 'Matemaattis-luonnontieteellinen osaaminen',
                                        sv: 'Kunnande i matematik och naturvetenskap',
                                    },
                                    lyhytNimi: {
                                        fi: 'Matemaattis-luonnontieteellinen osaaminen',
                                    },
                                    koodistoUri: 'tutkinnonosat',
                                    koodistoVersio: 2,
                                },
                                pakollinen: false,
                            },
                            tutkinnonOsanRyhmä: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'Yhteiset tutkinnon osat',
                                    sv: 'Gemensamma examensdelar',
                                },
                                koodistoUri: 'ammatillisentutkinnonosanryhma',
                                koodistoVersio: 1,
                            },
                            tyyppi: {
                                koodiarvo: 'ammatillisentutkinnonosa',
                                nimi: {
                                    fi: 'Ammatillisen tutkinnon osa',
                                    sv: 'Yrkesexamensdel',
                                    en: 'A vocational education qualification unit',
                                },
                                koodistoUri: 'suorituksentyyppi',
                                koodistoVersio: 1,
                            },
                        },
                    ],
                    tyyppi: {
                        koodiarvo: 'ammatillinentutkinto',
                        nimi: {
                            fi: 'Ammatillinen tutkinto',
                            sv: 'Yrkesinriktad examen',
                            en: 'Vocational education  qualification',
                        },
                        koodistoUri: 'suorituksentyyppi',
                        koodistoVersio: 1,
                    },
                },
            ],
            tyyppi: {
                koodiarvo: 'ammatillinenkoulutus',
                nimi: {
                    fi: 'Ammatillinen koulutus',
                    sv: 'Yrkesutbildning',
                },
                lyhytNimi: {
                    fi: 'Ammatillinen koulutus',
                },
                koodistoUri: 'opiskeluoikeudentyyppi',
                koodistoVersio: 1,
            },
            alkamispäivä: '2019-01-01',
        },
    ],
};

export const vstOpiskelija = {
  henkilö : {
    oid : '1.2.246.562.24.00000000104',
    hetu : '260769-598H',
    syntymäaika : '1969-07-26',
    etunimet : 'Kotoutuja',
    kutsumanimi : 'Kotoutuja',
    sukunimi : 'Vapaa-Sivistys',
    äidinkieli : {
      koodiarvo : 'FI',
      nimi : {
        fi : 'suomi',
        sv : 'finska',
        en : 'Finnish'
      },
      lyhytNimi : {
        fi : 'suomi',
        sv : 'finska',
        en : 'Finnish'
      },
      koodistoUri : 'kieli',
      koodistoVersio : 1
    },
    turvakielto : false
  },
  opiskeluoikeudet : [ {
    oid : '1.2.246.562.15.72862069621',
    versionumero : 1,
    aikaleima : '2021-06-28T11:46:01.260260',
    oppilaitos : {
      oid : '1.2.246.562.10.31915273374',
      oppilaitosnumero : {
        koodiarvo : '01694',
        nimi : {
          fi : 'Varsinais-Suomen kansanopisto',
          sv : 'Varsinais-Suomen kansanopisto',
          en : 'Varsinais-Suomen kansanopisto'
        },
        lyhytNimi : {
          fi : 'Varsinais-Suomen kansanopisto',
          sv : 'Varsinais-Suomen kansanopisto',
          en : 'Varsinais-Suomen kansanopisto'
        },
        koodistoUri : 'oppilaitosnumero'
      },
      nimi : {
        fi : 'Varsinais-Suomen kansanopisto',
        sv : 'Varsinais-Suomen kansanopisto',
        en : 'Varsinais-Suomen kansanopisto'
      },
      kotipaikka : {
        koodiarvo : '577',
        nimi : {
          fi : 'Paimio',
          sv : 'Pemar'
        },
        koodistoUri : 'kunta'
      }
    },
    koulutustoimija : {
      oid : '1.2.246.562.10.44330177021',
      nimi : {
        fi : 'Varsinais-Suomen Aikuiskoulutussäätiö sr'
      },
      yTunnus : '0136193-2',
      kotipaikka : {
        koodiarvo : '577',
        nimi : {
          fi : 'Paimio',
          sv : 'Pemar'
        },
        koodistoUri : 'kunta'
      }
    },
    arvioituPäättymispäivä : '2022-05-31',
    tila : {
      opiskeluoikeusjaksot : [ {
        alku : '2021-09-01',
        tila : {
          koodiarvo : 'lasna',
          nimi : {
            fi : 'Läsnä',
            sv : 'Närvarande',
            en : 'Present'
          },
          koodistoUri : 'koskiopiskeluoikeudentila',
          koodistoVersio : 1
        }
      } ]
    },
    suoritukset : [ {
      toimipiste : {
        oid : '1.2.246.562.10.38515028629',
        oppilaitosnumero : {
          koodiarvo : '10088',
          nimi : {
            fi : 'Itä-Suomen yliopisto',
            sv : 'Östra Finlands Universitet',
            en : 'University of Eastern Finland'
          },
          lyhytNimi : {
            fi : 'Itä-Suomen yliopisto',
            sv : 'Östra Finlands Universitet',
            en : 'University of Eastern Finland'
          },
          koodistoUri : 'oppilaitosnumero'
        },
        nimi : {
          fi : 'Itä-Suomen yliopisto',
          sv : 'Östra Finlands Universitet',
          en : 'University of Eastern Finland'
        },
        kotipaikka : {
          koodiarvo : '999',
          nimi : {
            fi : 'Ei tiedossa (kunta)',
            sv : 'Okänd kommun',
            en : 'Not known'
          },
          lyhytNimi : {
            fi : 'Ei tiedossa (kunta)',
            sv : 'Okänd kommun'
          },
          koodistoUri : 'kunta'
        }
      },
      tyyppi : {
        koodiarvo : 'vstmaahanmuuttajienkotoutumiskoulutus',
        nimi : {
          fi : 'Vapaan sivistystyön maahanmuuttajien kotoutumiskoulutus',
          sv : 'Vapaan sivistystyön maahanmuuttajien kotoutumiskoulutus',
          en : 'Vapaan sivistystyön maahanmuuttajien kotoutumiskoulutus'
        },
        koodistoUri : 'suorituksentyyppi',
        koodistoVersio : 1
      },
      koulutusmoduuli : {
        tunniste : {
          koodiarvo : '999910',
          nimi : {
            fi : 'Kansanopistojen vapaan sivistystyön maahanmuuttajien kotoutuskoulutus oppivelvollisille',
            sv : 'Fritt bildningsarbete'
          },
          lyhytNimi : {
            fi : 'Kansanopistojen vapaan sivistystyön maahanmuuttajien kotoutuskoulutus oppivelvollisille',
            sv : 'Fritt bildningsarbete'
          },
          koodistoUri : 'koulutus',
          koodistoVersio : 12
        },
        perusteenDiaarinumero : 'OPH-123-2021',
        koulutustyyppi : {
          koodiarvo : '30',
          nimi : {
            fi : 'Aikuisten maahanmuuttajien kotoutumiskoulutus',
            sv : 'Aikuisten maahanmuuttajien kotoutumiskoulutus'
          },
          koodistoUri : 'koulutustyyppi',
          koodistoVersio : 2
        },
        laajuus : {
          arvo : 54.0,
          yksikkö : {
            koodiarvo : '2',
            nimi : {
              fi : 'opintopistettä',
              sv : 'studiepoäng',
              en : 'ECTS credits'
            },
            lyhytNimi : {
              fi : 'op',
              sv : 'sp',
              en : 'ECTS cr'
            },
            koodistoUri : 'opintojenlaajuusyksikko',
            koodistoVersio : 1
          }
        }
      },
      vahvistus : {
        päivä : '2022-05-31',
        myöntäjäOrganisaatio : {
          oid : '1.2.246.562.10.14613773812',
          oppilaitosnumero : {
            koodiarvo : '00204',
            nimi : {
              fi : 'Jyväskylän normaalikoulu',
              sv : 'Jyväskylän normaalikoulu',
              en : 'Jyväskylän normaalikoulu'
            },
            lyhytNimi : {
              fi : 'Jyväskylän normaalikoulu',
              sv : 'Jyväskylän normaalikoulu',
              en : 'Jyväskylän normaalikoulu'
            },
            koodistoUri : 'oppilaitosnumero'
          },
          nimi : {
            fi : 'Jyväskylän normaalikoulu',
            sv : 'Jyväskylän normaalikoulu',
            en : 'Jyväskylän normaalikoulu'
          },
          kotipaikka : {
            koodiarvo : '179',
            nimi : {
              fi : 'Jyväskylä',
              sv : 'Jyväskylä'
            },
            koodistoUri : 'kunta'
          }
        },
        myöntäjäHenkilöt : [ {
          nimi : 'Reijo Reksi',
          titteli : {
            fi : 'rehtori'
          },
          organisaatio : {
            oid : '1.2.246.562.10.14613773812',
            oppilaitosnumero : {
              koodiarvo : '00204',
              nimi : {
                fi : 'Jyväskylän normaalikoulu',
                sv : 'Jyväskylän normaalikoulu',
                en : 'Jyväskylän normaalikoulu'
              },
              lyhytNimi : {
                fi : 'Jyväskylän normaalikoulu',
                sv : 'Jyväskylän normaalikoulu',
                en : 'Jyväskylän normaalikoulu'
              },
              koodistoUri : 'oppilaitosnumero'
            },
            nimi : {
              fi : 'Jyväskylän normaalikoulu',
              sv : 'Jyväskylän normaalikoulu',
              en : 'Jyväskylän normaalikoulu'
            },
            kotipaikka : {
              koodiarvo : '179',
              nimi : {
                fi : 'Jyväskylä',
                sv : 'Jyväskylä'
              },
              koodistoUri : 'kunta'
            }
          }
        } ]
      },
      suorituskieli : {
        koodiarvo : 'FI',
        nimi : {
          fi : 'suomi',
          sv : 'finska',
          en : 'Finnish'
        },
        lyhytNimi : {
          fi : 'suomi',
          sv : 'finska',
          en : 'Finnish'
        },
        koodistoUri : 'kieli',
        koodistoVersio : 1
      },
    } ],
    tyyppi : {
      koodiarvo : 'vapaansivistystyonkoulutus',
      nimi : {
        fi : 'Vapaan sivistystyön koulutus',
        sv : 'Fritt bildningsarbete'
      },
      lyhytNimi : {
        fi : 'Vapaan sivistystyön koulutus'
      },
      koodistoUri : 'opiskeluoikeudentyyppi',
      koodistoVersio : 1
    },
    alkamispäivä : '2021-09-01'
  } ]
}
